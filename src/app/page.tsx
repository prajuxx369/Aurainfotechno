import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import Industries from "@/components/sections/Industries";
import CaseStudies from "@/components/sections/CaseStudies";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-primary-cyan selection:text-bg-black">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <WhyChooseUs />
      <Process />
      <Industries />
      <CaseStudies />
      <CTA />
      <Footer />
    </main>
  );
}
