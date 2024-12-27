import OptionPanelSections from "@/app/(public)/components/option-panel-sections/OptionPanelSections";
import React from "react";

export default function OurCoursesInformation() {
  return (
    <div className="mt-32">
      <OptionPanelSections title="Nuestros Cursos">
        <p className="text-[#1B2A5D] text-2xl">
          Elaborados para sacar el máximo partido de la IA
        </p>
      </OptionPanelSections>
    </div>
  );
}
