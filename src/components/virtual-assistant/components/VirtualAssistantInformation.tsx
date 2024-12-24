import ExpandableText from "@/components/ui/expandable-text";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function VirtualAssistantInformation() {
  return (
    <div className="flex flex-col">
      <ExpandableText
        title="Maeva"
        subtitle="Asistente disponible 24/7"
        initialHeight="200px"
        content="Tu asistente personal para guiarte y ayudarte en tu proceso de aprendizaje, Maeva te asistirá en cada paso de tu formación para proporcionarte apoyo, consejos, prácticas reales de diálogos... Una inestimable ayuda para resolver tus dudas y aumentar tus capacidades."
      />
      <Separator className="h-[3px]" />
    </div>
  );
}
