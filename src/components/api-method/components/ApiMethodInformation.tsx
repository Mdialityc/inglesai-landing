import ExpandableText from "@/components/ui/expandable-text";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function ApiMethodInformation() {
  return (
    <div className="flex flex-col">
      <ExpandableText
        title="Método API"
        subtitle="Alumno, profesor, IA"
        initialHeight="200px"
        content="En el corazón de nuestra metodología educativa se encuentra el Tridente de la Innovación Educativa, un enfoque revolucionario donde la inteligencia artificial lidera el proceso de enseñanza del inglés, adaptándose y respondiendo a las necesidades individuales del alumno"
      />
      <Separator className="h-[3px]" />
    </div>
  );
}
