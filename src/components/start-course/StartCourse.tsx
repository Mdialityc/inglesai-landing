import Image from "next/image";
import InglesaiButton from "../ui/inglesai-button";
import FloatingItems from "./components/FloatingItems";
import { skills } from "./lib/skills";

export default function StartCourse() {
  return (
    <div className="relative overflow-visible bg-gradient-to-r from-gradient-from via-gradient-to to-gradient-to ">
      {/* Floating items */}
      <FloatingItems />
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-8 md:gap-60">
          {/* Left side - Image */}
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

          {/* Right side - Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-8 md:gap-12 mb-16">
            <div className="inline-flex px-6 py-2 bg-[#BFCAF8] text-[#1B2A5D] text-3xl font-medium self-start">
              Exámen Oficial
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl md:text-6xl font-bold text-[#1B2A5D]">
                  Curso FCE
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold text-[#1B2A5D]">
                  Preparación FCE por IA
                </h2>
              </div>

              <ul className="flex flex-col gap-4  text-lg md:text-2xl">
                {skills.map((item) => (
                  <li key={item} className="flex items-center text-[#1B2A5D]">
                    <span className="mr-3 text-2xl">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <InglesaiButton
              className="mt-8 w-full sm:w-[276px] h-[62px]"
              variant="primary"
            >
              COMENZAR CURSO
            </InglesaiButton>
          </div>
        </div>
      </div>
    </div>
  );
}
