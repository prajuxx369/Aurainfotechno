"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layout, Database, Smartphone, Zap, Briefcase, ShoppingCart, PenTool, Search, Cpu, Cloud } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { icon: Layout, title: "Enterprise Web Application Development", desc: "We build scalable and secure web applications using modern technology stacks, API-first development, responsive interfaces, and robust backend architecture.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
  { icon: Smartphone, title: "Mobile App Development", desc: "We design and develop mobile applications that create seamless digital experiences for customers, teams, and field operations.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80" },
  { icon: ShoppingCart, title: "eCommerce Development", desc: "We build conversion-focused eCommerce platforms for growing brands, retailers, and multi-location businesses.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" },
  { icon: PenTool, title: "Corporate Websites & Web Portals", desc: "We create modern corporate websites and business portals that improve brand perception, lead generation, and customer trust.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
  { icon: Zap, title: "Digital Transformation", desc: "We help businesses digitize manual processes, integrate disconnected systems, and automate repetitive operations.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" },
  { icon: Cpu, title: "Application Modernization", desc: "We transform outdated systems into secure, modern, cloud-ready, and scalable applications.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" },
];

export default function Services() {
  return (
    <section className="py-24 relative overflow-hidden bg-white text-bg-black">
      <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-neon-magenta/20 blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            className="font-heading text-4xl md:text-5xl font-bold mb-6"
          >
            Enterprise-Grade <span className="text-gradient-blue">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10px" }}
            transition={{ delay: 0.1 }}
            className="text-lg text-bg-black/70 max-w-2xl"
          >
            We build scalable web platforms, mobile applications, enterprise software systems, and automation-driven digital ecosystems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/[0.05] transition-all duration-300 border border-white/5 hover:border-white/10 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-black/90 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-navy/50 backdrop-blur-md text-neon-aqua group-hover:bg-neon-aqua group-hover:text-bg-black transition-colors duration-300 z-10 border border-white/10">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-xl font-bold mb-3 text-accent-white group-hover:text-neon-aqua transition-colors duration-300">
                  {service.title}
                </h3>
              <p className="text-accent-white/60 text-sm leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href="/services" className="inline-flex items-center text-sm font-medium text-accent-white/80 group-hover:text-accent-white mt-auto pt-2">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
