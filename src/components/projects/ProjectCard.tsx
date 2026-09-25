"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectCardProps {
  project: {
    title: string;
    slug: string;
    description: string;
    category: string;
    technologies: string[];
    thumbnail: string;
    year: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const animation = gsap.fromTo(
      imageRef.current,
      { y: "-15%" },
      {
        y: "15%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      className="group relative flex flex-col gap-6"
    >
      <Link 
        href={`/projects/${project.slug}`} 
        ref={containerRef}
        className="block relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-sm bg-zinc-100"
      >
        {/* Project Thumbnail */}
        <div className="absolute inset-0 z-10 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Parallax Image Container (Scaled up to allow panning without showing edges) */}
        <div 
          ref={imageRef}
          className="w-full h-[130%] -top-[15%] relative transform group-hover:scale-105 transition-transform duration-700 ease-[0.76,0,0.24,1]"
        >
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-200/50 border border-black/5 text-black/20 font-mono text-sm">
              [ MEDIA PLACEHOLDER ]
            </div>
          )}
        </div>
        
        {/* Overlay hover UI */}
        <div className="absolute top-6 right-6 z-20 w-16 h-16 bg-background text-foreground rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-lg">
          <ArrowUpRight size={24} />
        </div>
      </Link>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border-b border-black/10 pb-4">
          <h3 className="text-3xl md:text-4xl font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <span className="font-mono text-sm text-secondary hidden sm:block">
            {project.year}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-widest text-secondary uppercase">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider px-3 py-1.5 border border-black/10 rounded-full text-zinc-600 bg-black/[0.02]">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] uppercase tracking-wider px-3 py-1.5 text-zinc-400">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
