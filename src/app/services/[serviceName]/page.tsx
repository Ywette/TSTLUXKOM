// src/app/services/[serviceName]/page.tsx
import { services } from '@/data/services'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceName: service.web,
  }))
}

// Add type definition for params
type Props = {
  params: {
    serviceName: string
  }
}

export default async function ServicePage({ params }: Props) {
  const serviceName = params.serviceName
  
  const service = services.find(s => s.web === serviceName)


  if (!service) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p className="mt-4">{service.description}</p>
      {service.features && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Features</h2>
          <ul className="mt-4 space-y-2">
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}