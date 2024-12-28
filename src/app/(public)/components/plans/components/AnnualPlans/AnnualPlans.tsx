"use client";
import React from "react";
import { annualPlans } from "../../lib/plans";
import PlanCard from "../PlanCard/PlanCard";

export default function AnnualPlans() {
  return (
    <>
      {annualPlans.length > 0 ? (
        <div className="w-full flex flex-col lg:flex-row gap-10 items-center justify-center">
          {annualPlans.map((plan, index) => (
            <PlanCard
              key={index}
              title={plan.title}
              price={plan.price}
              icon={plan.icon}
              features={plan.features}
              variant={plan.type}
              buttonText={plan.nameAction}
              onButtonClick={plan.action}
              weeklyClasses={plan.weeklyClasses}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center text-secondary text-2xl items-center h-[400px]">
          No existen planes anuales de momento
        </div>
      )}
    </>
  );
}
