
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MLPage = () => {
  const models = [
    {
      name: "Naïve Bayes",
      description: "A probabilistic classifier based on applying Bayes' theorem with strong independence assumptions between features.",
      formula: "P(A|B) = P(B|A) * P(A) / P(B)",
      strengths: ["Fast training & prediction", "Works well with high dimensions", "Handles missing data well"],
      weaknesses: ["Assumes feature independence", "Less accurate for complex relationships"]
    },
    {
      name: "K-Nearest Neighbors (KNN)",
      description: "A non-parametric method that classifies cases based on their similarity to other available cases.",
      formula: "Distance metrics (typically Euclidean)",
      strengths: ["Simple to understand", "No training required", "Adapts as new data arrives"],
      weaknesses: ["Computationally expensive", "Sensitive to irrelevant features", "Requires feature scaling"]
    },
    {
      name: "Random Forest",
      description: "An ensemble learning method that operates by constructing multiple decision trees and outputting the class that is the mode of the classes.",
      formula: "Ensemble of decision trees with bootstrapping",
      strengths: ["Handles non-linear relationships well", "Less prone to overfitting", "Provides feature importance"],
      weaknesses: ["Black box nature", "Can be computationally intensive", "Slower prediction times"]
    },
    {
      name: "XGBoost",
      description: "An optimized gradient boosting library designed to be efficient, flexible and portable.",
      formula: "Gradient boosted decision trees with regularization",
      strengths: ["Often provides best accuracy", "Handles imbalanced data well", "Built-in regularization"],
      weaknesses: ["More complex to tune", "May overfit with noisy data", "Longer training times"]
    }
  ];

  return (
    <div className="min-h-screen bg-stroke-light">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-stroke-dark">Machine Learning Models</h1>
        <p className="text-lg text-stroke-dark/70 mb-10">
          We evaluated multiple machine learning models to find the best approach for stroke prediction.
        </p>
        
        <div className="space-y-8">
          {models.map((model, index) => (
            <Card key={index} className="border border-stroke-gray overflow-hidden">
              <CardHeader className="bg-white">
                <CardTitle className="text-2xl text-stroke-dark">{model.name}</CardTitle>
                <CardDescription className="text-stroke-dark/80">{model.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1">
                    <h3 className="font-semibold text-stroke-dark mb-2">Key Formula</h3>
                    <div className="bg-stroke-light p-3 rounded-md text-center text-stroke-dark/90 font-mono text-sm">
                      {model.formula}
                    </div>
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="font-semibold text-stroke-dark mb-2">Strengths</h3>
                    <ul className="list-disc pl-5 space-y-1 text-stroke-dark/80">
                      {model.strengths.map((strength, i) => (
                        <li key={i}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="col-span-1">
                    <h3 className="font-semibold text-stroke-dark mb-2">Weaknesses</h3>
                    <ul className="list-disc pl-5 space-y-1 text-stroke-dark/80">
                      {model.weaknesses.map((weakness, i) => (
                        <li key={i}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-white rounded-lg border border-stroke-gray">
          <h2 className="text-2xl font-bold mb-4 text-stroke-dark">Model Selection</h2>
          <p className="text-stroke-dark/80 mb-4">
          After extensive evaluation, we selected the Random Forest model as our final classifier based on its strong performance across multiple evaluation metrics. For this healthcare application, we prioritized:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stroke-dark/80 mb-4">
          <li>High accuracy and reliability in predicting stroke outcomes.</li>
          <li>Ability to handle both categorical and numerical data efficiently.</li>
          <li>Better handling of feature interactions, which is important in biological data.</li>
          <li>Robustness to imbalanced data, such as the low number of stroke cases.</li>
          <li>Interpretability through feature importance, helping us understand which factors most influence predictions.</li>
          </ul>
          <p className="text-stroke-dark/80">
            While Random Forest and XGBoost showed slightly higher accuracy in some tests, the Naïve Bayes model provided 
            the best balance of performance, speed, and simplicity for our IoT-integrated stroke prediction system.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MLPage;
