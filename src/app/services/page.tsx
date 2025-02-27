"use client";

import { services } from '@/data/services';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
    const router = useRouter();

    return (
        <div className="pt-32 px-4 md:px-24">
            <h1 className="text-4xl font-bold mb-8 text-text-light">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-secondary p-6 rounded-lg shadow-lg cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => router.push(`/services/${service.web}`)}
                    >
                        <h2 className="text-xl font-semibold mb-4 text-text-light">{service.title}</h2>
                        <p className="text-text-light/80">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
} 