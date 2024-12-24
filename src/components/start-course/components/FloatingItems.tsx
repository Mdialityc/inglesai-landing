import FloatingBookVariantDrch from "@/components/assets/floating-book-variant-drch";
import FloatingBookVariantIzq from "@/components/assets/floating-book-variant-izq";
import FloatingSnowFlakeVariantMedium from "@/components/assets/floating-snowflake-variant-medium";
import FloatingSnowflakeVariantSmall from "@/components/assets/floating-snowflake-variant-small";
import React from "react";

export default function FloatingItems() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* books */}
      <div className="absolute top-[28%] left-[1%] 2xl:left-[6%]">
        <FloatingBookVariantIzq />
      </div>
      <div className="absolute bottom-[20%] left-[42%]">
        <FloatingBookVariantDrch />
      </div>
      {/* snow flakes */}
      <div className="absolute top-[12%] left-[8%] 2xl:left-[15%]">
        <FloatingSnowflakeVariantSmall />
      </div>
      <div className="absolute top-[54%] left-[45%]">
        <FloatingSnowflakeVariantSmall />
      </div>
      <div className="absolute top-[15%] left-[36%]">
        <FloatingSnowFlakeVariantMedium />
      </div>
      <div className="absolute bottom-[15%] left-[6%] 2xl:left-[10%]">
        <FloatingSnowFlakeVariantMedium />
      </div>
    </div>
  );
}
