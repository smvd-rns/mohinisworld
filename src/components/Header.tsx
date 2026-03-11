"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group">
          <span className="text-primary font-dancing-script text-3xl md:text-3xl">
            Mohini's
          </span>
          <span className="text-gray-900 font-bold tracking-[0.2em] text-lg md:text-xl uppercase -mt-2 ml-1">
            World
          </span>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex flex-1 justify-center space-x-12 items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold tracking-[0.1em] transition-colors duration-200 ${
                idx === 0 ? "text-primary border-b-2 border-primary" : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons - Right */}
        <div className="hidden md:flex space-x-6 items-center text-gray-900">
          <Link href="https://www.facebook.com/MohinisWorld" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Facebook size={20} />
          </Link>
          <Link href="https://www.instagram.com/mohinisworld_?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Instagram size={20} />
          </Link>
          <Link href="https://www.youtube.com/c/MohinisWorld" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Youtube size={22} />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-2 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-gray-800 hover:text-primary transition-colors border-b border-gray-50 pb-2 capitalize"
              onClick={() => setIsOpen(false)}
            >
              {link.name.toLowerCase()}
            </Link>
          ))}
          <div className="flex space-x-5 pt-3 justify-center">
            <Link href="https://www.facebook.com/MohinisWorld" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors"><Facebook size={18} /></Link>
            <Link href="https://www.instagram.com/mohinisworld_?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors"><Instagram size={18} /></Link>
            <Link href="https://www.youtube.com/c/MohinisWorld" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors"><Youtube size={20} /></Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
