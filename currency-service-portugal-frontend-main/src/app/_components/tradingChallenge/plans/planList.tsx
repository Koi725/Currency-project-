// src/app/_components/TradingChallenge/planList.tsx
import React from 'react';
import PlanCard from './planCard';

type PlanListProps = {
  plans: Array<{
    title: string;
    amount: string;
    target: string;
    minDays: string;
    dailyDrawdown: string;
    maxDrawdown: string;
    period: string;
    refundable: string;
    isPopular?: boolean;
  }>;
};

const PlanList = ({ plans }: PlanListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PlanList;
