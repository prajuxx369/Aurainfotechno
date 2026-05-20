import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="relative h-16 w-64">
                <Image 
                  src="/aura-logo-v3.png" 
                  alt="Aura Infotech" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-accent-white/60 text-sm mb-6 max-w-xs">
              Engineering digital systems that power modern businesses. Premium websites, applications, and automation.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-accent-white/40 hover:text-neon-aqua transition-colors">
                <FaLinkedinIn className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-white/40 hover:text-neon-aqua transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-accent-white/40 hover:text-neon-aqua transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-accent-white mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              {["Corporate Websites", "Enterprise Web Apps", "Mobile Development", "Business Automation", "E-Commerce", "UI/UX Engineering"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-accent-white/60 hover:text-neon-aqua transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-accent-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              {["About Us", "Portfolio", "Industries", "Case Studies", "Blog", "Careers"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-accent-white/60 hover:text-neon-aqua transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-accent-white mb-6">Subscribe</h4>
            <p className="text-accent-white/60 text-sm mb-4">
              Get the latest insights on digital engineering and business automation.
            </p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-accent-white focus:outline-none focus:border-neon-aqua flex-grow"
              />
              <button 
                type="submit"
                className="bg-neon-aqua text-bg-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-white transition-colors shrink-0"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-accent-white/40 text-sm">
            © {new Date().getFullYear()} AuraInfotechno Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-accent-white/40 hover:text-accent-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-accent-white/40 hover:text-accent-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
