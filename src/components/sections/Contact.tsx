"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-background relative border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <span className="h-[1px] w-8 bg-accent" />
          <span className="font-mono text-xs tracking-widest text-secondary uppercase">
            Start A Conversation
          </span>
          <span className="h-[1px] w-8 bg-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-full relative z-10"
        >
          <a 
            href="mailto:aravindhan8124@gmail.com"
            className="group relative inline-block text-[4.5vw] sm:text-[4vw] md:text-[5vw] lg:text-[5.5vw] font-bold tracking-tighter uppercase leading-none text-foreground transition-colors duration-500"
          >
            aravindhan8124@gmail.com
            
            {/* Animated Underline */}
            <span className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[4px] md:h-[8px] bg-accent transform scale-x-0 origin-left transition-transform duration-700 ease-[0.76,0,0.24,1] group-hover:scale-x-100" />
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-zinc-600 font-light mt-16 max-w-lg mx-auto md:text-xl leading-relaxed"
        >
          I am always looking for new challenges. Whether you have a project idea, a role, or just want to chat—feel free to drop a line.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 font-mono text-xs md:text-sm tracking-widest uppercase text-secondary"
        >
          <a href="https://github.com/Aravindhan67" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors group">
            <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">↗</span> GITHUB
          </a>
          <a href="https://www.linkedin.com/in/aravindhan-t-897554376" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors group">
            <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">↗</span> LINKEDIN
          </a>
          <a href="https://www.instagram.com/aravindhan_67/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors group">
            <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">↗</span> INSTAGRAM
          </a>
        </motion.div>

      </div>
      
      {/* Background massive ambient text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0 overflow-hidden">
         <h1 className="text-[25vw] font-bold tracking-tighter leading-none whitespace-nowrap">
           CONNECT
         </h1>
      </div>
    </section>
  );
}
