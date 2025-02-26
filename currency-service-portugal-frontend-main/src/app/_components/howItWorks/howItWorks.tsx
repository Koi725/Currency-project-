// src/components/HowItWorks/HowItWorks.tsx
import React from 'react';

const HowItWorks = () => {
  const steps = [
    "Trading Challenge",
    "Get Verified",
    "Get Funded",
    "Get Paid"
  ];

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8">Deep Dive into Evaluation</h2>
      <div className="flex justify-center flex-wrap gap-10">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-lg p-4 shadow-lg w-64">
            <h3 className="text-2xl font-bold mb-4">Step {index + 1}</h3>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
