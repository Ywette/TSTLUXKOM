"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../app/stylings/Mission.css';

const aboutData = [
  {
    icon: <span className="icon text-green-300" role="img" aria-label="Mission">🎯</span>,
    title: 'Mission',
    text: 'To deliver reliable and high-performance satellite communication solutions, enabling seamless global connectivity for clients in critical sectors.'
  },
  {
    icon: <span className="icon text-teal-300" role="img" aria-label="Vision">🚀</span>,
    title: 'Vision',
    text: 'To be the most trusted SATCOM partner worldwide, known for excellence, innovation, and commitment to customer success.'
  },
  {
    icon: <span className="icon text-blue-300" role="img" aria-label="Values">✅</span>,
    title: 'Values',
    text: 'Integrity, excellence, and dedication to innovation in every project we take on — always placing clients first.'
  }
];

export default function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title" data-aos="fade-up">
          About TST LUXKOM
        </h2>
        <p
          className="about-gradient"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Mission. Vision. Values.
        </p>
        <div className="about-grid">
          {aboutData.map(({ icon, title, text }, idx) => (
            <article
              className="about-box"
              data-aos="fade-up"
              data-aos-delay={200 + idx * 100}
              key={title}
            >
              <div className="mb-4">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div data-aos="fade-up" data-aos-delay="500">
          <a href="#partners" className="about-badge" style={{ textDecoration: 'none', color: 'inherit' }}>
            Trusted by leaders in global SATCOM
          </a>
        </div>
      </div>
    </section>
  );
}
