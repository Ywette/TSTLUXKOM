"use client"
import React, { useState, useCallback } from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter, Linkedin, Upload } from 'lucide-react';
import { services } from '@/data/services';

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

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...newFiles]
    }));
  }, []);

  const removeFile = useCallback((index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="relative max-w-5xl w-full">
        {/* Contact Information Card */}
        <aside className="absolute left-8 top-1/2 -translate-y-1/2 bg-blue-900 text-white p-8 rounded-lg shadow-xl z-10 w-80">
          <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>
          
          <address className="not-italic space-y-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" aria-hidden="true" />
              <div>
                <p>23, Avenue de Paris</p>
                <p>75012 Paris</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <a href="mailto:hello@mikechemardin.com" className="break-all hover:underline">
                hello@mikechemardin.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              <a href="tel:+33619530144" className="hover:underline">
                +33619530144
              </a>
            </div>
          </address>

          <nav className="mt-12" aria-label="Social Media Links">
            <ul className="flex space-x-4">
              <li>
                <a href="#" aria-label="Instagram" className="hover:opacity-75 transition-opacity">
                  <Instagram className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter" className="hover:opacity-75 transition-opacity">
                  <Twitter className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-75 transition-opacity">
                  <Linkedin className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Contact Form Section */}
        <section className="bg-white rounded-lg shadow-xl ml-48 p-12">
          <div className="max-w-3xl ml-32">
            <header>
              <h1 className="text-2xl font-bold text-blue-900 mb-2">Get in Touch</h1>
              <p className="text-blue-600 mb-8">Feel free to drop us a line below!</p>
            </header>
            
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid grid-cols-2 gap-6">
                {/* Column 1 */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="service" className="sr-only">Choose the service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:outline-none focus:border-blue-500"
                      required
                    >
                      <option value="">Choose the service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>{service.title}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="sr-only">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company"
                      className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="fullName" className="sr-only">Your Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-6">
                  <div>
                    <label htmlFor="position" className="sr-only">Position</label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="Position"
                      className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="sr-only">Email to contact</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email to contact"
                      className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="sr-only">Phone to contact</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone to contact"
                      className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="sr-only">Project description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Project description"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:outline-none focus:border-blue-500 resize-none"
                  required
                />
              </div>

              <div className="flex flex-col space-y-2 p-4 border border-dashed border-blue-200 rounded-lg bg-blue-50">
                <div className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-blue-500" aria-hidden="true" />
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    id="file-upload"
                    onChange={handleFileChange}
                    aria-label="Upload files"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-blue-500 hover:text-blue-600"
                  >
                    Attach your files
                  </label>
                </div>
                
                {formData.files.length > 0 && (
                  <div className="space-y-1">
                    {formData.files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-600"
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
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors font-medium"
              >
                SEND
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactForm;