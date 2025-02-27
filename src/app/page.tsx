import HeroSerction from "@/components/HeroSerction";
import Partners from "@/components/Partners";
import Mission from "@/components/Mission"
import { ServicesList } from "@/components/ServicesList";

export default function Home() {
  return (
    <div className="pt-0 px-24">
      <main className="flex flex-grow flex-col">
        <HeroSerction />
        <Mission />
        <ServicesList />
        <Partners />
        
      </main>
    </div>
  );
}
