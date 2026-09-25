"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-32 pb-6 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-between h-full">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-24 md:mb-32">
          
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase leading-[0.9]">
              Let&apos;s create <br/>
              <span className="italic font-light text-[#8B8580]">something extraordinary.</span>
            </h2>
            <Link 
              href="mailto:aravindhan8124@gmail.com" 
              className="flex items-center gap-3 text-lg md:text-xl font-mono tracking-widest uppercase hover:text-accent transition-colors w-fit group mt-4"
            >
              aravindhan8124@gmail.com 
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="flex gap-16 md:gap-24 font-mono text-sm tracking-widest uppercase">
            <div className="flex flex-col gap-4">
              <span className="text-[#8B8580] mb-2 text-xs">Socials</span>
              <a href="https://github.com/Aravindhan67" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/aravindhan-t-897554376" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/aravindhan_67/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[#8B8580] mb-2 text-xs">Menu</span>
              <Link href="#work" className="hover:text-accent transition-colors">Work</Link>
              <Link href="#experience" className="hover:text-accent transition-colors">Experience</Link>
              <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Section - Massive Text */}
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 font-mono text-[10px] sm:text-xs tracking-widest uppercase text-[#8B8580] border-b border-white/10 pb-4 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for new opportunities</span>
            </div>
            <span>© {currentYear} ALL RIGHTS RESERVED</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
