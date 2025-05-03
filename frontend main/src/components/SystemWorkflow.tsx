
import React from 'react';

const WorkflowStep = ({ title, description, step }: { 
  title: string, 
  description: string,
  step: number
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 rounded-lg border border-stroke-gray bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-stroke-red text-white flex items-center justify-center text-sm font-medium">
            {step}
          </div>
          <h3 className="font-semibold text-lg text-stroke-dark">{title}</h3>
        </div>
        <p className="mt-2 text-stroke-dark/70">{description}</p>
      </div>
    </div>
  );
};

const SystemWorkflow = () => {
  const steps = [
    {
      title: "Health Data Input",
      description: "User fills out a form with health inputs like Age, Gender, Hypertension, BMI, etc.",
      step: 1
    },
    {
      title: "Sensor Data Collection",
      description: "Real-time vitals — Heart Rate and SpO₂ — are collected via a MAX30102 sensor connected to a NodeMCU (ESP8266).",
      step: 2
    },
    {
      title: "Data Transmission",
      description: "Data is sent via HTTP POST from the NodeMCU to a Flask backend.",
      step: 3
    },
    {
      title: "Model Processing",
      description: "Flask runs the trained ML model on combined static + live data.",
      step: 4
    },
    {
      title: "Result Display",
      description: "The stroke prediction is shown to the user.",
      step: 5
    },
    {
      title: "Alert System",
      description: "If stroke is predicted, multiple alert mechanisms are triggered.",
      step: 6,
      subSteps: [
        { text: "Buzzer activates" },
        { text: "LCD displays \"Stroke Risk Detected\"" },
        { text: "SMTP Email is sent to the user" }
      ]
    }
  ];

  return (
    <div className="bg-stroke-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-stroke-dark">How Our System Works</h2>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <WorkflowStep 
                title={step.title} 
                description={step.description} 
                step={step.step}
              />
              
              {step.subSteps && (
                <div className="mt-2 ml-8 pl-4 border-l-2 border-dashed border-stroke-red/50 space-y-2">
                  {step.subSteps.map((subStep, subIndex) => (
                    <div key={subIndex} className="flex items-center gap-2 p-2">
                      <span className="text-stroke-dark/80">{subStep.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemWorkflow;
