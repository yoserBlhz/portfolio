'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  date: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-cyber-green"></div>
      
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative pl-12 pb-8"
        >
          {/* Dot */}
          <div className="absolute left-3 top-1 w-3 h-3 rounded-full bg-cyber-green"></div>
          
          <div className="cyber-border p-4">
            <h3 className="text-xl font-cyber mb-2">{item.title}</h3>
            <p className="text-cyber-green mb-2">{item.subtitle}</p>
            <p className="text-sm text-gray-400 mb-2">{item.date}</p>
            <p>{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 