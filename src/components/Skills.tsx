'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center gradient-text"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="modern-card hover-card"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">Technologies</h3>
            <ul className="space-y-3">
              {['Python', 'R', 'SQL', 'Tableau', 'Power BI'].map((tech, index) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{tech}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="modern-card hover-card"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">Projects</h3>
            <ul className="space-y-3">
              {[
                'Customer Segmentation Analysis',
                'Predictive Modeling',
                'Time Series Forecasting',
                'Data Visualization Dashboards'
              ].map((project, index) => (
                <motion.li
                  key={project}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{project}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="modern-card hover-card"
          >
            <h3 className="text-xl font-semibold mb-4 gradient-text">Certifications</h3>
            <ul className="space-y-3">
              {[
                'Data Science Professional Certificate',
                'Machine Learning Specialization',
                'Advanced Analytics Certification',
                'Big Data Analytics'
              ].map((cert, index) => (
                <motion.li
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span>{cert}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 