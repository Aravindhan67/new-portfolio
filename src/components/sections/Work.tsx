"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/projects/ProjectCard";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Hybrid Intrusion Detection",
    slug: "hybrid-intrusion-detection",
    description: "AI-Powered Hybrid Intrusion Detection System",
    category: "AI / Cybersecurity",
    technologies: ["Python", "XGBoost", "TensorFlow", "Scikit-learn", "Next.js"],
    thumbnail: "",
    year: "2024"
  },
  {
    title: "AI Interior Design Platform",
    slug: "ai-interior-design",
    description: "Platform for generating interior design variations using AI.",
    category: "AI / Web",
    technologies: ["Next.js", "AI", "Computer Vision", "MongoDB"],
    thumbnail: "",
    year: "2024"
  },
  {
    title: "Mallify",
    slug: "mallify",
    description: "Modern E-commerce Full Stack platform.",
    category: "E-commerce / Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    thumbnail: "",
    year: "2023"
  },
  {
    title: "Vehicle Load Monitoring",
    slug: "vehicle-load-monitoring",
    description: "Heavy Vehicle Load Monitoring System with digital twin.",
    category: "IoT / Digital Twin",
    technologies: ["ESP32", "IoT", "ThingSpeak", "Unity", "Blender"],
    thumbnail: "",
    year: "2023"
  },
  {
    title: "Smart Inventory AI",
    slug: "smart-inventory-ai",
    description: "Predictive inventory management system for retail.",
    category: "AI / Full Stack",
    technologies: ["Python", "React", "PostgreSQL", "Docker"],
    thumbnail: "",
    year: "2022"
  },
  {
    title: "Blockchain Voting App",
    slug: "blockchain-voting",
    description: "Decentralized voting platform using Ethereum smart contracts.",
    category: "Web3 / Blockchain",
    technologies: ["Solidity", "Next.js", "Hardhat", "Ethers.js"],
    thumbnail: "",
    year: "2022"
  },
  {
    title: "IoT Home Automation",
    slug: "iot-home-automation",
    description: "Custom smart home hub with local processing.",
    category: "IoT / Embedded",
    technologies: ["C++", "Raspberry Pi", "Node-RED", "MQTT"],
    thumbnail: "",
    year: "2021"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28 bg-background relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32 flex flex-col items-start">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="h-[1px] w-8 bg-accent" />
                <span className="font-mono text-xs tracking-widest text-secondary uppercase">
                  Selected Work
                </span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8"
              >
                Featured <br />
                <span className="text-secondary italic font-light">Projects</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-600 font-light max-w-sm mb-12 leading-relaxed"
              >
                A curated selection of my recent design and engineering work. 
                Focusing on aesthetics, performance, and cutting-edge technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  href="/projects"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium tracking-wide uppercase text-sm hover:scale-105 transition-transform duration-300"
                >
                  View full archive
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Stacked Project Cards */}
          <div className="lg:w-2/3 flex flex-col gap-24 md:gap-32">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
