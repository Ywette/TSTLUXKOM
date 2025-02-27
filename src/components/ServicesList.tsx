import { services } from '@/data/services';
import Button from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';


export function ServicesList() {
  return (
    <section id="services" className="grid grid-cols-1 md:grid-cols-4 gap-6 p-20 pt-52">
      {services.map((service) => (
        <div
          key={service.id}
          className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow flex flex-col"
        >
          <Image
            src={service.picture}
            alt={service.title}
            width={100}
            height={100}
            priority
            className="rounded-full object-cover mb-5 mx-auto"
          />
          <h3 className="text-xl font-semibold mb-3 uppercase">{service.title}</h3>
          <p className="text-gray-600 mb-4">{service.description}</p>
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
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto"> {/* Add this to position the button at the end */}
            <Link href={`/services/${service.web}`}>
              <Button className="text-[15px] px-8 py-4 font-medium bg-pink-500 hover:bg-pink-500 mt-6">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}