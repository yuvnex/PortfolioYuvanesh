"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  // Fade out the quote after scrolling 100px
  const quoteOpacity = useTransform(scrollY, [0, 100], [0.9, 0]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-6 pointer-events-auto mix-blend-difference">
      <motion.div 
        style={{ opacity: quoteOpacity }}
        className="text-white font-mono text-xs md:text-sm tracking-widest italic"
      >
        &quot;Every expert was once a beginner&quot;
      </motion.div>
      <div className="flex gap-8 text-sm md:text-base font-medium text-white">
        <a href="#works" className="hover:text-white/80 transition-colors">Works</a>
        <a href="#education" className="hover:text-white/80 transition-colors">Education</a>
        <a href="#contact" className="hover:text-white/80 transition-colors">Contact</a>
      </div>
    </nav>
  );
}
