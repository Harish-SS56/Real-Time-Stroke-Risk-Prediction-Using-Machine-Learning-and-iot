from flask import Flask, render_template, request, redirect, url_for
import numpy as np
import pandas as pd
import warnings
import smtplib
import paho.mqtt.client as mqtt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.naive_bayes import GaussianNB
import threading

warnings.filterwarnings('ignore')

app = Flask(__name__)

# MQTT Setup
broker = " 192.168.143.116"
port = 1883
topic_result = "stroke/result"
topic_sensor = "sensor/data"

# Dictionary to hold latest sensor values
latest_data_from_mqtt = {
    'heart_rate': 0,
    'spo2': 0
}

# MQTT Callbacks
def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))
    client.subscribe(topic_sensor)

def on_message(client, userdata, msg):
    payload = msg.payload.decode()
    print("Received:", payload)
    try:
        hr, spo2 = map(float, payload.split(","))
        latest_data_from_mqtt['heart_rate'] = hr
        latest_data_from_mqtt['spo2'] = spo2
    except Exception as e:
        print("MQTT data error:", e)

mqtt_client = mqtt.Client()
mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message
mqtt_client.connect(broker, port)

mqtt_thread = threading.Thread(target=mqtt_client.loop_forever)
mqtt_thread.daemon = True
mqtt_thread.start()

# Routes
@app.route("/")
def index():
    return redirect(url_for('classification'))  # Redirect to classification on root

@app.route('/homepage', methods=['GET', 'POST'])
def homepage():
    return render_template('index.html')

@app.route("/classification")
def classification():
    heart_rate = latest_data_from_mqtt.get('heart_rate', 'Loading...')
    spo2 = latest_data_from_mqtt.get('spo2', 'Loading...')
    return render_template("classification.html", hr_val=heart_rate, spo2_val=spo2)

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    msg = ''

    if request.method == 'POST' and all(k in request.form for k in ['s1','s2','s3','s4','s5','s6','s7','s8','s9','s10','emailid']):
        # Form Inputs
        s1 = request.form['s1']
        s2 = request.form['s2']
        s3 = request.form['s3']
        s4 = request.form['s4']
        s5 = request.form['s5']
        s6 = request.form['s6']
        s7 = request.form['s7']
        s8 = request.form['s8']
        s9 = request.form['s9']
        s10 = request.form['s10']
        emailid = request.form['emailid']

        # Live Sensor Inputs
        heart_rate = latest_data_from_mqtt['heart_rate']
        spo2 = latest_data_from_mqtt['spo2']

        # Load dataset
        dataset = pd.read_csv('healthcare-dataset-stroke-data(3).csv')
        dataset['bmi'] = dataset['bmi'].fillna(dataset['bmi'].mean())

        le = LabelEncoder()
        dataset['gender'] = le.fit_transform(dataset['gender'])
        dataset['ever_married'] = le.fit_transform(dataset['ever_married'])
        dataset['work_type'] = le.fit_transform(dataset['work_type'])
        dataset['Residence_type'] = le.fit_transform(dataset['Residence_type'])
        dataset['smoking_status'] = le.fit_transform(dataset['smoking_status'])

        # Add fake sensor columns if not present
        if 'Heart Rate' not in dataset.columns:
            dataset['Heart Rate'] = 70
        if 'SpO2' not in dataset.columns:
            dataset['SpO2'] = 98

        X = dataset[['gender', 'age', 'hypertension', 'heart_disease', 'ever_married',
                     'work_type', 'Residence_type', 'avg_glucose_level', 'bmi', 'smoking_status',
                     'Heart Rate', 'SpO2']]
        y = dataset['stroke']

        # Train model
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.35, random_state=0)
        model = GaussianNB()
        model.fit(X_train, y_train)

        # Predict
        input_data = np.array([[float(s1), float(s2), float(s3), float(s4), float(s5),
                                float(s6), float(s7), float(s8), float(s9), float(s10),
                                heart_rate, spo2]])
        Y_pred = model.predict(input_data)

        if Y_pred[0] == 1:
            msg = 'Result - Risk of Stroke High'
            mqtt_client.publish(topic_result, "STROKE")
            try:
                s = smtplib.SMTP('smtp.gmail.com', 587)
                s.starttls()
                s.login("selva.propulsion@gmail.com", "yixcjwlyxapvwoav")
                s.sendmail("selva.propulsion@gmail.com", emailid, "Stroke predicted")
                s.quit()
            except Exception as e:
                print("Email sending error:", e)
        else:
            msg = 'Result - Risk of stroke Normal'
            mqtt_client.publish(topic_result, "NORMAL")

    return render_template('resultpage.html', msg=msg)

if __name__ == "__main__":
    app.run(debug=True)
