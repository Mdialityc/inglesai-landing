import { ReactNode } from "react";
import MonthlyPlans from "../components/MonthlyPlans/MonthlyPlans";
import AnnualPlans from "../components/AnnualPlans/AnnualPlans";

export interface TypesPlans {
  tabName: string;
  value: string;
  content: ReactNode;
}

export const typesPlans: TypesPlans[] = [
  {
    tabName: "Mensuales",
    value: "monthlyPlans",
    content: <MonthlyPlans />,
  },
  {
    tabName: "Anuales",
    value: "annualPlans",
    content: <AnnualPlans />,
  },
];
