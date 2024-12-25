import Image from "next/image";
import React from "react";

export default function OurCoursesImage() {
  return (
    <div className="w-[600px] h-[800px] hidden lg:flex relative z-30 lg:-mt-24">
      <Image
        src="/images/Our Courses.png"
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
