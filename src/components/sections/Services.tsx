"use client";

import { motion } from "framer-motion";

const services = [
  "FULL STACK DEVELOPMENT",
  "WEB APPLICATION DEVELOPMENT",
  "AI-POWERED APPLICATIONS",
  "E-COMMERCE DEVELOPMENT",
  "IOT APPLICATIONS",
  "DIGITAL PRODUCT DEVELOPMENT"
];

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
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
                What I Do
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight uppercase leading-none"
            >
              Digital <br />
              <span className="text-secondary italic font-light">Expertise</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 font-light max-w-sm"
          >
            I provide end-to-end development services, bridging the gap between elegant design, robust engineering, and AI capabilities.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto border-t border-black/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group flex flex-col md:flex-row md:items-center py-8 border-b border-black/10 hover:bg-black/[0.01] transition-colors duration-500 cursor-default"
            >
              <span className="font-mono text-xs text-zinc-400 font-medium w-16 mb-2 md:mb-0">
                0{index + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-light tracking-wide uppercase group-hover:text-accent transition-colors duration-300">
                {service}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
