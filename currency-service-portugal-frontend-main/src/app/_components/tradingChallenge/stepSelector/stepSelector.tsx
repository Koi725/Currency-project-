// src/app/_components/TradingChallenge/stepSelector.tsx
import React from 'react';

type StepSelectorProps = {
  selectedStep: string;
  setSelectedStep: (step: string) => void;
};

const StepSelector = ({ selectedStep, setSelectedStep }: StepSelectorProps) => {
  return (
    <div className="flex justify-center space-x-4 mb-12">
      <button
        onClick={() => setSelectedStep('1 Step Challenge')}
        className={`px-6 py-2 rounded-full text-white font-semibold ${
          selectedStep === '1 Step Challenge' ? 'bg-purple-600' : 'bg-gray-300'
        }`}
      >
        1 Step Challenge
      </button>
      <button
        onClick={() => setSelectedStep('2 Step Challenge')}
        className={`px-6 py-2 rounded-full text-white font-semibold ${
          selectedStep === '2 Step Challenge' ? 'bg-purple-600' : 'bg-gray-300'
        }`}
      >
        2 Step Challenge
      </button>
    </div>
  );
};

export default StepSelector;
