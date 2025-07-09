'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { josefinSans, greatvibes } from '@/app/utils/font';

interface ServiceOption {
  id: string;
  label: string;
  icon: string;
}

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedService: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const serviceOptions: ServiceOption[] = [
    { id: 'web-dev', label: 'Web Development', icon: '🌐' },
    { id: 'branding', label: 'Branding', icon: '🎨' },
    { id: 'tech-consulting', label: 'Tech Consulting', icon: '💡' },
    { id: 'google-reviews', label: 'Google Reviews', icon: '⭐' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedService: serviceId
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address');
      return false;
    }
    if (!formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.selectedService) {
      setErrorMessage('Please select a service');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSubmitStatus('idle');
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mblyvwpv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          selectedService: formData.selectedService,
          message: formData.message,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          selectedService: '',
          message: ''
        });
      } else {
        setErrorMessage(data.errors?.[0]?.message || 'Something went wrong. Please try again or contact us directly.');
        setSubmitStatus('error');
      }
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again or contact us directly.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white py-20 px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-light mb-6 ${greatvibes.className}`}>
            Let's Create Something Amazing
          </h2>
          <p className={`text-lg text-white/70 ${josefinSans.className}`}>
            Ready to bring your vision to life? Tell us about your project.
          </p>
        </motion.div>

        {/* Service Selection */}
        <motion.div variants={itemVariants} className="mb-12">
          <h3 className={`text-xl mb-6 ${josefinSans.className}`}>
            What service are you interested in?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceOptions.map((service) => (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => handleServiceSelect(service.id)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  formData.selectedService === service.id
                    ? 'border-white/50 bg-white/10 text-white'
                    : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white/90'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <div className="text-sm font-light">{service.label}</div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="space-y-6"
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-light mb-2 ${josefinSans.className}`}>
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={`block text-sm font-light mb-2 ${josefinSans.className}`}>
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className={`block text-sm font-light mb-2 ${josefinSans.className}`}>
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Selected Service (Hidden input for Formspree) */}
          <input
            type="hidden"
            name="selectedService"
            value={formData.selectedService}
          />

          {/* Message */}
          <div>
            <label className={`block text-sm font-light mb-2 ${josefinSans.className}`}>
              Tell us about your project
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors resize-none"
              placeholder="Describe your project, goals, and any specific requirements..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 px-8 bg-white text-black font-medium rounded-lg transition-all duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/90'
            }`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-center py-2"
            >
              Thank you! Your message has been sent successfully.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-center py-2"
            >
              <div className="mb-2">{errorMessage}</div>
              <div className="text-sm text-white/70">
                Or contact us directly at <a href="mailto:hi@zentha.in" className="text-white/90 hover:text-white/100 transition-colors underline">hi@zentha.in</a>
              </div>
            </motion.div>
          )}
        </motion.form>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center text-white/60"
        >
          <p className={`text-sm ${josefinSans.className}`}>
            We typically respond within 24 hours
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection; 