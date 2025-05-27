'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

interface CertificationCardProps {
  title: string;
  description: string;
  image: string; // This will be the PDF path
  credentialLink: string;
  issuer: string;
  date: string;
}

export default function CertificationCard({ 
  title, 
  description, 
  image, 
  credentialLink,
  issuer,
  date 
}: CertificationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="cyber-border overflow-hidden"
    >
      <div className="relative">
        <object
          data={image}
          type="application/pdf"
          className="w-full h-64"
        >
          <div className="w-full h-64 bg-cyber-black/50 flex items-center justify-center">
            <p className="text-cyber-green">PDF Preview Not Available</p>
          </div>
        </object>
        <div className="absolute top-2 right-2 bg-cyber-black/80 px-2 py-1 text-sm cyber-border">
          {date}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-cyber mb-2 cyber-text">{title}</h3>
        <p className="text-gray-400 mb-2">{issuer}</p>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <a
          href={credentialLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-cyber-green hover:text-cyber-blue transition-colors"
        >
          <FaCertificate />
          <span>View Credential</span>
        </a>
      </div>
    </motion.div>
  );
} 