"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Business-first software planning",
  "Modern web, mobile, and backend engineering",
  "Clean UI/UX focused on usability and conversion",
  "Scalable architecture for future expansion",
  "Transparent communication and delivery",
  "Experience across multiple industries",
  "Flexible development for startups, SMEs, and enterprises",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-black text-accent-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-violet/40 to-neon-aqua/20 rounded-full blur-2xl" />
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
                <span className="font-heading text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-accent-white to-white/20 mb-2">
                  100%
                </span>
                <span className="text-sm font-medium tracking-widest uppercase text-neon-aqua">
                  Digital Excellence
                </span>
              </div>
            </div>
          </motion.div>

          <div className="lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-heading text-4xl md:text-5xl font-bold mb-6"
            >
              Why Enterprises Choose <span className="text-gradient">AuraInfotechno</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-accent-white/70 mb-10"
            >
              Enterprise Software Development & Digital Transformation Company in India. AuraInfotechno delivers technology solutions designed for performance, reliability, security, and long-term scalability.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, idx) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-neon-aqua shrink-0" />
                  <span className="text-sm font-medium text-accent-white/90">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
