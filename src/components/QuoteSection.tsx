"use client";

import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-white via-pink-50/30 to-white overflow-hidden relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-tl from-[#e0f7fa] via-[#e8f4f8] to-white rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] p-8 md:p-20 relative overflow-hidden flex flex-col items-start justify-center min-h-[300px] md:min-h-[400px] shadow-[0_20px_50px_-12px_rgba(224,247,250,0.8)] border border-cyan-50"
        >
          {/* Main Title */}
          <h3 className="text-[#8c7355] font-poppins text-base md:text-lg mb-4">
            Mohini's message to you
          </h3>

          <div className="relative z-10 max-w-4xl">
            {/* Big Quote Mark */}
            <div className="absolute -left-6 md:-left-10 -top-3 text-primary/10 text-[80px] md:text-[120px] font-serif leading-none select-none drop-shadow-sm">
              “
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-3xl font-poppins text-[#2d3748] leading-tight">
                Hare Krishna!
              </h2>
              <p className="text-lg md:text-2xl font-poppins text-[#4a5568] leading-snug">
                Let life be a part of service, not service a part of life.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;
