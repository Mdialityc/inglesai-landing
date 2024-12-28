import CheckVariantBlue from "@/components/assets/check-variant-blue";
import CheckVariantGray from "@/components/assets/check-variant-gray";
import React from "react";

interface Props {
  features: string[];
  isRecommended: boolean;
}

export default function FeaturesList({ features, isRecommended }: Props) {
  return (
    <ul className="mb-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          {isRecommended ? <CheckVariantGray /> : <CheckVariantBlue />}
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
