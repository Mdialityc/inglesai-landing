"use client";
import React from "react";
import PlanCard from "../PlanCard/PlanCard";
import { monthlyPlans } from "../../lib/plans";

export default function MonthlyPlans() {
  return (
    <>
      {monthlyPlans.length > 0 ? (
        <div className="w-full flex flex-col lg:flex-row gap-10 items-center justify-center">
          {monthlyPlans.map((plan, index) => (
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
        <div className="flex justify-center items-center h-[400px]">
          No existen planes mensuales de momento
        </div>
      )}
    </>
  );
}
