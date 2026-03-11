"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-24 bg-white overflow-hidden">
      {/* Background Container with Aspect Ratio Matching for Mobile */}
      <div className="relative w-full aspect-[20/9] md:aspect-auto md:min-h-[90vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/1.jpg"
            alt="Mohini Background"
            fill
            priority
            className="object-cover object-top"
          />
          {/* Soft Gradient Overlay for Readability - matching laptop look */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
        </div>

        {/* Content Overlaid on Background */}
        <div className="h-full w-full flex items-center relative z-10 px-6 md:px-12 lg:pl-24">
          <div className="max-w-[80%] md:max-w-2xl">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-start"
            >
              <h1 className="text-xs sm:text-lg md:text-3xl lg:text-4xl font-normal text-gray-800 mb-0 md:mb-1 font-poppins">
                Welcome to
              </h1>
              <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-none md:leading-tight mb-2 md:mb-8">
                <span className="text-primary font-dancing-script block md:inline">Mohini's</span>{" "}
                <span className="text-primary block md:inline -mt-1 md:mt-0">World</span>
              </h2>
              
              <p className="text-[10px] sm:text-sm md:text-2xl lg:text-3xl font-playfair text-[#d64a7c] mb-3 md:mb-10 leading-snug italic">
                A place for love, <br className="hidden sm:block" />
                laughter and <br className="hidden sm:block" />
                conversation!
              </p>

              <Link 
                href="https://www.youtube.com/watch?v=wMoJWE0OYAE&feature=youtu.be" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-3 py-1.5 md:px-10 md:py-4 rounded-md md:rounded-xl font-bold shadow-sm md:shadow-lg hover:bg-primary/90 transition-all text-[8px] sm:text-xs md:text-lg"
              >
                Check Our Latest Content
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
