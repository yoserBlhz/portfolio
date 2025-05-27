'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGraduationCap, FaBriefcase, FaCode, FaBlog, FaGithub, FaLinkedin, FaCertificate, FaHandshake } from 'react-icons/fa';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import ContactForm from './components/ContactForm';
import EducationExperience from './components/EducationExperience';
import CertificationCard from './components/CertificationCard';

// Replace these with your actual data
const educationItems = [
  {
    title: "Software Engineering Student",
    subtitle: "Faculty of Science, Bizerta",
    description: "Focus: DataScience and Software Engineering",
    date: "2024-Present"
  },
  {
    title: "Bachelor Degree ",
    subtitle: "Mahmoud Messadi, Nabeul",
    description: "Section: Science",
    date: "2020-2021"
  }
];

const experienceItems = [
  {
    title: "Red Team Engineer Intern",
    subtitle: "EncryptEdge Labs, London - Remote",
    description: "I participated in real-world security assessments by simulating advanced cyberattacks to uncover vulnerabilities and strengthen system defenses(Linux, Windows, Active Directory). I conducted phishing simulations, client-side attacks with BeEF, and exploited web and network weaknesses using tools like Metasploit, Nmap, Burp Suite, and Wireshark. I also developed custom scripts to automate payload delivery and lateral movement. My work adhered to MITRE ATT&CK and OWASP Top 10 standards, and I documented findings with mitigation recommendations. I was recognized as the top-performing intern of the batch for my technical contributions and initiative.",
    date: "March 2025 - May 2025"
  },
  {
    title: "Sofware Development Intern",
    subtitle: "SRA Intégration, Tunisia",
    description: "I contributed to the development of a complete digital solution for a delivery service. This included building a showcase website for client engagement and inquiries, developing an admin dashboard for managing deliveries, invoices, and performance analytics, and creating a mobile application to help delivery personnel track parcels and update statuses with automated SMS notifications. This hands-on experience strengthened my skills in web and mobile development, dashboard systems, and exposed me to real-world project management and user-centered design.",
    date: "July 2024 - August 2024"
  }
];

const projects = [
  {
    title: "Islamic App ",
    description: "I developed a comprehensive Islamic mobile application using Flutter for the frontend and NestJS for the backend. This app is designed to enhance the spiritual journey of users by providing essential Islamic tools and resources, including: ✅ Prayer Times ✅ Customized Tasbih Counter ✅ Islamic Video Feed ✅ Dua Collection This project showcases my expertise in mobile development, backend API integration, and user-centric design to create an intuitive and feature-rich Islamic application.",
    image: "/images/islamicApp.png",
    githubLink: "https://github.com/yoserBlhz/islamic_app",
    type: "Mobile Development"
  },
  {
    title: "Client Site For A Delivery Service",
    description: "This platform allows clients to explore the delivery services, learn more about them, and submit complaints or inquiries seamlessly.",
    image: "/images/clientSite.png",
    githubLink: "https://github.com/yoserBlhz/clientWebsite",
    videoLink: "https://youtu.be/r3MGOszfYek",
    type: "Web Development"
  },
  {
    title: "Admin Dashboard For A Delivery Service",
    description: "A comprehensive tool for tracking deliveries, managing invoices, and handling delivery personnel, complete with detailed statistics.",
    image: "/images/Dashboard.png",
    githubLink: "https://github.com/yoserBlhz/adminDeliveryDashboard",
    videoLink: "https://www.youtube.com/watch?v=3lR5b6Q7He8",
    type: "Web Development"
  },
  {
    title: " Mobile Application for delivery personnel ",
    description: " This app empowers delivery agents to manage their deliveries, update the status of parcels, and includes an automated SMS feature that alerts clients when the delivery is en route.",
    image: "/images/mobile.png",
    githubLink: "https://github.com/yoserBlhz/delivery-frontend",
    type: "Mobile Development"
  },
  {
    title: "Smart House Monitoring",
    description: "An innovative Smart House Monitoring Web Application using Angular, Node.js, Express, and MongoDB. The application offers: ✅ Room Management: seamlessly add, edit, and monitor rooms. ✅ User Management: Admins can add users who can then log in using their name and unique house code. ✅ Interactive Dashboard: Real-time monitoring of smart home activities for enhanced convenience and control.",
    image: "/images/smartHouse.png",
    githubLink: "https://github.com/yoserBlhz/SmartHouseProject",
    videoLink: "https://www.youtube.com/watch?v=62PnCx1JtUE",
    type: "Web Development"
  },
];

