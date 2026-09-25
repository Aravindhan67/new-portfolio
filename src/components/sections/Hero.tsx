"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = [
    { prefix: "Full Stack", highlight: "Developer" },
    { prefix: "AI Solutions", highlight: "Engineer" },
    { prefix: "Creative", highlight: "Technologist" },
    { prefix: "IoT", highlight: "Specialist" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Subtle parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to(containerRef.current, {
        x,
        y,
        duration: 1.5,
        ease: "power2.out"
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Abstract Background Elements with more attractive colors */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E05D36]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#D9CDB8]/30 rounded-full blur-[150px]" />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.8 }} // After preloader
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-12 bg-accent" />
              <span className="font-mono text-sm tracking-widest text-secondary uppercase">
                Hello, I&apos;m
              </span>
            </motion.div>

            <div className="overflow-hidden mb-2">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 3.0, ease: [0.76, 0, 0.24, 1] }}
                className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[0.9] uppercase"
              >
                Aravindhan
              </motion.h1>
            </div>
            
            <div className="h-[3rem] md:h-[4.5rem] lg:h-[5rem] mb-12 relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={roleIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 text-4xl md:text-6xl lg:text-[5rem] font-medium tracking-tight leading-none text-secondary whitespace-nowrap"
                >
                  {roles[roleIndex].prefix} <span className="text-accent italic font-bold">{roles[roleIndex].highlight}</span>
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.8 }}
              className="text-lg md:text-xl text-zinc-600 max-w-xl mb-12 font-light leading-relaxed"
            >
              I design and build modern digital products across web, AI and connected systems. 
              Transforming complex problems into elegant, scalable solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.2 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 w-full max-w-2xl"
            >
              <Link 
                href="#work"
                className="group relative px-8 py-4 bg-foreground text-background overflow-hidden rounded-full font-medium tracking-wide flex items-center justify-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(224,93,54,0.3)] transition-shadow duration-500 w-full sm:w-auto"
              >
                <span className="relative z-10">VIEW MY WORK</span>
                <ArrowDownRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
                <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </Link>
              
              <Link 
                href="#contact"
                className="group px-8 py-4 border border-black/10 bg-black/[0.02] backdrop-blur-sm text-foreground hover:bg-black/5 hover:border-black/20 transition-all duration-300 rounded-full font-medium tracking-wide flex items-center justify-center shadow-sm hover:shadow-md w-full sm:w-auto"
              >
                LET&apos;S TALK
              </Link>

              <a 
                href="/resume.pdf"
                download
                className="group px-8 py-4 flex items-center justify-center gap-2 font-medium tracking-wide text-accent bg-accent/10 hover:bg-accent hover:text-white rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                RESUME
              </a>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, delay: 3.5, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"
            >
              {/* Decorative Frame */}
              <div className="absolute inset-0 rounded-full border border-black/10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-black/20 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Profile Image Mask */}
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white/50 border border-black/5 shadow-[0_0_100px_rgba(224,93,54,0.1)] group">
                <Image
                  src="/aravind.png"
                  alt="T. Aravindhan"
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E05D36]/10 to-transparent mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
