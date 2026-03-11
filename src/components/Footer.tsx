"use client";

import React from "react";
import Link from "next/link";
import { Youtube, Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 mb-8 text-left max-w-4xl">
          {/* Brand Info */}
          <div className="flex flex-col items-start">
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-4">MOHINI'S WORLD</h2>
            <p className="text-gray-400 text-xs md:text-sm mb-4 leading-relaxed max-w-xs">
              Empowering the world through authentic storytelling and community growth.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/mohinisworld_?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="https://www.youtube.com/c/MohinisWorld" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube size={18} />
              </Link>
              <Link href="https://www.facebook.com/MohinisWorld" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start pt-1">
            <h3 className="text-sm md:text-lg font-bold mb-3 md:mb-4 text-primary/80">Navigation</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-400 text-xs md:text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Me</Link></li>
              <li><Link href="/videos" className="hover:text-white transition-colors">Videos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[10px] md:text-xs space-y-2 md:space-y-0 text-center md:text-left">
          <p>© {currentYear} Mohini's World.</p>
          <div className="flex space-x-4">
             <Link href="#" className="hover:text-white">Privacy</Link>
             <Link href="#" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
