'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </PageTransition>
  );
} 