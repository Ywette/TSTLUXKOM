"use client"
import React, { useState, useCallback, useEffect } from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Upload, 
         Satellite, Globe, Wifi, Shield, Radio, Zap } from 'lucide-react';
import '../stylings/Contacts.css';

// Demo services data - replace with your actual data import
const services = [
  { id: 'satcom', title: 'Satellite Communications', type: 'satcom', web: 'satcom' },
  { id: 'connectivity', title: 'Global Connectivity', type: 'connectivity', web: 'connectivity' },
  { id: 'consulting', title: 'Technical Consulting', type: 'consulting', web: 'consulting' },
  { id: 'security', title: 'Secure Communications', type: 'security', web: 'security' }
];

interface FormData {
  service: string;
  company: string;
  fullName: string;
  position: string;
  email: string;
  phone: string;
  description: string;
  files: File[];
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    service: '',
    company: '',
    fullName: '',
    position: '',
    email: '',
    phone: '',
    description: '',
    files: []
  });
  
  // Animation states
  const [satellitePosition, setSatellitePosition] = useState({ x: 0, y: 0 });
  const [showSignal, setShowSignal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showTrack, setShowTrack] = useState(false);
  
  // Service icon mapping
  const serviceIcons = {
    'satcom': Satellite,
    'consulting': Globe,
    'security': Shield
  };

  // Handle input changes
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Trigger signal animation when selecting a service
    if (name === 'service' && value) {
      setShowSignal(true);
      setTimeout(() => setShowSignal(false), 3000);
    }
  }, []);

  // Handle file uploads
  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    
    // Create a "transmission" effect when files are added
    setShowTrack(true);
    setTimeout(() => setShowTrack(false), 2000);
    
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...newFiles]
    }));
  }, []);

  // Remove uploaded files
  const removeFile = useCallback((index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  }, []);

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animation for form submission
    setShowSignal(true);
    setFormSubmitted(true);
    
    // Mock submission process with timeout
    setTimeout(() => {
      setShowSignal(false);
      alert('Your message has been transmitted successfully! Our satellite network has received your communication.');
      
      // Reset form after submission (optional)
      // setFormData({
      //   service: '',
      //   company: '',
      //   fullName: '',
      //   position: '',
      //   email: '',
      //   phone: '',
      //   description: '',
      //   files: []
      // });
      // setFormSubmitted(false);
    }, 3000);
  };
  
  // Mouse move effect for satellite follow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only update occasionally to make movement smoother
      if (Math.random() > 0.92) {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;
        setSatellitePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Random satellite track effect
  useEffect(() => {
    const trackInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setShowTrack(true);
        setTimeout(() => setShowTrack(false), 2000);
      }
    }, 5000);
    
    return () => clearInterval(trackInterval);
  }, []);

  return (
    <main className="contact-page">
      {/* Background animation elements */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="orbit"></div>
        <div className="earth-background"></div>
        {showTrack && <div className="satellite-track"></div>}
      </div>
      
      {/* Floating satellite that follows cursor */}
      <div className="satellite" style={{ 
        transform: `translate(${satellitePosition.x}px, ${satellitePosition.y}px)` 
      }}>
        <Satellite size={24} className="satellite-icon" />
        <div className={`signal-wave ${showSignal ? 'transmitting' : ''}`}></div>
      </div>
      
      <div className="contact-container">
        {/* Contact Information Card */}
        <aside className="contact-info-card">
          <div className="card-orbit-decoration"></div>
          
          <h2 className="contact-title">
            <Radio className="title-icon" />
            Mission Control
          </h2>
          
          <address className="contact-address">
            <div className="contact-item">
              <MapPin className="contact-icon pulse-icon" aria-hidden="true" />
              <div>
                <p>Ground Station Alpha</p>
                <p>Luxembourg, EU</p>
              </div>
            </div>
            
            <div className="contact-item">
              <Mail className="contact-icon pulse-icon" aria-hidden="true" />
              <a href="mailto:comms@satconnect.com" className="contact-link">
                comms@satconnect.com
              </a>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon pulse-icon" aria-hidden="true" />
              <a href="tel:+35226007000" className="contact-link">
                +352 2600 7000
              </a>
            </div>
          </address>

          <div className="signal-indicator">
            <div className="signal-dot"></div>
            <div className="signal-dot"></div>
            <div className="signal-dot"></div>
            <span>Satellite Link Active</span>
          </div>

          <nav className="social-nav" aria-label="Social Media Links">
            <ul className="social-list">
              <li>
                <a href="#" aria-label="Instagram" className="social-icon-link">
                  <Instagram className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter" className="social-icon-link">
                  <Twitter className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn" className="social-icon-link">
                  <Linkedin className="social-icon" />
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Contact Form Section */}
        <section className={`form-section ${formSubmitted ? 'success' : ''}`}>
          <div className="orbit-decoration"></div>
          
          <div className="form-container">
            <header className="form-header">
              <h1 className="form-title">
                <Zap size={20} className="inline-icon" style={{ marginRight: '8px' }} />
                Establish Communication
              </h1>
              <p className="form-subtitle">Transmit your request to our satellite network</p>
            </header>
            
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="form-grid">
                {/* Column 1 */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="service" className="sr-only">Choose the service</label>
                    <div className="select-wrapper">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="form-select"
                        required
                      >
                        <option value="">Select Transmission Type</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.id}>{service.title}</option>
                        ))}
                      </select>
                      {formData.service && serviceIcons[formData.service as keyof typeof serviceIcons] && 
                        React.createElement(serviceIcons[formData.service as keyof typeof serviceIcons], { 
                          className: 'service-select-icon',
                          size: 20
                        })
                      }
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company" className="sr-only">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Organization / Company"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="fullName" className="sr-only">Your Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Commander Name"
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="form-column">
                  <div className="form-group">
                    <label htmlFor="position" className="sr-only">Position</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Your Position / Role"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email to contact</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Communication Channel (Email)"
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone" className="sr-only">Phone to contact</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Backup Frequency (Phone)"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description" className="sr-only">Project description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Mission Briefing / Project Details"
                  rows={4}
                  className="form-textarea"
                  required
                />
              </div>

              <div className="file-upload-container">
                <div className="file-upload-header">
                  <Upload className="upload-icon" aria-hidden="true" />
                  <input
                    type="file"
                    multiple
                    className="hidden-input"
                    id="file-upload"
                    onChange={handleFileChange}
                    aria-label="Upload files"
                  />
                  <label
                    htmlFor="file-upload"
                    className="file-upload-label"
                  >
                    Upload Mission Files
                  </label>
                </div>
                
                {formData.files.length > 0 && (
                  <div className="file-list">
                    {formData.files.map((file, index) => (
                      <div key={index} className="file-item">
                        <span className="file-name">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="file-remove-button"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="submit-button"
              >
                <span>TRANSMIT</span>
                <div className="button-signal"></div>
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactForm;