"use client";

import { motion } from "framer-motion";
import { HeartPulse, GraduationCap, Factory, Landmark, Landmark as GovIcon, ShoppingBag, CheckCircle2 } from "lucide-react";

const industries = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Landmark, name: "Finance" },
  { icon: Factory, name: "Manufacturing" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "Retail & eCommerce" },
  { icon: GovIcon, name: "Government & Public Sector" },
];

const financeExpertise = [
  "Merchant banking workflow application",
  "Insurance document management system",
  "Risk analysis and reporting platform",
  "Stock advisory back-office platform",
  "Wealth management dashboard",
  "Investor education portal",
  "Corporate budgeting application",
  "Financial forecasting and planning system",
];

const healthcareExpertise = [
  "Medical equipment order management system",
  "Clinic management system",
  "Clinical trials and research workflow platform",
  "Hospital vendor management system",
  "Veterinary eCommerce and distribution platform",
  "Dentist on-demand appointment portal",
  "Women’s health awareness and care app",
  "Laboratory management system",
];

export default function Industries() {
  return (
    <section className="py-24 relative overflow-hidden bg-bg-black text-accent-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
          >
            Industries We <span className="text-gradient">Serve</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-accent-white/70"
          >
            We deliver tailored digital solutions across diverse sectors, understanding the unique challenges and opportunities of each industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-24">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group flex flex-col items-center justify-center p-6 glass rounded-2xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
            >
              <ind.icon className="h-8 w-8 mb-4 text-accent-white/40 group-hover:text-neon-aqua transition-colors duration-300" />
              <span className="font-heading text-sm md:text-base font-semibold text-accent-white/80 group-hover:text-accent-white transition-colors duration-300 text-center">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-neon-aqua">Finance Industry Expertise</h3>
            <p className="text-accent-white/70 mb-8">
              AuraInfotechno builds secure and performance-focused digital platforms for finance, wealth management, insurance, investment advisory, and fintech businesses.
            </p>
            <ul className="space-y-3">
              {financeExpertise.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-neon-aqua shrink-0 mt-0.5" />
                  <span className="text-sm text-accent-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-neon-magenta">Healthcare Industry Expertise</h3>
            <p className="text-accent-white/70 mb-8">
              AuraInfotechno develops healthcare software platforms for clinics, diagnostics, hospitals, health-tech innovators, pharma operations, and care delivery teams.
            </p>
            <ul className="space-y-3">
              {healthcareExpertise.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-neon-magenta shrink-0 mt-0.5" />
                  <span className="text-sm text-accent-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
