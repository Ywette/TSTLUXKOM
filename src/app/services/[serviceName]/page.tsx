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
    <main>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      {service.features && (
        <div>
          <h2>Features</h2>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  )
}