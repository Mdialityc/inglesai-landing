import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React, { ReactNode } from "react";

interface Props {
  image: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ image, title, description }: Props) {
  return (
    <CardContainer className="inter-var max-w-[250px]">
      <CardBody className="flex flex-col items-center text-center p-4 ">
        <CardItem className="w-20 h-20 mb-4" translateZ="60">
          {image}
        </CardItem>
        <CardItem translateZ="50" className="text-xl font-semibold mb-2">
          {title}
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-sm">
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
