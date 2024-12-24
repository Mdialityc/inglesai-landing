import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import StartCourse from "@/components/start-course/StartCourse";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Banner />
      <Features />
      <StartCourse />
    </div>
  );
}