const blogPosts = [
  {
    title: "Introduction to Red Teaming",
    excerpt: " objectives and methodologies employed by the red team. How they operate in real-world scenarios and how they help in improving the organization's defensive capabilities. The difference between the red team and traditional pentesting.",
    date: "May 18, 2025",
    mediumLink: "https://medium.com/@benlehzilyosr/introduction-to-red-teaming-78b78e95b361"
  },
  {
    title: "OSINT in Cybersecurity",
    excerpt: "OSINT concept. its methods and resources. How to apply OSINT in real-world scenarios. Some hands-on lab work with Shodan, recon-ng, and Maltego.",
    date: "May 21, 2025",
    mediumLink: "https://medium.com/@benlehzilyosr/osint-in-cybersecurity-from-data-to-intelligence-d5bab6f18a39"
  }
];

const projectTypes = ["All", "Mobile Development", "Web Development"];

// Add these new data arrays after the existing ones
const certifications = [
  {
    title: "Certified in Cybersecurity (CC)",
    description: " It proves to organizations that newly certified team members understand fundamental security principles and operations, network security and access controls and that they have the skills to meet and exceed performance standards in their beginning roles. All this allows organizations to build a stronger line of defense.",
    image: "/ISC-cc.pdf",
    credentialLink: "https://www.credly.com/badges/163a733b-842c-485c-919b-7577a7b1afc7",
    issuer: "ISC2",
    date: "December 2024"
  },
  {
    title: "Network Defense",
    description: "A Broad understanding of techniques to monitor and protect the network, including access control, firewalls, cloud security, and cryptography. They are also familiar with how to evaluate and respond to security alerts.",
    image: "/images/cisco.png",
    credentialLink: "https://www.credly.com/earner/earned/badge/d5c3d7e1-252d-4bce-b56a-eb53e496e6ce",
    issuer: "CISCO",
    date: "December 2024"
  },
  {
    title: "Google Cybersecurity Professional Certificate ",
    description: "Eight courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare them for entry-level roles in cybersecurity. They are competent in beginner-level Python, Linux, SQL, Security Information and Event Management (SIEM) tools, and Intrusion Detection Systems (IDS). They know how to identify common cybersecurity risks, threats, and vulnerabilities, as well as the techniques to mitigate.",
    image: "/googleCertif.pdf",
    credentialLink: "https://www.credly.com/earner/earned/badge/16f9714e-d1de-4c99-9f4b-d39fce49ed5b",
    issuer: "Coursera",
    date: "January 2025"
  },

  {
    title: "NIST Cybersecurity and Risk Management Frameworks",
    description: "Master NIST cybersecurity frameworks and risk management for security pros and auditors.",
    image: "/NIST.pdf",
    credentialLink: "https://coursera.org/share/4bbab087223525aaf008dfa422bd1827",
    issuer: "Coursera",
    date: "February 2025"
  },
  {
    title: "Fundamentals of Computer Network Security",
    description: "Design and Analyze Secure Networked Systems, Basic Cryptography and Programming with Crypto API, Hacking and Patching, Secure Networked System with Firewall and IDS",
    image: "/NetworkSecurity.pdf",
    credentialLink: "https://coursera.org/share/1d504d1f214660df369dae916df334b8",
    issuer: "Coursera",
    date: "January 2025"
  }
];

const volunteeringExperiences = [
    {
        title: "Red Crescent Member",
        organization: "Red Crescent",
        description: "As a volunteer with the Red Crescent, I contributed to various humanitarian initiatives aimed at supporting vulnerable communities. My responsibilities included organizing and participating in outreach programs, assisting in emergency response efforts, and promoting health awareness campaigns. This experience strengthened my teamwork, leadership, and crisis management skills, while deepening my commitment to social responsibility and community service.",
        date: "August 2018"
      
    },
    {
        title: "Founder - Robotics Club",
        organization: "Underwater Robotics",
        description: "As one of the founding members of the Robotics Club, I played a key role in establishing a collaborative environment where children could explore robotics, automation, and embedded systems. I contributed to organizing workshops, leading project development, and mentoring new members. This initiative fostered innovation, hands-on learning, and teamwork among peers with a shared passion for technology.",
        date: "August 2018"
    },
    {
        title: "Member of the Student Entrepreneurial Pole (PEEC) of Carthage",
        organization: "PEEC",
        description: "As a member of the Student Entrepreneurial Pole of Carthage (PEEC), I actively contributed to fostering an entrepreneurial spirit among students of the University of Carthage. This initiative aims to encourage innovative projects and support student-driven startups in synergy with existing actions and structures.",
        date: "October 2021 - October 2022"
      },
  {
    title: "Media Manager",
    organization: "Google Developer Student Club FSB",
    description: "As a Media Manager for the Google I/O Extended event organized by the Google Developer Student Club (GDSC) at FSB, I was responsible for managing and promoting the event's media content. Google I/O Extended is a community-hosted event series inspired by Google's flagship I/O conference. It features the latest announcements and updates in technology, allowing developers and tech enthusiasts to participate in live sessions, technical talks, and networking opportunities. My role involved creating engaging media content, coordinating announcements, and ensuring the event reached a wide audience.",
    date: "August 2023"
  }
 
 
];

