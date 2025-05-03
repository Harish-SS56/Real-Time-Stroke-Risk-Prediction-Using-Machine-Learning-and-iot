
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InputFeatures = () => {
  // Define two categories of features
  const staticFeatures = [
    { title: "Gender", icon: "👤" },
    { title: "Age", icon: "🔢" },
    { title: "Hypertension", icon: "📈" },
    { title: "Heart Disease", icon: "❤️" },
    { title: "Marital Status", icon: "💍" },
    { title: "Work Type", icon: "💼" },
    { title: "Residence Type", icon: "🏠" },
    { title: "Avg Glucose Level", icon: "🧪" },
    { title: "BMI", icon: "⚖️" },
    { title: "Smoking Status", icon: "🚬" },
  ];

  const liveFeatures = [
    { title: "Heart Rate", icon: "💓", note: "live via MAX30102" },
    { title: "SpO₂", icon: "🫁", note: "live via MAX30102" },
  ];

  return (
    <div className="bg-stroke-light py-16" id="prediction">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-stroke-dark">Input Features</h2>
        <p className="text-center text-stroke-dark/70 mb-10 max-w-2xl mx-auto">
          Our model uses a combination of static health data and real-time sensor readings to provide accurate stroke risk predictions.
        </p>
        
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-stroke-dark">Static Health Data</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-10">
            {staticFeatures.map((feature, index) => (
              <Card key={index} className="border border-stroke-gray hover:shadow-sm transition-shadow">
                <CardHeader className="p-3 pb-0">
                  <div className="text-2xl mb-1">{feature.icon}</div>
                </CardHeader>
                <CardContent className="p-3 pt-0">
                  <CardTitle className="text-sm font-medium text-stroke-dark">{feature.title}</CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <h3 className="text-xl font-semibold mb-4 text-stroke-dark">Real-Time Sensor Data</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {liveFeatures.map((feature, index) => (
              <Card key={index} className="border border-stroke-gray bg-white shadow-sm">
                <CardContent className="p-4 flex items-center">
                  <div className="text-3xl mr-4">{feature.icon}</div>
                  <div>
                    <CardTitle className="text-lg text-stroke-dark">{feature.title}</CardTitle>
                    <p className="text-sm text-stroke-red font-medium mt-1">{feature.note}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFeatures;
