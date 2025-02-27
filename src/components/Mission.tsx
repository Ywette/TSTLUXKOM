import React from 'react';

const Mission: React.FC = () => (
  <div id="about" className="flex flex-col items-center justify-center gap-8 p-4 bg-gray-50 min-h-[calc(100vh-64px)]">
    <div className="flex flex-col md:flex-row gap-6 h-full">
      <section className="w-full md:w-1/2 bg-white/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white text-center opacity-85 hover:opacity-100">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Mission</h2>
        <p className="text-gray-600">
          To provide innovative and reliable technology solutions that empower businesses to thrive in the digital age.
        </p>
      </section>

      <section className="w-full md:w-1/2 bg-white/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white text-center opacity-85 hover:opacity-100">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Vision</h2>
        <p className="text-gray-600">
          To be the leading provider of technology services and solutions, recognized for our innovation, reliability, and commitment to customer success.
        </p>
      </section>
    </div>

    <section className="w-full bg-white/80 p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-white">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-900">Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50/80 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50 text-center opacity-85 hover:opacity-100">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Excellence</h3>
          <p className="text-gray-600">
            We strive for excellence in everything we do, from project delivery to customer service.
          </p>
        </div>
        <div className="bg-gray-50/80 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50 text-center opacity-85 hover:opacity-100">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Innovation</h3>
          <p className="text-gray-600">
            We embrace new technologies and creative solutions to solve complex challenges.
          </p>
        </div>
        <div className="bg-gray-50/80 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50 text-center opacity-85 hover:opacity-100">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">Integrity</h3>
          <p className="text-gray-600">
            We conduct our business with the highest standards of professionalism and ethics.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Mission;