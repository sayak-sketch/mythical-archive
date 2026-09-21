"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Track scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* The Scroll Progress Bar */}
      <motion.div 
        style={{ scaleX, transformOrigin: "0%" }} 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60]"
      />
      
      <nav className="fixed w-full z-50 top-0 px-8 py-5 backdrop-blur-xl bg-background/80 border-b border-[var(--border-color)] flex justify-between items-center transition-all duration-300 shadow-sm mt-1">
        <Link href="/" className="font-serif text-2xl font-bold tracking-wide text-foreground">
          Archival<span className="text-accent italic">Power</span>
        </Link>
        
        <div className="hidden md:flex gap-10 font-medium text-foreground/80 text-sm uppercase tracking-widest">
          <Link href="#voices" className="hover:text-accent transition-colors duration-300">Voices</Link>
          <Link href="#archive" className="hover:text-accent transition-colors duration-300">The Collection</Link>
          <Link href="#ethics" className="hover:text-accent transition-colors duration-300">Ethics & Access</Link>
        </div>

        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-3 rounded-full hover:bg-foreground/10 text-foreground transition-colors flex items-center justify-center"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </>
  );
}