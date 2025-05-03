import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const redirectToPrediction = () => {
    window.location.href = 'http://127.0.0.1:5000/classification'; // replace with your actual link if needed
  };

  return (
    <div className="relative bg-gradient-to-b from-stroke-white to-stroke-light min-h-[90vh] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-stroke-red/5 rounded-full filter blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-64 h-64 bg-stroke-red/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-stroke-dark">
            Real-Time Stroke Risk <span className="text-stroke-red">Prediction</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stroke-dark/80 mb-8">
            A hybrid ML + IoT system that predicts stroke risk from health form inputs and real-time vitals using NodeMCU and a Flask backend.
          </p>
          
          <Button 
            size="lg"
            onClick={redirectToPrediction} 
            className="bg-stroke-red hover:bg-stroke-red/90 text-white shadow-lg"
          >
            Go to Prediction
            
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-stroke-red" />
      </div>
    </div>
  );
};

export default Hero;
