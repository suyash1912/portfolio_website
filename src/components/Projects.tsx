'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Stroke Prediction Model',
    description: 'A machine learning model to predict the likelihood of stroke based on various health parameters. Built using Python and scikit-learn.',
    link: 'https://www.kaggle.com/code/suyashmukherjee16/stroke-prediction',
    tags: ['Machine Learning', 'Healthcare', 'Python', 'scikit-learn'],
    bgColor: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Dog & Cat Classifier',
    description: 'An image classification model that accurately distinguishes between dogs and cats using deep learning techniques.',
    link: 'https://www.kaggle.com/code/suyashmukherjee16/dog-cat-classifier-suyash',
    tags: ['Deep Learning', 'Computer Vision', 'CNN', 'TensorFlow'],
    bgColor: 'from-green-500/20 to-blue-500/20'
  },
  {
    title: 'PCOS Prediction System',
    description: 'A predictive model for Polycystic Ovary Syndrome (PCOS) using machine learning algorithms and medical data analysis.',
    link: 'https://www.kaggle.com/code/suyashmukherjee16/pcos-pred-suyash',
    tags: ['Healthcare', 'Machine Learning', 'Data Analysis', 'Python'],
    bgColor: 'from-purple-500/20 to-pink-500/20'
  },
  {
    title: 'DataX Platform',
    description: 'A comprehensive data analysis and visualization platform built with modern web technologies.',
    link: 'https://datax-fcwy.onrender.com',
    tags: ['Web Development', 'Data Visualization', 'React', 'Node.js'],
    bgColor: 'from-orange-500/20 to-red-500/20'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-r ${project.bgColor}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl opacity-20">{project.title[0]}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 