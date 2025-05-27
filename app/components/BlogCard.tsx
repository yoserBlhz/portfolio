'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  mediumLink: string;
}

export default function BlogCard({ title, excerpt, date, mediumLink }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="cyber-border p-6 cursor-pointer hover:bg-cyber-dark transition-colors"
      onClick={() => window.open(mediumLink, '_blank')}
    >
      <h3 className="text-xl font-cyber mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{date}</p>
      <p className="mb-4">{excerpt}</p>
      <div className="text-cyber-green hover:text-cyber-blue transition-colors">
        Read on Medium →
      </div>
    </motion.div>
  );
} 