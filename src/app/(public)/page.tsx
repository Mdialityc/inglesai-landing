import AiAgent from "@/components/ai-agent/AiAgent";
import ApiMethod from "@/components/api-method/ApiMethod";
import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";
import StartCourse from "@/components/start-course/StartCourse";
import VirtualAssistant from "@/components/virtual-assistant/VirtualAssistant";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Banner />
      <Features />
      <StartCourse />
      <VirtualAssistant />
      <AiAgent />
      <ApiMethod />
    </div>
  );
}
