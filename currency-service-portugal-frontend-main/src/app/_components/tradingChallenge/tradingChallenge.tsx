// src/app/_components/TradingChallenge/tradingChallenge.tsx
"use client";

import React, { useState } from 'react';
import StepSelector from './stepSelector/stepSelector';
import PlanList from './plans/planList';

// Plans for 1 Step and 2 Step Challenge
const oneStepPlans = [
  { title: 'Starter Plan', amount: '$10K', target: '$500', minDays: '5 Days', dailyDrawdown: '5%', maxDrawdown: '10%', period: 'No Limit', refundable: '99 o/t' },
  { title: 'Standard Plan', amount: '$25K', target: '$1000', minDays: '5 Days', dailyDrawdown: '5%', maxDrawdown: '10%', period: 'No Limit', refundable: '199 o/t', isPopular: true },
  { title: 'Advanced Plan', amount: '$50K', target: '$2000', minDays: '5 Days', dailyDrawdown: '5%', maxDrawdown: '10%', period: 'No Limit', refundable: '299 o/t' }
];

const twoStepPlans = [
  { title: 'Starter Plan', amount: '$110K', target: '$500', minDays: '5 Days', dailyDrawdown: '5%', maxDrawdown: '10%', period: 'No Limit', refundable: '99 o/t' },
  { title: 'Standard Plan', amount: '$125K', target: '$1000', minDays: '5 Days', dailyDrawdown: '5%', maxDrawdown: '10%', period: 'No Limit', refundable: '199 o/t', isPopular: true },
  { title: 'Advanced Plan', amount: '$150K', target: '$2000', minDays: '5 Days', dailyDrawdown: '5%', maxDrawdown: '10%', period: 'No Limit', refundable: '299 o/t' }
];

const TradingChallenge = () => {
  const [selectedStep, setSelectedStep] = useState('1 Step Challenge');
  const currentPlans = selectedStep === '1 Step Challenge' ? oneStepPlans : twoStepPlans;

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Enter a trading challenge</h2>
        <StepSelector selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
        <PlanList plans={currentPlans} />
      </div>
    </section>
  );
};

export default TradingChallenge;
