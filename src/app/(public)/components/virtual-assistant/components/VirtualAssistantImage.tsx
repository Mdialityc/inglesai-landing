import Image from "next/image";
import React from "react";

export default function VirtualAssistantImage() {
  return (
    <div className="w-[200px] xsplus:w-[340px] xs:w-[420px] sm:w-[600px] h-[200px] xsplus:h-[300px] xs:h-[380px] sm:h-[550px] relative">
      <Image
        src="/images/virtual assistant.png"
        alt="Course instructor"
        fill
        className="container"
        sizes="(max-width: 200px) 100vw, 50vw"
        priority
        quality={100}
      />
    </div>
  );
}
