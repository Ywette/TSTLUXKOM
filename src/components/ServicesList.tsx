import { services } from '@/data/services';
import Button from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { Cog, BarChart3, HeadphonesIcon, Code } from 'lucide-react';

const getIconForService = (serviceId: string) => {
  switch (serviceId) {
    case "1":
      return <Cog className="w-8 h-8 text-accent-highlight" />;
    case "2":
      return <BarChart3 className="w-8 h-8 text-accent-highlight" />;
    case "3":
      return <HeadphonesIcon className="w-8 h-8 text-accent-highlight" />;
    case "4":
      return <Code className="w-8 h-8 text-accent-highlight" />;
    default:
      return null;
  }
};

export function ServicesList() {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6 relative inline-block">
            Our Services
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-highlight/50 to-transparent rounded-full"></span>
          </h2>
          <p className="text-xl text-text-light/80 max-w-3xl mx-auto">
            Comprehensive solutions tailored to empower your business in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={`/TSTLUXKOM${service.picture}`}
                  alt=""
                  fill
                  className="object-cover opacity-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* Content */}
              <div className="relative z-10 p-8 min-h-[500px] flex flex-col">
                <div className="mb-6">
                  {getIconForService(service.id)}
                </div>
                
                <h3 className="text-2xl font-bold text-text-light mb-4 uppercase">
                  {service.title}
                </h3>
                
                <p className="text-lg text-text-light/80 mb-6">
                  {service.description}
                </p>

                {service.features && (
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3 text-text-light/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-highlight mt-2.5"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <Link href={`/services/${service.web}`} className="mt-auto block">
                  <Button className="w-full bg-white/10 hover:bg-accent-highlight text-text-light border border-white/20 hover:border-transparent transition-colors py-4">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}