"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard";

const allProjects = [
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

export default function ProjectsArchive() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col mb-20">
          <Link 
            href="/#work"
            className="flex items-center gap-2 text-sm font-mono tracking-widest uppercase text-secondary hover:text-accent transition-colors mb-12 w-fit"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 bg-accent" />
            <span className="font-mono text-xs tracking-widest text-secondary uppercase">
              Project Archive
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]"
          >
            All <br />
            <span className="text-secondary italic font-light">Projects</span>
          </motion.h1>
        </div>

        {/* Grid Archive */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16"
        >
          {allProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </motion.div>

      </div>
    </div>
  );
}
