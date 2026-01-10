/**
 * App.jsx — v portfolio entry point.
 * Imports all redesigned components from the components folder.
 * Referenced in main.jsx as the root component.
 */

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

import './components/components.css'

import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work2 from './components/Work2'
import Journey from './components/Journey'
import Interests from './components/Interests'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) return;

    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  
  return (
    <MotionConfig reducedMotion="user">
      <div className="site-shell">

        {/* Custom chartreuse dot cursor (pointer-fine devices only) */}
        <CustomCursor />

        {/* Sticky navigation bar */}
        <Navbar />

        <main>
          {/* 01 — Full-viewport hero */}
          <Hero />

          {/* 02 — About */}
          <About />

          {/* 03 — Skills & stack */}
          <Skills />

          {/* 04 — Selected work / Projects */}
          <Work2 />

          {/* 05 — Experience & Education */}
          <Journey />

          {/* 06 — Interests */}
          <Interests />

          {/* 07 — Certificates */}
          <Certificates />

          {/* 08 — Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </MotionConfig>
  )
}

export default App;