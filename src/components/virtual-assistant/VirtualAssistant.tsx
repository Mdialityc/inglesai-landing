import React from "react";
import VirtualAssistantInformation from "./components/VirtualAssistantInformation";
import VirtualAssistantImage from "./components/VirtualAssistantImage";

export default function VirtualAssistant() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between p-6">
        <VirtualAssistantInformation />
        <VirtualAssistantImage />
      </div>
    </div>
  );
}
