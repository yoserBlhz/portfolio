'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaVideo } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  videoLink?: string; // Optional video link
  type: string;
}

export default function ProjectCard({ title, description, image, githubLink, videoLink, type }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="cyber-border overflow-hidden"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-cyber-black/80 px-2 py-1 text-sm cyber-border">
          {type}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-cyber mb-2 cyber-text">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex space-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-cyber-green hover:text-cyber-blue transition-colors"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          {videoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-cyber-green hover:text-cyber-blue transition-colors"
            >
              <FaVideo />
              <span>Watch Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 