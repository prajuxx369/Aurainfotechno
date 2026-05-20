"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Shield, Zap } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}



export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(bgRef.current, 
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(textRef.current,
      { y: 50, opacity: 0, rotationX: -20 },
      { y: 0, opacity: 1, rotationX: 0, duration: 1.2, ease: "power4.out" },
      "-=1"
    )
    .fromTo(descRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power3.out", clearProps: "all" },
      "-=0.6"
    );

    // Parallax background on scroll
    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Animated Background */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary-royal/20 blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-neon-violet/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-4 md:px-6"
      >
        <div className="max-w-5xl mx-auto text-center">


          <h1
            ref={textRef}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-bg-black"
            style={{ perspective: "1000px" }}
          >
            Engineering Future-Ready <br className="hidden md:block" />
            <span className="text-gradient-blue">Digital Platforms</span> for Web, Mobile & Enterprise Growth
          </h1>

          <p
            ref={descRef}
            className="text-lg md:text-xl text-bg-black/70 max-w-4xl mx-auto mb-10 leading-relaxed"
          >
            AuraInfotechno Pvt. Ltd. is a modern software development and digital transformation company in India, helping businesses build scalable web platforms, mobile applications, enterprise software systems, and automation-driven digital ecosystems.<br/><br/>
            We partner with startups, SMEs, enterprises, and institutions to transform business ideas into high-performance digital products that improve operations, strengthen customer experience, and unlock measurable growth.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/portfolio"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-bg-black px-8 py-4 text-base font-bold text-accent-white transition-transform hover:scale-105"
            >
              Explore Our Work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-black/20 bg-black/5 px-8 py-4 text-base font-bold text-bg-black backdrop-blur-md transition-all hover:bg-black/10"
            >
              Schedule a Strategic Consultation
            </Link>
          </div>
        </div>
      </motion.div>


    </section>
  );
}
