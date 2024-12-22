import Banner from "@/components/banner/Banner";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Banner />
      <Features />
    </div>
  );
}
