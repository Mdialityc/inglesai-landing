import { ReactNode } from "react";
import { numberClassesWeek, WeeklyClass } from "./number-classes-week";
import Robot from "@/components/assets/robot";
import Crown from "@/components/assets/crown";
import Building from "@/components/assets/building";

export enum PlanType {
  RECOMMENDED = 0,
  NOTRECOMMENDED = 1,
}

export interface Plan {
  title: string;
  features: string[];
  weeklyClasses?: WeeklyClass[];
  type: PlanType;
  price?: number;
  icon?: ReactNode;
  action: () => void;
  nameAction: string;
}

export const annualPlans: Plan[] = [];

export const monthlyPlans: Plan[] = [
  {
    title: "100 % IA",
    features: [
      "Contenido y ejercicios personalizados por IA",
      "Análisis detallado de progreso",
      "Práctica de conversación con IA",
      "Acceso a IA disponible 1 hora al día",
    ],
    price: 68,
    action: () => {},
    nameAction: "SELECCIONAR PLAN",
    icon: <Robot />,
    type: PlanType.NOTRECOMMENDED,
  },
  {
    title: "COMBINADO",
    features: [
      "Todas las características del plan 100% IA",
      "Corrección de escritura por agentes IA",
      "Tutoría personalizada",
      "Acceso prioritario a nuevas funciones",
      "Clases privadas al mes con profesores (25 min)",
    ],
    price: 49,
    action: () => {},
    nameAction: "CONTACTAR",
    icon: <Crown />,
    weeklyClasses: numberClassesWeek,
    type: PlanType.RECOMMENDED,
  },
  {
    title: "EMPRESA",
    features: [
      "Contenido y ejercicios personalizados por IA",
      "Análisis detallado de progreso",
      "Práctica de conversación con IA",
      "Acceso a IA disponible 1 hora al día",
    ],
    action: () => {},
    nameAction: "SELECCIONAR PLAN",
    icon: <Building />,
    type: PlanType.NOTRECOMMENDED,
  },
];
