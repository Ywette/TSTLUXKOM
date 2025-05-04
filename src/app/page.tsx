import HeroSection from '@/components/HeroSection';
import Mission from '@/components/Mission';
import Partners from '@/components/Partners';
import { ServicesList } from '@/components/ServicesList.jsx';

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <Mission />
        <ServicesList />
        {/* <ServicesSection /> */}
        <Partners />
      </main>
    </div>
  );
}
