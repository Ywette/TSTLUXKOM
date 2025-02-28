import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Mission from "@/components/Mission"
import { ServicesList } from "@/components/ServicesList";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <main className="flex flex-col w-full">
        <HeroSection />
        <Mission />
        <ServicesList />
        <Partners />
      </main>
    </div>
  );
}
