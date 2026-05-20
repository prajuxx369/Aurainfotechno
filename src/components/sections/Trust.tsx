"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Global Markets", value: "6+" },
  { label: "Digital Solutions", value: "Web & App" },
  { label: "Architecture", value: "Scalable" },
  { label: "Delivery", value: "End-to-End" },
];

export default function Trust() {
  return (
    <section className="py-20 border-y border-white/5 bg-bg-black text-accent-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight mb-4">
              Trusted Web & Mobile App Development Partner for Scalable Businesses
            </h2>
            <p className="text-accent-white/60">
              AuraInfotechno serves businesses that need reliable digital execution, from India-focused companies to global-facing brands. We support projects for India, USA, UK, UAE, Europe, and APAC Markets.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-start lg:items-center justify-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-accent-white to-white/30 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-accent-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
