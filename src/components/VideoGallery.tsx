"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    id: "buw3GtT9-bE",
    title: "Empowering Women in Tech",
    thumbnail: "https://img.youtube.com/vi/buw3GtT9-bE/maxresdefault.jpg",
  },
  {
    id: "lGmCI71bBJs",
    title: "Mind of a Queen. Heart of a Warrior.",
    thumbnail: "https://img.youtube.com/vi/lGmCI71bBJs/maxresdefault.jpg",
  },
  {
    id: "5f2p43C8l0A",
    title: "Community Impact Stories",
    thumbnail: "https://img.youtube.com/vi/5f2p43C8l0A/maxresdefault.jpg",
  },
];

const VideoGallery = () => {
  return (
    <section className="pt-12 pb-24 md:pt-20 md:pb-32 bg-pink-50/30">
      <div className="container mx-auto px-6">
        {/* Section heading styled like the screenshot */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-2">VIDEOS</p>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Mind of a <em>QUEEN.</em>
            <br />
            Heart of a <em>Warrior.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
              style={{ textDecoration: "none" }}
            >
              {/* Refactored Video Card */}
              <div
                className="relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl"
                style={{
                  borderRadius: "16px",
                  background: "#fff",
                }}
              >
                {/* Thumbnail area */}
                <div className="aspect-video relative overflow-hidden bg-gray-300 rounded-t-2xl">
                  {/* Instead of actual YouTube thumbnails showing preview, the image shows a grey background, we'll keep the image but overlay grey if needed or just use the image */}
                  <div className="absolute inset-0 bg-black/10 z-10"></div>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Play button centered */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-[#e91e8c] fill-current ml-1" size={28} />
                    </div>
                  </div>

                  {/* Top-right Title Overlay (from screenshot it seems the title is overlayed on top left, wait no, let me check the image again)
                      Actually in the screenshot: 
                      - Top-left corner: Video title text in dark gray over the gray background.
                      - Top-right corner: Pink curved accent.
                      - Bottom-left corner: Pink curved accent.
                      - Bottom white bar: Video title text again.
                      Wait, the image shows the title text inside the gray area at the top left AND in the white bar at the bottom.
                      Let's replicate that.
                  */}
                </div>

                {/* Bottom area (white bar) */}
                <div className="relative px-4 py-4 bg-white rounded-b-2xl border-t-0 shadow-sm z-30 flex items-center min-h-[50px] md:min-h-[72px]">

                  
                  {/* Title area */}
                  <h3 className="font-bold text-gray-900 text-[10px] sm:text-sm group-hover:text-primary transition-colors ml-4 relative z-40 py-1">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="https://www.instagram.com/mohinisworld_?igshid=YmMyMTA2M2Y%3DD" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-primary/90 transition-all"
          >
            VIEW ALL CONTENT
          </Link>
        </div>

        {/* Motivational Quote Section */}
        <div className="mt-24 md:mt-32 max-w-3xl mx-auto relative px-4 md:px-0">
          <div className="bg-[#cff5f6] py-12 md:py-16 px-6 md:px-8 relative shadow-sm">
            {/* Sparkle icon */}
            <div className="absolute -top-6 left-8 md:left-24 w-6 h-6 md:w-8 md:h-8 text-[#f5bb73]">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
              </svg>
            </div>
            
            {/* Lotus image */}
            <div className="absolute -top-12 md:-top-24 right-2 md:right-16 w-24 h-32 md:w-40 md:h-56 pointer-events-none z-10 transition-all">
              <Image
                src="/lotus.png"
                alt="Lotus Flower"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-xl md:text-4xl text-[#0d2a2d] font-poppins text-center leading-relaxed">
              She did her <span className="italic">best</span><br />
              and <span className="italic">God</span> did the rest!
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoGallery;
