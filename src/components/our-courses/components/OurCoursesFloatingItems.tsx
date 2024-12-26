import FloatingArrowLasso from "@/components/assets/floating-arrow-lasso";
import FloatingBookVariantDrch from "@/components/assets/floating-book-variant-drch";
import FloatingBookVariantIzq from "@/components/assets/floating-book-variant-izq";
import FloatingCategoriesVariantMedium from "@/components/assets/floating-categories-variant-medium.tsx";
import FloatingCategoriesVariantSmall from "@/components/assets/floating-categories-variant-small";
import FloatingCursorClick from "@/components/assets/floating-cursor-click";
import FloatingNoteVariantMedium from "@/components/assets/floating-note-variant-medium";
import FloatingNoteVariantSmall from "@/components/assets/floating-note-variant-small";
import FloatingSnowFlakeVariantMedium from "@/components/assets/floating-snowflake-variant-medium";
import FloatingSnowflakeVariantSmall from "@/components/assets/floating-snowflake-variant-small";
import FloatingItems from "@/components/ui/floating-items";
import React from "react";

export default function OurCoursesFloatingItems() {
  return (
    <FloatingItems>
      {/* books */}
      <div className="absolute top-[28%] left-[1%] 2xl:left-[6%]">
        <FloatingBookVariantIzq />
      </div>
      <div className="absolute bottom-[8%] left-[42%]">
        <FloatingBookVariantDrch />
      </div>
      {/* categories */}
      <div className="absolute top-[12%] left-[8%] 2xl:left-[3%]">
        <FloatingCategoriesVariantMedium />
      </div>
      <div className="absolute top-[25%] left-[40%]">
        <FloatingCategoriesVariantSmall />
      </div>
      {/* notes */}
      <div className="absolute bottom-[18%] left-[3%] 2xl:left-[5%]">
        <FloatingNoteVariantMedium />
      </div>
      <div className="absolute top-[45%] left-[42%]">
        <FloatingNoteVariantSmall />
      </div>
      {/* snow flakes */}
      <div className="absolute top-[25%] left-[8%] 2xl:left-[12%]">
        <FloatingSnowflakeVariantSmall />
      </div>
      <div className="absolute top-[64%] left-[45%]">
        <FloatingSnowflakeVariantSmall />
      </div>
      <div className="absolute top-[15%] left-[36%]">
        <FloatingSnowFlakeVariantMedium />
      </div>
      <div className="absolute bottom-[15%] left-[2%] 2xl:left-[4%]">
        <FloatingSnowFlakeVariantMedium />
      </div>
      {/* Cursor Click */}
      <div className="hidden lg:flex absolute bottom-[24%] xl:bottom-[24%] 2xl:bottom-[36%] right-[6%] xl:right-[15%] 2xl:right-[20%]">
        <FloatingCursorClick />
      </div>
      {/* Arrow Lasso */}
      <div className="hidden lg:flex absolute  bottom-[55%] right-[40%]">
        <FloatingArrowLasso />
      </div>
    </FloatingItems>
  );
}
