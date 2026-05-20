"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const steps = [
  { id: "01", title: "Discovery & Analysis", desc: "Discovery and requirement analysis to build a solid foundation.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" },
  { id: "02", title: "UI/UX Design", desc: "UI/UX wireframing and experience design for modern aesthetics.", image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" },
  { id: "03", title: "Backend Engineering", desc: "API-first backend development for robust systems.", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
  { id: "04", title: "Architecture", desc: "Cloud-ready and scalable architecture for future expansion.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" },
  { id: "05", title: "Security & Testing", desc: "Security-focused implementation and rigorous testing.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { id: "06", title: "Deployment & Growth", desc: "Testing, deployment, optimization, and analytics readiness.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" },
];

export default function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-white text-bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
          >
            Practical Innovation That <span className="text-gradient-blue">Powers Systems</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-bg-black/70"
          >
            At AuraInfotechno, innovation is applied through clean planning, modern technology, scalable architecture, and continuous improvement.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black/10 to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative glass rounded-2xl overflow-hidden border border-white/5 hover:border-neon-aqua/30 transition-all duration-300 group flex flex-col"
              >
                <div className="absolute -top-6 -right-6 text-6xl font-heading font-black text-white/[0.05] group-hover:text-neon-aqua/10 transition-colors duration-500 pointer-events-none select-none z-20">
                  {step.id}
                </div>
                
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-black/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-navy/50 backdrop-blur-md border border-white/10 text-sm font-bold text-neon-aqua group-hover:bg-neon-aqua group-hover:text-bg-black transition-all duration-300 z-10">
                    {step.id}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-xl font-bold mb-3 text-accent-white group-hover:text-neon-aqua transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-accent-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
