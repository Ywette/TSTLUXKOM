import HeroSection from "@/components/HeroSection";
import Partners from "@/components/Partners";
import Mission from "@/components/Mission"
import { ServicesList } from "@/components/ServicesList";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <main className="containerflex flex-col w-full">
        <HeroSection />
        <Mission />
        <ServicesList />
        {/* <ServicesSection /> */}
        <Partners />
      </main>
    </div>
  );
}
