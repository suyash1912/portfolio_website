'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 animated-gradient opacity-20"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-bold mb-6 gradient-text">Suyash Mukherjee</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-300 mb-4">Turning Data into Digital Gold</p>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-8">Computer Science & Data Analytics @ IIT Patna</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore My Journey
        </motion.button>
      </motion.div>
    </section>
  );
} 