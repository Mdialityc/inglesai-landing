import React from "react";
import ApiMethodInformation from "./components/ApiMethodInformation";
import ApiMethodImage from "./components/ApiMethodImage";

export default function ApiMethod() {
  return (
    <div className="bg-[#EDF4FF] ">
      <div className="container mx-auto px-4 bg-[#EDF4FF]">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between p-6">
          <ApiMethodInformation />
          <ApiMethodImage />
        </div>
      </div>
    </div>
  );
}
