import OptionPanelSections from "@/app/(public)/components/option-panel-sections/OptionPanelSections";
import React from "react";
import { skills } from "../lib/skills";

export default function StartCourseInformation() {
  return (
    <OptionPanelSections
      sectionTitle="Exámen Oficial"
      title="Curso FCE"
      subtitle="Preparación FCE por IA"
      titleButton="COMENZAR CURSO"
    >
      <ul className="flex flex-col gap-4  text-lg md:text-2xl">
        {skills.map((item) => (
          <li key={item} className="flex items-center text-[#1B2A5D]">
            <span className="mr-3 text-2xl">•</span>
            {item}
          </li>
        ))}
      </ul>
    </OptionPanelSections>
  );
}
