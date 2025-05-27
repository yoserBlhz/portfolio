'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Timeline from './Timeline';

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  date: string;
}

interface EducationExperienceProps {
  educationItems: TimelineItem[];
  experienceItems: TimelineItem[];
}

export default function EducationExperience({ educationItems, experienceItems }: EducationExperienceProps) {
  const [activeTab, setActiveTab] = useState<'education' | 'experience'>('education');

  return (
    <div className="flex gap-8">
      {/* Left side - Toggle buttons */}
      <div className="w-1/4">
        <div className="sticky top-24 space-y-4">
          <button
            onClick={() => setActiveTab('education')}
            className={`w-full cyber-border p-4 flex items-center space-x-3 transition-colors ${
              activeTab === 'education'
                ? 'bg-cyber-green text-cyber-black'
                : 'hover:bg-cyber-dark'
            }`}
          >
            <FaGraduationCap className="text-xl" />
            <span>Education</span>
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`w-full cyber-border p-4 flex items-center space-x-3 transition-colors ${
              activeTab === 'experience'
                ? 'bg-cyber-green text-cyber-black'
                : 'hover:bg-cyber-dark'
            }`}
          >
            <FaBriefcase className="text-xl" />
            <span>Experience</span>
          </button>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="w-3/4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl font-cyber mb-6 cyber-text flex items-center">
            {activeTab === 'education' ? (
              <>
                <FaGraduationCap className="mr-2" /> Education
              </>
            ) : (
              <>
                <FaBriefcase className="mr-2" /> Experience
              </>
            )}
          </h2>
          <Timeline items={activeTab === 'education' ? educationItems : experienceItems} />
        </motion.div>
      </div>
    </div>
  );
} 