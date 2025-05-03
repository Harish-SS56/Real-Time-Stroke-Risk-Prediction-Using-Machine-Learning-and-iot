
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import SystemWorkflow from '@/components/SystemWorkflow';
import HardwareComponents from '@/components/HardwareComponents';
import InputFeatures from '@/components/InputFeatures';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Introduction />
      <SystemWorkflow />
      <HardwareComponents />
      <InputFeatures />
      

    </div>
  );
};

export default Index;
