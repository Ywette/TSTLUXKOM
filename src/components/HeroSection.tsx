'use client';
import React from 'react';
import Button from './ui/Button';
import Link from 'next/link';

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient-x"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-text-light leading-tight">
            Your Partner for
            <span className="block text-accent-highlight mt-2">SATCOM Projects</span>
          </h1>
          
          <p className="text-xl text-text-light/80 leading-relaxed">
            Whether you're looking to enhance your service management, install or refurbish antennas, or optimize your RF equipment, we've got you covered. At TST LUXKOM, we specialize in delivering seamless, reliable, and high-performance satellite communication solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="#services">
              <Button 
                className="text-lg px-8 py-4 font-semibold bg-accent-highlight hover:bg-accent-highlight/90 text-text-light w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >                       
                Discover Services
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="text-lg px-8 py-4 font-semibold border-2 border-accent-highlight bg-transparent hover:bg-accent-highlight/10 text-accent-highlight w-full sm:w-auto transition-colors">
                Tell About Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-accent-highlight/50"></div>
      </div>
    </section>
  );
}

export default HeroSection;