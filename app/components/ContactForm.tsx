'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_fzwzumt',
        'template_4wt7gpe',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'benlehzilyosr@gmail.com',
        },
        'NsxsofiOJTDUGSZQz'
      );

      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left side - Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/3"
      >
        <div className="cyber-border p-6 lg:p-8 h-full">
          <h3 className="text-2xl font-cyber mb-6 cyber-text">Contact Information</h3>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-cyber-green text-xl flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Email</p>
                <a 
                  href="mailto:benlehzilyosr@gmail.com" 
                  className="text-cyber-green hover:text-cyber-blue transition-colors break-all"
                >
                  benlehzilyosr@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaPhone className="text-cyber-green text-xl flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Phone</p>
                <a 
                  href="tel:+216 29 123 456" 
                  className="text-cyber-green hover:text-cyber-blue transition-colors"
                >
                  +216 29 123 456
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-cyber-green text-xl flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-cyber-green">Tunisia</p>
              </div>
            </div>

            <div className="pt-6 border-t border-cyber-green/20">
              <p className="text-sm text-gray-400 mb-4">Connect with me</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yoserBlhz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-cyber-green hover:text-cyber-blue transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/yosr-benlehzil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-cyber-green hover:text-cyber-blue transition-colors"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side - Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-2/3"
      >
        <form
          onSubmit={handleSubmit}
          className="cyber-border p-6 lg:p-8 relative"
        >
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-4 right-4 bg-cyber-green text-cyber-black px-4 py-2 rounded cyber-border"
              >
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>

          <h3 className="text-2xl font-cyber mb-6 cyber-text">Send me a message</h3>
          <div className="mb-6">
            <label htmlFor="name" className="block text-cyber-green mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-cyber-black border border-cyber-green p-2 focus:outline-none focus:border-cyber-blue"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-cyber-green mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-cyber-black border border-cyber-green p-2 focus:outline-none focus:border-cyber-blue"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-cyber-green mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full bg-cyber-black border border-cyber-green p-2 focus:outline-none focus:border-cyber-blue"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full cyber-border px-6 py-3 transition-colors ${
              isSubmitting 
                ? 'bg-cyber-dark cursor-not-allowed' 
                : 'hover:bg-cyber-green hover:text-cyber-black'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  );
} 