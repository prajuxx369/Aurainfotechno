"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Zap, Search } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    client: "Global FinTech Corp",
    title: "Enterprise Core Banking App",
    desc: "Re-engineered a legacy banking system into a modern, scalable microservices architecture.",
    stats: [
      { icon: Zap, label: "Performance", value: "+300%" },
      { icon: TrendingUp, label: "Conversion", value: "+45%" },
    ],
    bgClass: "from-primary-navy to-primary-royal/20",
  },
  {
    id: 2,
    client: "National Health System",
    title: "Patient Portal Automation",
    desc: "Built a secure, HIPAA-compliant patient management system with automated scheduling.",
    stats: [
      { icon: Zap, label: "Efficiency", value: "+200%" },
      { icon: Search, label: "Search Vis.", value: "Top 3" },
    ],
    bgClass: "from-primary-navy to-primary-cyan/20",
  },
  {
    id: 3,
    client: "Retail Giant E-Com",
    title: "Scalable E-Commerce Engine",
    desc: "Developed a custom e-commerce engine handling millions of transactions with zero downtime.",
    stats: [
      { icon: TrendingUp, label: "Sales", value: "+120%" },
      { icon: Zap, label: "Load Time", value: "< 1s" },
    ],
    bgClass: "from-primary-navy to-neon-magenta/20",
  },
];

export default function CaseStudies() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-white text-bg-black">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-heading text-4xl md:text-5xl font-bold mb-4"
            >
              Digital Products, Platforms & <span className="text-neon-magenta">Transformation Success Stories</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-lg text-bg-black/70"
            >
              See how our digital engineering solves real business challenges and drives measurable ROI across web platforms, mobile apps, and enterprise portals.
            </motion.p>
          </div>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-neon-aqua hover:text-bg-black transition-colors">
            View All Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto py-10 snap-x snap-mandatory hide-scrollbar">
        <div className="flex gap-6 md:gap-8 px-4 md:px-6 w-max mx-auto md:mx-0">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className={`relative w-[85vw] md:w-[600px] shrink-0 snap-center rounded-3xl overflow-hidden glass border border-white/10 bg-gradient-to-br ${study.bgClass} p-8 md:p-10`}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="text-sm font-bold tracking-widest text-neon-aqua uppercase">
                  {study.client}
                </span>
                <span className="h-px w-10 bg-white/20" />
              </div>
              
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-accent-white">
                {study.title}
              </h3>
              <p className="text-accent-white/70 text-sm md:text-base mb-10 max-w-md line-clamp-2 md:line-clamp-none">
                {study.desc}
              </p>

              <div className="flex gap-6 mb-8">
                {study.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-accent-white/50 text-xs font-medium uppercase tracking-wider">
                      <stat.icon className="h-4 w-4 text-neon-aqua" />
                      {stat.label}
                    </div>
                    <div className="font-heading text-2xl font-black text-accent-white">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>

              <Link href={`/portfolio/${study.id}`} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-neon-aqua text-accent-white hover:text-bg-black transition-all duration-300">
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
