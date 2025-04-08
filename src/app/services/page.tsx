"use client";

import { services } from '@/data/services';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
    const router = useRouter();
    
    return (
        <div>
            <h1>Our Services</h1>
            <div>
                {services.map((service) => (
                    <div
                        key={service.id}
                        onClick={() => router.push(`/services/${service.web}`)}
                    >
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}