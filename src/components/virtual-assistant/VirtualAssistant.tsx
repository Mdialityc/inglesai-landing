import React from "react";
import VirtualAssistantInformation from "./components/VirtualAssistantInformation";

export default function VirtualAssistant() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-60">
        <VirtualAssistantInformation />
      </div>
    </div>
  );
}
