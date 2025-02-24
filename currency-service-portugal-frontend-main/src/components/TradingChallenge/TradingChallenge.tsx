"use client";

import React, { useState } from 'react';

const TradingChallenge = () => {
  const [selectedStep, setSelectedStep] = useState('1 Step Challenge');

  // Plans for 1 Step Challenge
  const oneStepPlans = [
    {
      title: 'Starter Plan',
      amount: '$10K',
      description: 'Packages and web page editors.',
      target: '$500',
      minDays: '5 Days',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      period: 'No Limit',
      refundable: '99 o/t',
    },
    {
      title: 'Standard Plan',
      amount: '$25K',
      description: 'Packages and web page editors.',
      isPopular: true,
      target: '$1000',
      minDays: '5 Days',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      period: 'No Limit',
      refundable: '199 o/t',
    },
    {
      title: 'Advanced Plan',
      amount: '$50K',
      description: 'Packages and web page editors.',
      target: '$2000',
      minDays: '5 Days',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      period: 'No Limit',
      refundable: '299 o/t',
    }
  ];

  // Plans for 2 Step Challenge
  const twoStepPlans = [
    {
      title: 'Starter Plan',
      amount: '$110K',
      description: 'Packages and web page editors.',
      target: '$500',
      minDays: '5 Days',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      period: 'No Limit',
      refundable: '99 o/t',
    },
    {
      title: 'Standard Plan',
      amount: '$125K',
      description: 'Packages and web page editors.',
      isPopular: true,
      target: '$1000',
      minDays: '5 Days',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      period: 'No Limit',
      refundable: '199 o/t',
    },
    {
      title: 'Advanced Plan',
      amount: '$150K',
      description: 'Packages and web page editors.',
      target: '$2000',
      minDays: '5 Days',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      period: 'No Limit',
      refundable: '299 o/t',
    }
  ];

  // Choosing the current plans based on the selected step
  const currentPlans = selectedStep === '1 Step Challenge' ? oneStepPlans : twoStepPlans;

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Enter a trading challenge</h2>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 ${
                plan.isPopular ? 'border-2 border-purple-600' : ''
              }`}
            >
              {plan.isPopular && (
                <span className="inline-block bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  ⚡ Popular Plan
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-500 mb-4">{plan.description}</p>
              <h4 className="text-purple-600 text-4xl font-bold">{plan.amount}</h4>
              <p className="text-gray-500">Funding amount</p>

              <ul className="text-left mt-6 space-y-2 text-gray-600">
                <li>
                  <span className="font-semibold">Target: </span>
                  {plan.target}
                </li>
                <li>
                  <span className="font-semibold">Min. Trading Days: </span>
                  {plan.minDays}
                </li>
                <li>
                  <span className="font-semibold">Daily Drawdown: </span>
                  {plan.dailyDrawdown}
                </li>
                <li>
                  <span className="font-semibold">Max. Drawdown: </span>
                  {plan.maxDrawdown}
                </li>
                <li>
                  <span className="font-semibold">Trading Period: </span>
                  {plan.period}
                </li>
                <li>
                  <span className="font-semibold">Refundable Fee: </span>
                  {plan.refundable}
                </li>
              </ul>

              <div className="mt-4">
                <input type="checkbox" id={`compare-${index}`} className="mr-2" />
                <label htmlFor={`compare-${index}`} className="text-gray-600">
                  Compare
                </label>
              </div>

              <button className="bg-purple-600 text-white w-full py-2 mt-4 rounded-full hover:bg-purple-700 transition">
                🚀 START NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingChallenge;
