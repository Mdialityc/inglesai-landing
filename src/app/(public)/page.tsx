import AiAgent from "@/app/(public)/components/ai-agent/AiAgent";
import ApiMethod from "@/app/(public)/components/api-method/ApiMethod";
import Features from "@/app/(public)/components/features/Features";
import Opinions from "@/app/(public)/components/opinions/Opinions";
import OurCourses from "@/app/(public)/components/our-courses/OurCourses";
import StartCourse from "@/app/(public)/components/start-course/StartCourse";
import VirtualAssistant from "@/app/(public)/components/virtual-assistant/VirtualAssistant";
import Banner from "./components/banner/Banner";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Banner />
      <Features />
      <StartCourse />
      <VirtualAssistant />
      <OurCourses />
      <AiAgent />
      <ApiMethod />
      <Opinions />
    </div>
  );
}
