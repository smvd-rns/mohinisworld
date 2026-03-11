"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white via-white to-pink-50/40 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-row items-center gap-2 sm:gap-8 md:gap-16">
          {/* Polaroid Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[45%] md:w-5/12"
          >
            <div className="bg-white p-2 sm:p-4 md:p-6 shadow-[0_20px_50px_-12px_rgba(233,30,140,0.15)] border border-pink-50/50 rounded-sm transform transition-transform hover:rotate-0 duration-500">
              <div className="aspect-[4/5] relative overflow-hidden bg-gray-50 border border-gray-100">
                <Image
                  src="/2.jpg"
                  alt="Mohini Polaroid"
                  fill
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="h-4 sm:h-12"></div> {/* Spacing at bottom of polaroid */}
            </div>
          </motion.div>

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[55%] md:w-7/12 relative z-10"
          >
            <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2 text-left">
              <h3 className="text-xl sm:text-3xl md:text-5xl font-poppins text-gray-900 leading-none">
                Hey!
              </h3>
              <Sparkles className="text-primary w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 opacity-60" />
            </div>
            
            <h2 className="text-lg sm:text-3xl md:text-5xl font-dancing-script text-primary mb-2 sm:mb-6 leading-tight">
              A little about Mohini
            </h2>

            <div className="space-y-2 sm:space-y-4 text-gray-800 text-[10px] sm:text-base md:text-lg leading-relaxed font-poppins text-left">
              <p className="line-clamp-6 sm:line-clamp-none">
                Mohini, my beloved little sister, is an experience; she is like 
                a fresh wave of life. She suffers from an all-consuming genetic 
                condition called muscular dystrophy that tries to pull her down 
                in many ways, everyday. But I have never seen the twinkle 
                disappear from her eyes. She wakes up with an inspiring zeal 
                and is always looking for ways to keep moving towards the 
                fulfilment of her many dreams.
              </p>
              
              <Link 
                href="/about" 
                className="inline-flex items-center gap-1 sm:gap-2 font-bold text-gray-900 border-b border-transparent hover:border-primary transition-all pt-1 sm:pt-4 text-xs sm:text-base"
              >
                Know More <span className="text-sm sm:text-xl">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Lotus on the Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute right-[-5%] top-[10%] w-[300px] h-[400px] pointer-events-none hidden lg:block"
      >
        <Image
          src="/lotus_new.png"
          alt="Decorative Lotus"
          fill
          className="object-contain mix-blend-multiply opacity-80"
        />
      </motion.div>
    </section>
  );
};

export default AboutSection;
