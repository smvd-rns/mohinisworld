import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-white to-white">
      <Header />
      <div className="pt-24 md:pt-28 pb-16 container mx-auto px-6 lg:px-24">
        
        {/* Layout container */}
        <div className="relative max-w-5xl mx-auto mt-8 mb-16">
          
          {/* Lotus image on the right */}
          <div className="absolute right-0 top-0 hidden md:block w-48 h-64 pointer-events-none transform translate-x-12 -translate-y-8">
            <Image 
              src="/lotus.png" 
              alt="Lotus" 
              fill 
              className="object-contain"
            />
          </div>

          {/* Heading Section */}
          <div className="mb-8 relative">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight flex items-start gap-2 md:gap-4">
              Hey!
              {/* Sparkle icon */}
              <div className="text-[#f5bb73] w-8 h-8 md:w-12 md:h-12 mt-1 flex-shrink-0 animate-pulse">
                <svg viewBox="0 0 24 24" fill="currentColor">
                   <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                </svg>
              </div>
            </h1>
            <h2 className="text-xl md:text-4xl font-poppins text-primary mt-1 md:mt-2 font-normal">
              A little about Mohini!
            </h2>
          </div>

          {/* Body Text */}
          <div className="prose prose-lg max-w-none text-gray-500 font-poppins leading-loose tracking-wide">
            <p className="mb-8">
              Mohini, my beloved little sister, is an experience; she is like a fresh wave of life. She suffers from an all-consuming genetic condition called muscular dystrophy that tries to pull her down in many ways, everyday. But I have never seen the twinkle disappear from her eyes. She wakes up with an inspiring zeal and is always looking for ways to keep moving towards the fulfilment of her many dreams. She believes in living fully, she appreciates the little things is life, she loves to love, and connect with people, and share what she has learnt from life. When you are with her, something inside you moves, in the right way. Her intense conversations, her childlike innocence, her beauty and love and compassion, her fire and her spirit to fight life's challenges, her sharp intelligence and deep wisdom, and her dreams and desires that make her so alive, all compel you to look inside, to find a better you. That's who she is—she wants to make this world a better place. She wants to leave herself behind for when she is gone—and I am here to welcome you and walk you into her beautiful world.
            </p>

            <div className="mt-16 font-bold text-gray-600 space-y-1">
              <p>With love,</p>
              <p>Mohini's sister,</p>
              <p>Aishwarya/Audarya</p>
            </div>
          </div>

          {/* Family Section */}
          <div className="mt-12 sm:mt-24 pt-6 sm:pt-12 flex flex-row items-center text-left gap-4 sm:gap-8">
            <div className="w-1/2">
              <h2 className="text-xl sm:text-5xl font-poppins text-primary font-normal mb-2 sm:mb-8">
                Know about my Family
              </h2>
              <p className="text-gray-500 font-poppins text-xs sm:text-lg">
                Meet my Mummy, Papa, and Didi.
              </p>
            </div>
            
            <div className="w-1/2 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl shadow-md">
              <Image 
                src="/Family.jpg" 
                alt="Mohini with her family" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}