export default function Home() {
  const [selectedType, setSelectedType] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProjects = selectedType === "All" 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-cyber-black/80 backdrop-blur-sm z-50 cyber-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-cyber cyber-text">BENLEHZIL YOSR</h1>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-cyber-green hover:text-cyber-blue transition-colors"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6">
              <a href="#about" className="hover:text-cyber-green transition-colors">About</a>
              <a href="#education-experience" className="hover:text-cyber-green transition-colors">Education</a>
              <a href="#education-experience" className="hover:text-cyber-green transition-colors">Experience</a>
              <a href="#certifications" className="hover:text-cyber-green transition-colors">Certifications</a>
              <a href="#volunteering" className="hover:text-cyber-green transition-colors">Volunteering</a>
              <a href="#projects" className="hover:text-cyber-green transition-colors">Projects</a>
              <a href="#blog" className="hover:text-cyber-green transition-colors">Blog</a>
              <a href="#contact" className="hover:text-cyber-green transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isMenuOpen ? 'auto' : 0 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              <a href="#about" className="block hover:text-cyber-green transition-colors">About</a>
              <a href="#education-experience" className="block hover:text-cyber-green transition-colors">Education</a>
              <a href="#education-experience" className="block hover:text-cyber-green transition-colors">Experience</a>
              <a href="#certifications" className="block hover:text-cyber-green transition-colors">Certifications</a>
              <a href="#volunteering" className="block hover:text-cyber-green transition-colors">Volunteering</a>
              <a href="#projects" className="block hover:text-cyber-green transition-colors">Projects</a>
              <a href="#blog" className="block hover:text-cyber-green transition-colors">Blog</a>
              <a href="#contact" className="block hover:text-cyber-green transition-colors">Contact</a>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          <h1 className="text-6xl font-cyber mb-4 cyber-text">BENLEHZIL YOSR</h1>
          <p className="text-xl mb-8">Software Developer | Security Enthusiast</p>
          <div className="flex justify-center space-x-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-border px-6 py-2 hover:bg-cyber-green hover:text-cyber-black transition-colors"
            >
              Preview Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="cyber-border px-6 py-2 hover:bg-cyber-green hover:text-cyber-black transition-colors"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="flex items-center gap-12">
          <div className="w-1/3">
            <img
              src="/images/me.png"
              alt="Benlehzil Yosr"
              className="w-full h-auto rounded-lg cyber-border"
            />
          </div>
          <div className="w-2/3">
            <h2 className="text-3xl font-cyber mb-6 cyber-text flex items-center">
              <FaShieldAlt className="mr-2" /> About Me
            </h2>
            <p className="mb-6">
              I am a passionate software developer with a strong interest in cybersecurity, particularly in cloud computing 
              and red teaming. I enjoy exploring the offensive side of security to better understand system vulnerabilities 
              and how to defend against them. My curiosity drives me to continuously learn and experiment with new tools, 
              techniques, and technologies that enhance system security and resilience.
            </p>
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
      </section>

      {/* Education & Experience Section */}
      <section id="education-experience" className="py-20">
        <EducationExperience 
          educationItems={educationItems}
          experienceItems={experienceItems}
        />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-cyber mb-6 cyber-text flex items-center">
          <FaCode className="mr-2" /> Projects
        </h2>
        <div className="mb-8 flex space-x-4">
          {projectTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 cyber-border ${
                selectedType === type
                  ? 'bg-cyber-green text-cyber-black'
                  : 'hover:bg-cyber-dark'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <h2 className="text-3xl font-cyber mb-6 cyber-text flex items-center">
          <FaCertificate className="mr-2" /> Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-20">
        <h2 className="text-3xl font-cyber mb-6 cyber-text flex items-center">
          <FaHandshake className="mr-2" /> Volunteering Experience
        </h2>
        <div className="space-y-6">
          {volunteeringExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="cyber-border p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-cyber cyber-text">{exp.title}</h3>
                  <p className="text-cyber-green">{exp.organization}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.date}</p>
              </div>
              <p className="text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20">
        <h2 className="text-3xl font-cyber mb-6 cyber-text flex items-center">
          <FaBlog className="mr-2" /> Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-cyber mb-6 cyber-text text-center">Contact Me</h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="py-8 text-center cyber-border">
        <p>© 2025 BENLEHZIL_YOSR. All rights reserved.</p>
      </footer>
    </div>
  );
} 