import React from 'react';
import { ChevronDownIcon, PlusIcon, ShieldCheckIcon } from 'lucide-react';

const Mission: React.FC = () => (
  <div id="about" className="bg-gray-50 py-16">
    <div className="max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 inline-block relative">
          Our Company Philosophy
          <span className="absolute w-3/5 h-1 bg-blue-500 bottom-0 left-1/2 transform -translate-x-1/2 -mb-2"></span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Guided by our fundamental principles, we're committed to delivering exceptional technology solutions that make a difference.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 duration-300">
          <div className="h-28 bg-blue-50 flex items-center justify-center">
            <ChevronDownIcon className="w-16 h-16 text-blue-500" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from project delivery to customer service.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 duration-300">
          <div className="h-28 bg-blue-50 flex items-center justify-center">
            <PlusIcon className="w-16 h-16 text-blue-500" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We embrace new technologies and creative solutions to solve complex challenges.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 duration-300">
          <div className="h-28 bg-blue-50 flex items-center justify-center">
            <ShieldCheckIcon className="w-16 h-16 text-blue-500" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">Integrity</h3>
            <p className="text-gray-600">
              We conduct our business with the highest standards of professionalism and ethics.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-500 to-slate-800 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 pb-4 relative">
            Mission
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-white"></span>
          </h3>
          <p className="text-lg leading-relaxed">
            To provide innovative and reliable technology solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-slate-800 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 pb-4 relative">
            Vision
            <span className="absolute bottom-0 left-0 w-20 h-1 bg-white"></span>
          </h3>
          <p className="text-lg leading-relaxed">
            To be the leading provider of technology services and solutions, recognized for our innovation, reliability, and commitment to customer success.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300">
          Learn More About Our Approach
        </button>
      </div>
    </div>
  </div>
);

export default Mission;