import React from "react";
import AiAgentInformation from "./components/AiAgentInformation";
import AiAgentImage from "./components/AiAgentImage";

export default function AiAgent() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:pl-[10%] ">
      <AiAgentInformation />
      <AiAgentImage />
    </div>
  );
}
