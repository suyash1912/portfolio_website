'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold font-heading text-gray-900 dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Suyash Mukherjee
        </motion.a>
        
        <div className="flex items-center space-x-8">
          <motion.a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            whileHover={{ y: -2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#skills"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            whileHover={{ y: -2 }}
          >
            Skills
          </motion.a>
          <motion.a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            whileHover={{ y: -2 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="button-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
} 