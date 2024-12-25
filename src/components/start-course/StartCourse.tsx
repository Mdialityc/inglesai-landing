import StartCourseFloatingItems from "./components/StartCourseFloatingItems";
import FloatingItems from "./components/StartCourseFloatingItems";

import StartCourseInformation from "./components/StartCourseInformation";

export default function StartCourse() {
  return (
    <div className="relative overflow-visible bg-gradient-to-r from-gradient-from via-gradient-to to-gradient-to ">
      {/* Floating items */}
      <FloatingItems />
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-60">
          {/* Left side - Image */}
          <StartCourseFloatingItems />
          {/* Right side - Content */}
          <StartCourseInformation />
        </div>
      </div>
    </div>
  );
}
