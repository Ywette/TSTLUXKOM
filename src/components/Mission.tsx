import React from 'react';
import { RocketIcon, EyeIcon, StarIcon } from 'lucide-react';

const Mission: React.FC = () => (
  <div id="about" className="relative overflow-hidden bg-primary py-24">
    {/* Background effects */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-600/10 to-purple-600/10"></div>
    <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

    <div className="container mx-auto px-6 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6 relative inline-block">
          Our Philosophy
          <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-highlight/50 to-transparent rounded-full"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Mission & Vision */}
        <div className="space-y-8">
          <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accent-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <RocketIcon className="w-8 h-8 text-accent-highlight" />
                <h3 className="text-2xl font-bold text-text-light">Mission</h3>
              </div>
              <p className="text-lg text-text-light/80 leading-relaxed">
                To provide innovative and reliable technology solutions that empower businesses to thrive in the digital age.
              </p>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-accent-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <EyeIcon className="w-8 h-8 text-accent-highlight" />
                <h3 className="text-2xl font-bold text-text-light">Vision</h3>
              </div>
              <p className="text-lg text-text-light/80 leading-relaxed">
                To be the leading provider of technology services and solutions, recognized for our innovation, reliability, and commitment to customer success.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Core Values */}
        <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <StarIcon className="w-8 h-8 text-accent-highlight" />
              <h3 className="text-2xl font-bold text-text-light">Core Values</h3>
            </div>
            <div className="space-y-6">
              <div className="group relative p-6 bg-white/5 rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-accent-highlight mb-3">Excellence</h4>
                  <p className="text-text-light/80">
                    We strive for excellence in everything we do, from project delivery to customer service.
                  </p>
                </div>
              </div>
              <div className="group relative p-6 bg-white/5 rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-accent-highlight mb-3">Innovation</h4>
                  <p className="text-text-light/80">
                    We embrace new technologies and creative solutions to solve complex challenges.
                  </p>
                </div>
              </div>
              <div className="group relative p-6 bg-white/5 rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-accent-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h4 className="text-xl font-semibold text-accent-highlight mb-3">Integrity</h4>
                  <p className="text-text-light/80">
                    We conduct our business with the highest standards of professionalism and ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Mission;