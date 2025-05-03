import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const HardwareComponents = () => {
  const components = [
    {
      title: "ESP8266 (NodeMCU)",
      description: "Wi-Fi-enabled microcontroller for sensor data transmission.",
      image: "/images/nodemcuu.jpg", // local image
    },
    {
      title: "MAX30102",
      description: "Reads Heart Rate and SpO₂ via I²C interface.",
      image: "/images/max30102.jpeg",
    },
    {
      title: "LCD Display (16x2)",
      description: "Shows stroke prediction result in real time.",
      image: "/images/lcd.png",
    },
    {
      title: "Buzzer",
      description: "Triggers alert if stroke is predicted.",
      image: "/images/buzzer.jpg",
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-stroke-dark">Hardware Used</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {components.map((component, index) => (
            <Card key={index} className="border border-stroke-gray hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-stroke-dark">{component.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-40 flex items-center justify-center mb-4 overflow-hidden rounded-md">
                  <img
                    src={component.image}
                    alt={component.title}
                    className="object-contain h-full"
                  />
                </div>
                <CardDescription className="text-stroke-dark/70">
                  {component.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HardwareComponents;
