import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const IoTPage = () => {
  return (
    <div className="min-h-screen bg-stroke-light">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-stroke-dark">IoT Integration & Data Flow</h1>
        <p className="text-lg text-stroke-dark/70 mb-10">
          Our system connects hardware sensors, wireless communication, and software backends to enable real-time health monitoring.
        </p>
        
        {/* MQTT Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-stroke-dark">Role of MQTT</h2>
          
          <Card className="border border-stroke-gray mb-8">
            <CardContent className="p-6">
              <ol className="space-y-4 list-decimal pl-6">
                <li className="text-stroke-dark/80">NodeMCU publishes real-time Heart Rate and SpO₂ data to an MQTT topic.</li>
                <li className="text-stroke-dark/80">Flask subscribes to that MQTT topic to receive the sensor data.</li>
                <li className="text-stroke-dark/80">Flask publishes a message to an MQTT topic when stroke is predicted.</li>
                <li className="text-stroke-dark/80">
                  NodeMCU subscribes to the stroke alert MQTT topic and:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li className="text-stroke-dark/80">Activates the buzzer.</li>
                    <li className="text-stroke-dark/80">Displays "Stroke Predicted" message on the LCD.</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>
        
        {/* HTTP POST Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-stroke-dark">Role of HTTP POST</h2>
          
          <Card className="border border-stroke-gray mb-8">
            <CardContent className="p-6">
              <ol className="space-y-4 list-decimal pl-6">
                <li className="text-stroke-dark/80">User enters personal health details (Gender, Age, BMI, etc.) into the frontend form.</li>
                <li className="text-stroke-dark/80">That data is sent from the frontend to the Flask backend using HTTP POST.</li>
                <li className="text-stroke-dark/80">Flask uses the form data along with the live MQTT sensor data to perform stroke prediction.</li>
              </ol>
            </CardContent>
          </Card>
        </section>
        
        {/* IoT Data Flow Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-stroke-dark">IoT Data Flow </h2>
          
          <div className="bg-white p-6 rounded-lg border border-stroke-gray mb-8">
            <ol className="space-y-8">
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stroke-red text-white flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stroke-dark mb-1">Sensor Data Collection</h3>
                  <ul className="text-stroke-dark/80 space-y-2 list-disc pl-4">
                    <li>MAX30102 reads Heart Rate and SpO₂ continuously.</li>
                    <li>NodeMCU reads these values every few seconds.</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stroke-red text-white flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stroke-dark mb-1">NodeMCU Publishes to MQTT Broker</h3>
                  <ul className="text-stroke-dark/80 space-y-2 list-disc pl-4">
                    <li>NodeMCU connects to Wi-Fi.</li>
                    <li>Publishes the Heart Rate and SpO₂ values to a topic like /sensor/data using MQTT protocol.</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stroke-red text-white flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stroke-dark mb-1">Flask Subscribes to MQTT Broker</h3>
                  <ul className="text-stroke-dark/80 space-y-2 list-disc pl-4">
                    <li>Flask app listens on /sensor/data topic.</li>
                    <li>On receiving new data, it stores Heart Rate and SpO₂ in variables or temporary storage.</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stroke-red text-white flex items-center justify-center font-semibold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stroke-dark mb-1">User Submits Form Data via HTTP POST</h3>
                  <p className="text-stroke-dark/80 mb-2">User inputs:</p>
                  <ul className="text-stroke-dark/80 space-y-2 list-disc pl-4">
                    <li>Gender, Age, Hypertension, Heart Disease, Marital Status, Work Type, Residence Type, Avg Glucose, BMI, Smoking Status.</li>
                    <li>Flask receives this data via HTTP POST request from the frontend.</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stroke-red text-white flex items-center justify-center font-semibold">
                  5
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stroke-dark mb-1">ML Prediction</h3>
                  <p className="text-stroke-dark/80 mb-2">Flask combines:</p>
                  <ul className="text-stroke-dark/80 space-y-2 list-disc pl-4">
                    <li>Form data (from user)</li>
                    <li>Live Heart Rate and SpO₂ (from MQTT)</li>
                    <li>Sends all 12 features to the trained Naive Bayes model for prediction.</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stroke-red text-white flex items-center justify-center font-semibold">
                  6
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stroke-dark mb-1">Action on Prediction</h3>
                  <p className="text-stroke-dark/80 mb-2">If stroke is predicted:</p>
                  <ul className="text-stroke-dark/80 space-y-2 list-disc pl-4">
                    <li>Flask publishes a message "stroke_detected" to MQTT topic /alert/stroke.</li>
                    <li>Flask triggers an SMTP mail to user (if email is provided) with result.</li>
                  </ul>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-stroke-red text-white flex items-center justify-center font-semibold">
                  7
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-stroke-dark mb-1">NodeMCU Subscribes to Stroke Alert</h3>
                  <p className="text-stroke-dark/80 mb-2">NodeMCU is subscribed to /alert/stroke.</p>
                  <p className="text-stroke-dark/80 mb-2">If it receives "stroke_detected":</p>
                  <ul className="text-stroke-dark/80 space-y-2 list-disc pl-4">
                    <li>Activates the buzzer.</li>
                    <li>Displays "Stroke Predicted" on the LCD display.</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>
        </section>
        
        {/* Hardware Architecture Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-stroke-dark">Hardware Architecture</h2>
          
          <Card className="border border-stroke-gray mb-8">
            <CardHeader>
              <CardTitle>System Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg min-h-60 flex items-center justify-center">
                <p className="text-stroke-red/50">Hardware Architecture Diagram Placeholder</p>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-stroke-gray">
              <CardHeader>
                <CardTitle>Sensor Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-stroke-red flex-shrink-0 mt-0.5" />
                    <span className="text-stroke-dark/80">MAX30102 connected to NodeMCU via I²C (SDA/SCL pins)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-stroke-red flex-shrink-0 mt-0.5" />
                    <span className="text-stroke-dark/80">LCD display connected via I²C interface to show results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-stroke-red flex-shrink-0 mt-0.5" />
                    <span className="text-stroke-dark/80">Buzzer connected to digital GPIO pin for alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-stroke-red flex-shrink-0 mt-0.5" />
                    <span className="text-stroke-dark/80">NodeMCU connects to local WiFi network for data transmission</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border border-stroke-gray">
              <CardHeader>
                <CardTitle>Power Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-stroke-red flex-shrink-0 mt-0.5" />
                    <span className="text-stroke-dark/80">NodeMCU powered via USB or external 5V supply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-stroke-red flex-shrink-0 mt-0.5" />
                    <span className="text-stroke-dark/80">MAX30102 requires 3.3V supply from NodeMCU's regulated output</span>
                  </li>

                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IoTPage;
