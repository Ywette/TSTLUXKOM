import HeroSection from '@/components/HeroSection';
import Mission from '@/components/Mission';
import Partners from '@/components/Partners';
import { ServicesList } from '@/components/ServicesList.jsx';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <main className="container flex flex-col w-full">
        <HeroSection />
        <Mission />
        <ServicesList />
        {/* <ServicesSection /> */}
        <Partners />
      </main>
    </div>
  );
}
