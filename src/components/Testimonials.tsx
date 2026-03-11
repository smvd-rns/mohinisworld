"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center space-y-4 md:space-y-6"
        >
          {/* Circular Image */}
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-md">
            <Image
              src="/HH Giriraj Swami.png"
              alt="HH Giriraj Swami"
              fill
              className="object-cover"
            />
          </div>

          {/* Name */}
          <h3 className="text-lg md:text-xl font-bold font-poppins text-gray-900">
            ~ Giriraj Swami
          </h3>

          {/* Quote */}
          <p className="text-base md:text-xl text-gray-700 leading-relaxed font-roboto italic">
            "I never imagined I would feel so attached to a disciple as I am to Madana-mohana-mohini dasi. But my attachment to her, and her Krishna consciousness, have made me detached from my body and from anything outside the transcendental loving service of the Lord. I have been inspired to want to be a better servant, to take more shelter of the holy names and the Deities so I can better serve her and, with her, Srila Prabhupada and Tamal Krishna Goswami and their Lords, and ultimately all living entities. I pray to serve her—and them—eternally, life after life."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
