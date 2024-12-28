import React from "react";

interface Props {
  title: string;
  price?: number;
  icon?: React.ReactNode;
  isRecommended: boolean;
}

export default function PlanCardHeader({
  isRecommended,
  price,
  icon,
  title,
}: Props) {
  return (
    <div>
      <div className="mb-6 flex justify-center">
        <div className="h-12 w-12">{icon}</div>
      </div>

      <h3 className="mb-4 text-center text-2xl font-bold">{title}</h3>

      <div className="mb-6 text-center">
        {price ? (
          <div
            className={`flex gap-2 items-center justify-center ${
              isRecommended ? "text-background" : "text-secondary"
            }`}
          >
            <span className="text-lg">€</span>
            <span className="text-5xl font-bold">{price}</span>
            <span className="text-sm">/ mes</span>
          </div>
        ) : (
          <p className="text-xl text-secondary">Contactar</p>
        )}
      </div>
    </div>
  );
}
