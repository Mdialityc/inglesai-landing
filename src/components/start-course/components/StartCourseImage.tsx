import Image from "next/image";
import React from "react";

export default function StartCourseImage() {
  return (
    <div className="w-full md:w-1/2 hidden lg:flex relative z-30  lg:-mt-24">
      <Image
        src="/images/teacher official exam.png"
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
