import ExpandableText from "@/components/ui/expandable-text/expandable-text";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function AiAgentInformation() {
  return (
    <div className="flex flex-col">
      <ExpandableText
        title="Tu GPT a medida"
        subtitle="El otro tú"
        initialHeight="200px"
        content="Creamos tu agente IA a medida diseñado para adaptarse a ti, aprendiento de tus interacciones para ofrecer un enfoque de enseñanza del inglés que corresponde exactamente a tu nivel actual, campo profesional y objetivos específicos."
      />
      <Separator className="h-[3px]" />
    </div>
  );
}
