"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "SYSTEM INITIALIZING",
  "LOADING ASSETS",
  "PREPARING INTERFACE",
  "DESIGNING",
  "ENGINEERING",
  "INNOVATING",
  "T. ARAVINDHAN"
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Quick flash of words
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(interval);
          // Hold the final word, then reveal
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 180); // 180ms per word flash

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed inset-0 z-[100] flex pointer-events-none">
          {/* Vertical Shutter Reveal - 5 Slices */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ height: "100vh" }}
              exit={{ height: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.76, 0, 0.24, 1], 
                delay: i * 0.05 // Staggered delay for each slice
              }}
              className="w-1/5 bg-[#2A2826] border-r border-white/5 last:border-none origin-top"
            />
          ))}

          {/* Centered Flash Typography */}
          <div className="absolute inset-0 flex items-center justify-center mix-blend-difference">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter text-[#F8F6F0]">
              {words[index]}
            </h1>
          </div>
          
          {/* Loading Indicator at Bottom */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 items-center mix-blend-difference">
             <span className="w-2 h-2 rounded-full bg-[#E05D36] animate-pulse" />
             <span className="font-mono text-xs tracking-widest text-[#F8F6F0] uppercase">
               {Math.round(((index + 1) / words.length) * 100)}%
             </span>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
