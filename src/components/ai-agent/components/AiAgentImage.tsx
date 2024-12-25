import Image from "next/image";
import React from "react";

export default function AiAgentImage() {
  return (
    <div className="flex w-full lg:w-auto justify-end">
      <div className="w-[200px] xsplus:w-[340px] xs:w-[420px] sm:w-[600px] lg:w-[500px] xl:w-[700px] 2xl:w-[800px] h-[200px] xsplus:h-[300px] xs:h-[380px] sm:h-[500px] lg:h-[500px] xl:h-[600px] relative">
        <Image
          src="/images/AiAgent.png"
          alt="Course instructor"
          fill
          className="container"
          sizes="(max-width: 200px) 100vw, 50vw"
          priority
          quality={100}
        />
      </div>
    </div>
  );
}
