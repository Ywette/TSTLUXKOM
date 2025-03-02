'use client'
import React, { useState, useEffect } from 'react';
import { RocketIcon, EyeIcon, StarIcon } from 'lucide-react';

// Fun animated Mission component
const Mission = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    setIsLoaded(true);
    
    // Create a starry background effect
    const createStars = () => {
      const stars = [];
      for (let i = 0; i < 100; i++) {
        const style = {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`
        };
        stars.push(<div key={i} className="star" style={style} />);
      }
      return stars;
    };
    
    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <div id="about" className="relative w-full min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 100 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-white opacity-30"
            style={{
              width: `${Math.random() * 4}px`,
              height: `${Math.random() * 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animation: `twinkle ${3 + Math.random() * 7}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute top-3/4 left-1/3 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      
      <div className={`relative z-10 max-w-6xl mx-auto px-6 py-20 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-2 animate-text bg-gradient-to-r from-teal-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our Philosophy          
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-pink-500 to-violet-500 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column: Mission & Vision */}
          <div className="space-y-8">
            <div 
              className={`bg-gradient-to-br from-indigo-800/50 to-purple-900/50 rounded-xl backdrop-blur-sm border border-white/10 p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '200ms' }}
              onMouseEnter={() => setActiveCard('mission')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600 rounded-full text-white">
                    <RocketIcon className={`w-6 h-6 transition-transform duration-700 ${activeCard === 'mission' ? 'transform translate-y-2' : ''}`} />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-pink-300 bg-clip-text text-transparent">Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  To provide innovative and reliable technology solutions that empower businesses to thrive in the digital age.
                </p>
                
                {/* Animated spark elements */}
                {activeCard === 'mission' && (
                  <>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-pink-400 rounded-full animate-ping" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-ping animation-delay-1000" />
                  </>
                )}
              </div>
            </div>

            <div 
              className={`bg-gradient-to-br from-indigo-800/50 to-purple-900/50 rounded-xl backdrop-blur-sm border border-white/10 p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500 cursor-pointer transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
              onMouseEnter={() => setActiveCard('vision')}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full text-white group-hover:rotate-12 transition-transform">
                    <EyeIcon className={`w-6 h-6 transition-all duration-700 ${activeCard === 'vision' ? 'scale-110' : ''}`} />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">Vision</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  To be the leading provider of technology services and solutions, recognized for our innovation, reliability, and commitment to customer success.
                </p>
                
                {/* Animated elements */}
                {activeCard === 'vision' && (
                  <>
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-indigo-400 rounded-full animate-ping" />
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-violet-400 rounded-full animate-ping animation-delay-1000" />
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Core Values */}
          <div 
            className={`bg-gradient-to-br from-violet-800/50 to-indigo-900/50 rounded-xl backdrop-blur-sm border border-white/10 p-6 transition-all duration-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} 
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full text-white">
                  <StarIcon className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">Core Values</h3>
              </div>
              
              <div className="space-y-6">
                <div 
                  className={`bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: '800ms' }}
                  onMouseEnter={() => setActiveCard('excellence')}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-2">Excellence</h4>
                    <p className="text-white/80">
                      We strive for excellence in everything we do, from project delivery to customer service.
                    </p>
                    
                    {activeCard === 'excellence' && (
                      <div className="absolute -right-2 top-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
                    )}
                  </div>
                </div>
                
                <div 
                  className={`bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: '1000ms' }}
                  onMouseEnter={() => setActiveCard('innovation')}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                    <p className="text-white/80">
                      We embrace new technologies and creative solutions to solve complex challenges.
                    </p>
                    
                    {activeCard === 'innovation' && (
                      <div className="absolute -right-2 top-1/2 w-3 h-3 bg-teal-400 rounded-full animate-ping" />
                    )}
                  </div>
                </div>
                
                <div 
                  className={`bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: '1200ms' }}
                  onMouseEnter={() => setActiveCard('integrity')}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div className="relative">
                    <h4 className="text-xl font-semibold text-white mb-2">Integrity</h4>
                    <p className="text-white/80">
                      We conduct our business with the highest standards of professionalism and ethics.
                    </p>
                    
                    {activeCard === 'integrity' && (
                      <div className="absolute -right-2 top-1/2 w-3 h-3 bg-blue-400 rounded-full animate-ping" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional style for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes blob {
          0% {
            transform: scale(1);
          }
          33% {
            transform: scale(1.1);
          }
          66% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-text {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Mission;