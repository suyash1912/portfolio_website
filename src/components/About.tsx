'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-2xl"
        >
          <p className="text-lg leading-relaxed mb-6">
            I am Suyash Mukherjee, a passionate student pursuing Computer Science and Data Analytics (CSDA) at IIT Patna. 
            My journey in technology is driven by a deep fascination for transforming complex data into meaningful insights 
            that drive innovation and decision-making.
          </p>
          <p className="text-lg leading-relaxed">
            At IIT Patna, I combine the theoretical foundations of computer science with the practical applications 
            of data analytics, preparing myself to tackle real-world challenges in the data-driven era. My goal is to 
            leverage technology and data to create solutions that make a meaningful impact in the world.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 