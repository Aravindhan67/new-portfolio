"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, User, Briefcase, Mail, FolderGit2 } from "lucide-react";
import { usePathname } from "next/navigation";

const desktopNavLinks = [
  { name: "HOME", href: "/#home" },
  { name: "ABOUT", href: "/#about" },
  { name: "WORK", href: "/#work" },
  { name: "EXPERIENCE", href: "/#experience" },
  { name: "CONTACT", href: "/#contact" },
];

const mobileNavLinks = [
  { name: "Home", href: "/#home", icon: Home },
  { name: "About", href: "/#about", icon: User },
  { name: "Work", href: "/#work", icon: FolderGit2 },
  { name: "Exp", href: "/#experience", icon: Briefcase },
  { name: "Contact", href: "/#contact", icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Simple scroll spy to highlight active bottom nav item
      const sections = mobileNavLinks.map(link => link.href.substring(1));
      let current = "";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = "#" + section;
        }
      }
      
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }} // Delay until preloader finishes
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-4 glass-panel" : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-xl font-medium tracking-widest z-50 text-foreground">
            ARAVINDHAN
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {desktopNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-mono tracking-widest text-secondary hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-2 px-3 py-1.5 border border-border rounded-full bg-background/50">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-secondary">Available for work</span>
            </div>
          </div>
          
          {/* Mobile "Available for work" badge (only shows when not scrolled to avoid clutter) */}
          <div className={`md:hidden flex items-center gap-2 px-3 py-1.5 border border-border rounded-full bg-background/50 transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-wider text-secondary">Available</span>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navigation Bar */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-black/5 pb-4 pt-2 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]"
      >
        <div className="flex items-end justify-between max-w-md mx-auto">
          {mobileNavLinks.map((link, idx) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href;
            const isCenter = idx === 2; // Make the 3rd item prominent (Work)
            
            if (isCenter) {
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className="relative flex flex-col items-center justify-end -translate-y-2"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md transition-colors mb-1 ${
                    isActive ? "bg-[#2d2b45] text-accent" : "bg-[#2d2b45] text-[#9b99b9]"
                  }`}>
                    <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
                  </div>
                  <span className={`text-[11px] tracking-wide ${isActive ? 'text-zinc-900 font-bold' : 'text-zinc-500 font-medium'}`}>
                    {link.name}
                  </span>
                </Link>
              );
            }

            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                className={`relative flex flex-col items-center justify-end w-16 h-12 transition-all duration-300 ${
                  isActive ? "text-accent" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} className="mb-1" />
                <span className={`text-[11px] tracking-wide ${isActive ? 'font-bold' : 'font-medium'}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
