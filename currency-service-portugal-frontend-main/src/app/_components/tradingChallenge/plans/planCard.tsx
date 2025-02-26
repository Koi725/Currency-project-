// src/app/_components/TradingChallenge/planCard.tsx
import React from 'react';

type PlanCardProps = {
  plan: {
    title: string;
    amount: string;
    target: string;
    minDays: string;
    dailyDrawdown: string;
    maxDrawdown: string;
    period: string;
    refundable: string;
    isPopular?: boolean;
  };
};

const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div
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
      <h4 className="text-purple-600 text-4xl font-bold">{plan.amount}</h4>
      <p className="text-gray-500">Funding amount</p>
      <ul className="text-left mt-6 space-y-2 text-gray-600">
        <li><span className="font-semibold">Target: </span>{plan.target}</li>
        <li><span className="font-semibold">Min. Trading Days: </span>{plan.minDays}</li>
        <li><span className="font-semibold">Daily Drawdown: </span>{plan.dailyDrawdown}</li>
        <li><span className="font-semibold">Max. Drawdown: </span>{plan.maxDrawdown}</li>
        <li><span className="font-semibold">Trading Period: </span>{plan.period}</li>
        <li><span className="font-semibold">Refundable Fee: </span>{plan.refundable}</li>
      </ul>
      <button className="bg-purple-600 text-white w-full py-2 mt-4 rounded-full hover:bg-purple-700 transition">
        🚀 START NOW
      </button>
    </div>
  );
};

export default PlanCard;
