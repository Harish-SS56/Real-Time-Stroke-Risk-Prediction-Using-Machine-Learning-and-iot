# Real-Time-Stroke-Risk-Prediction-Using-Machine-Learning-and-iot
A real-time stroke risk prediction system integrating machine learning, IoT sensors (MAX30102 + NodeMCU), and a web-based UI. Live vitals (heart rate, SpO₂) are transmitted via MQTT to a Flask backend, combined with user health inputs, and analyzed using a Random Forest model for instant risk assessment.


https://github.com/user-attachments/assets/239533f9-5df0-4a0f-8a30-bdd6b3cf6f01


---

# 🧠 Real-Time Stroke Risk Prediction System

This project is a hybrid Machine Learning + Web-based system that predicts stroke risk by combining traditional health data with real-time vital signs. Users input personal health metrics through a web interface, and the system intelligently combines this with live heart rate and SpO₂ data to assess stroke risk. If a high risk is detected, an alert email is sent automatically.

---

## 🚀 Key Features

* 🔍 Predictive Analytics using Gaussian Naive Bayes
* 🩺 Real-time integration of vitals (Heart Rate & SpO₂)
* 📬 Automatic Email Alerts for High-Risk Cases
* 💻 Clean UI built with Vite + React + Tailwind CSS
* 🧪 Health form-based data collection

---

## 🛠 Tech Stack

**Frontend**

* Vite + React
* TypeScript
* Tailwind CSS
* shadcn-ui

**Backend**

* Flask (Python)
* scikit-learn (ML model)
* pandas, NumPy
* SMTP for email alerts

---

## 📦 How to Run Locally

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/stroke-risk-predictor.git
   cd stroke-risk-predictor
   ```

2. Install Python dependencies

   ```bash
   pip install -r requirements.txt
   ```

3. Start the Flask server

   ```bash
   python app.py
   ```

4. Launch frontend (from `frontend/` folder)

   ```bash
   npm install
   npm run dev
   ```

5. Open your browser at `http://localhost:5173`

---

## 📈 Input Parameters

| Feature           | Description                           |
| ----------------- | ------------------------------------- |
| Gender            | Male / Female / Other                 |
| Age               | Age in years                          |
| Hypertension      | 0 (No) / 1 (Yes)                      |
| Heart Disease     | 0 (No) / 1 (Yes)                      |
| Ever Married      | Yes / No                              |
| Work Type         | Private / Govt / Self-employed / etc. |
| Residence Type    | Urban / Rural                         |
| Avg Glucose Level | Numeric value                         |
| BMI               | Numeric value                         |
| Smoking Status    | Never / Former / Smokes               |
| Heart Rate (Live) | Real-time from sensor                 |
| SpO₂ (Live)       | Real-time from sensor                 |

---

## 📬 Alert System

When the model predicts a high stroke risk:

* An email is sent to the user
* Stroke risk status is displayed on the results page

---
