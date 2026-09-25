"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Core Technologies", value: 20, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
];

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1
  });
  
  const displayValue = useTransform(springValue, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref} className="flex">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const statsContainer = statsRef.current;

    if (!section || !text || !statsContainer) return;

    // Editorial text reveal on scroll
    gsap.fromTo(
      text.querySelectorAll(".reveal-line"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%",
        }
      }
    );

    // Stats reveal
    gsap.fromTo(
      statsContainer.querySelectorAll(".stat-item"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: statsContainer,
          start: "top 85%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="pt-20 pb-10 md:pt-28 md:pb-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Header Column */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-[1px] w-8 bg-accent" />
              <span className="font-mono text-xs tracking-widest text-secondary uppercase">
                About Me
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase leading-[1.1]">
              The Person <br />
              <span className="text-secondary italic font-light">Behind The Code</span>
            </h2>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center" ref={textRef}>
            <div className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-3xl space-y-6">
              <div className="overflow-hidden">
                <p className="reveal-line">
                  I am a Full-Stack Developer with a deep focus on building scalable web applications and integrating cutting-edge AI technologies. 
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="reveal-line">
                  My journey involves continuous experimentation—from developing intelligent interior design platforms using computer vision to architecting robust E-commerce systems. 
                </p>
              </div>
              <div className="overflow-hidden">
                <p className="reveal-line">
                  I believe in crafting digital products that not only function flawlessly but also deliver premium, intuitive user experiences through modern tech stacks like Next.js, TypeScript, and MongoDB.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12" ref={statsRef}>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item flex flex-col gap-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-xs tracking-widest text-secondary uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
