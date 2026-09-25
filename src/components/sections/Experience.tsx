"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    year: "June 2026 — Present",
    title: "Software Developer",
    company: "JAC Medialand",
    description: "Developing production-ready applications, leading technical architecture, and building scalable full-stack solutions."
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-accent" />
              <span className="font-mono text-xs tracking-widest text-secondary uppercase">
                Career History
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-none"
            >
              Professional <br />
              <span className="text-secondary italic font-light">Experience</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 font-light max-w-sm text-sm md:text-base leading-relaxed"
          >
            A chronological journey of my professional growth, technical leadership, and project execution.
          </motion.p>
        </div>

        {/* Editorial Horizontal List Template */}
        <div className="flex flex-col border-t border-black/10">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row md:items-start justify-between py-12 md:py-16 border-b border-black/10 hover:bg-black/[0.02] transition-colors duration-500 -mx-6 px-6 md:-mx-12 md:px-12"
            >
              {/* Year Column */}
              <div className="md:w-1/4 mb-6 md:mb-0 flex items-start mt-2">
                <span className="font-mono text-sm tracking-widest text-secondary uppercase group-hover:text-accent transition-colors duration-300">
                  {exp.year}
                </span>
              </div>
              
              {/* Role & Company Column */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-tight text-foreground mb-3">
                  {exp.title}
                </h3>
                <span className="font-mono text-xs tracking-widest text-secondary uppercase border border-black/10 px-3 py-1 rounded-full">
                  {exp.company}
                </span>
              </div>

              {/* Description Column */}
              <div className="md:w-5/12 flex flex-col items-start gap-4">
                <p className="text-zinc-600 font-light leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2 cursor-pointer">
                  View Details <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
