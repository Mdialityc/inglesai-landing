import React from "react";
import OurCoursesInformation from "./components/OurCoursesInformation";
import OurCoursesImage from "./components/OurCoursesImage";
import OurCoursesFloatingItems from "./components/OurCoursesFloatingItems";

export default function OurCourses() {
  return (
    <div className="relative overflow-visible bg-gradient-to-r from-gradient-from via-gradient-to to-gradient-to ">
      {/* Floating items */}
      <OurCoursesFloatingItems />
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-60">
          {/* Left side - Image */}
          <OurCoursesImage />
          {/* Right side - Content */}
          <OurCoursesInformation />
        </div>
      </div>
    </div>
  );
}
