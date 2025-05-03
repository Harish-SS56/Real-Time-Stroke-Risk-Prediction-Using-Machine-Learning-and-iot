
import React from 'react';

const Introduction = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-stroke-dark">Introduction</h2>
          <p className="text-lg text-stroke-dark/80 leading-relaxed">
            Stroke is one of the world's leading causes of death and disability. Early detection can save lives. 
            This project combines machine learning models with real-time health data fetched via IoT sensors to 
            assess stroke risk in real time. By integrating traditional health metrics with live biometric data, 
            we provide a comprehensive risk assessment system that can alert users to potential stroke risk before 
            critical symptoms manifest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
