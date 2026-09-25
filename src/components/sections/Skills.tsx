"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, BrainCircuit, Cloud, Cpu, TestTube } from "lucide-react";

const skillsData = [
  {
    category: "FRONTEND",
    icon: Layout,
    technologies: [
      { name: "React", slug: "react", color: "0ea5e9" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
      { name: "Framer Motion", slug: "framer", color: "0055FF" },
    ]
  },
  {
    category: "BACKEND",
    icon: Server,
    technologies: [
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Express", slug: "express", color: "000000" },
      { name: "REST APIs", slug: "json", color: "000000" },
      { name: "PHP", slug: "php", color: "777BB4" },
    ]
  },
  {
    category: "DATABASE",
    icon: Database,
    technologies: [
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "Prisma", slug: "prisma", color: "2D3748" },
    ]
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    technologies: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
      { name: "Scikit-learn", slug: "scikitlearn", color: "F7931E" },
      { name: "OpenAI", slug: "openai", color: "412991" },
    ]
  },
  {
    category: "CLOUD / DEVOPS",
    icon: Cloud,
    technologies: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "181717" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Vercel", slug: "vercel", color: "000000" },
      { name: "AWS", slug: "amazonaws", color: "232F3E" },
    ]
  },
  {
    category: "IOT",
    icon: Cpu,
    technologies: [
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "Arduino", slug: "arduino", color: "00979D" },
      { name: "Espressif", slug: "espressif", color: "E7352C" },
    ]
  },
  {
    category: "QA / TESTING",
    icon: TestTube,
    technologies: [
      { name: "Jest", slug: "jest", color: "C21325" },
      { name: "Cypress", slug: "cypress", color: "17202C" },
      { name: "Playwright", slug: "playwright", color: "2EAD33" },
      { name: "Selenium", slug: "selenium", color: "43B02A" },
    ]
  }
];

export default function Skills() {
  return (
    <section className="pt-10 pb-20 md:pt-12 md:pb-28 bg-background relative overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[1px] w-8 bg-accent" />
              <span className="font-mono text-xs tracking-widest text-secondary uppercase">
                Capabilities
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-medium tracking-tight uppercase leading-none"
            >
              Technical <br />
              <span className="text-zinc-400 italic font-light">Arsenal</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 font-light max-w-sm"
          >
            A comprehensive overview of the tools, languages, and frameworks I use to build scalable, high-performance digital products.
          </motion.p>
        </div>

        {/* Editorial Rows Layout */}
        <div className="flex flex-col border-t border-black/10">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col lg:flex-row lg:items-center py-10 border-b border-black/10 hover:bg-black/[0.01] transition-colors duration-500"
              >
                {/* Category Header */}
                <div className="lg:w-1/3 mb-8 lg:mb-0 flex items-center gap-6">
                  <span className="font-mono text-xs text-zinc-400 font-medium">0{index + 1}</span>
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-zinc-500 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                    <Icon size={18} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase group-hover:text-accent transition-colors duration-500">
                    {skillGroup.category}
                  </h3>
                </div>
                
                {/* Technologies */}
                <div className="lg:w-2/3 flex flex-wrap gap-3">
                  {skillGroup.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 px-5 py-2.5 bg-white border border-black/5 rounded-full hover:border-black/20 hover:shadow-sm transition-all duration-300"
                    >
                      <div className="w-4 h-4 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                        <img 
                          src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} 
                          alt={tech.name} 
                          className="max-w-full max-h-full" 
                        />
                      </div>
                      <span className="text-sm font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
