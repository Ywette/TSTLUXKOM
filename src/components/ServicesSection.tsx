import React from 'react'
import Card from './Card'

function ServicesSection() {
    return (
      <div className='container'>
        <section className='services-container'>
        {Array(4).fill(null).map((_, index) => (
          <Card
            key={index}
            id={`card-${index + 1}`}
            frontSrc='/service1.jpg'
            frontAlt='Card Name'
            backText='Service small introduction text here'
          />
        ))}
        </section>
      </div>
    )
  }
  
  export default ServicesSection