"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full bg-primary-royal/20 blur-[150px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center glass p-8 md:p-16 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-neon-magenta to-transparent" />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-accent-white"
          >
            Build a Digital Platform That <span className="text-gradient">Moves Your Business Forward</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-accent-white/70 mb-10 max-w-3xl mx-auto"
          >
            If you are looking for a web development company, mobile app development company, software development partner, or digital transformation team in India, AuraInfotechno Pvt. Ltd. can help you plan, design, develop, and launch future-ready digital systems tailored to your business goals.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-neon-magenta px-8 py-4 text-base font-bold text-accent-white transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,46,136,0.4)]"
            >
              <Calendar className="h-5 w-5" />
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-base font-bold text-accent-white hover:bg-white/5 transition-all"
            >
              Discuss Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
