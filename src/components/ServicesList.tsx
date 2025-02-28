import { services } from '@/data/services';
import Button from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';

const getIconForService = (serviceId: string) => {
  switch (serviceId) {
    case "1":
      return <Cog className="w-6 h-6 text-white" />;
    case "2":
      return <BarChart3 className="w-6 h-6 text-white" />;
    case "3":
      return <HeadphonesIcon className="w-6 h-6 text-white" />;
    case "4":
      return <Code className="w-6 h-6 text-white" />;
    default:
      return null;
  }
};

export function ServicesList() {
  return (
    <section id="services" className="grid grid-cols-1 md:grid-cols-4 gap-6 p-20 pt-52">
      {services.map((service) => (
        <div
          key={service.id}
          className="relative p-6 rounded-lg bg-primary text-text-light hover:shadow-lg transition-shadow flex flex-col min-h-[500px] overflow-hidden"
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src={`/TSTLUXKOM${service.picture}`}
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-5">
              {getIconForService(service.id)}
            </div>
            <h3 className="text-xl font-semibold mb-3 uppercase">{service.title}</h3>
            <p className="mb-4 text-text-light/80">{service.description}</p>
            {/* {service.features && (
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )} */}
            {service.benefits && (
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="mt-1.5">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-auto">
              <Link href={`/services/${service.web}`}>
                <Button className="text-[15px] px-8 py-4 font-medium bg-accent-highlight hover:bg-accent-highlight/90 text-text-light mt-6 w-full">
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}