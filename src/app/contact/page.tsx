import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Image Section */}
      <div className="relative w-full h-[30vh] md:h-[50vh] mt-20">
        <Image
          src="/3.jpg"
          alt="Contact Us Header"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Contact Form Section */}
      <div className="py-6 md:py-10 bg-[#e0f7fa] relative">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex flex-row justify-between items-start gap-4 sm:gap-16 relative z-10">
            
            {/* Left Side: Text and Lotus */}
            <div className="w-[40%] md:w-1/2 relative space-y-2 sm:space-y-4 text-left">
              <div className="flex items-center justify-start gap-1 sm:gap-2">
                <p className="text-gray-600 font-poppins text-[10px] sm:text-lg">Hello, there!</p>
                {/* Sparkle icon */}
                <div className="text-[#f5bb73] w-3 h-3 sm:w-6 sm:h-6 animate-pulse">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-sm sm:text-4xl lg:text-5xl font-poppins text-gray-900 leading-tight">
                We'll be glad to hear from you.
              </h2>
              <h3 className="text-xs sm:text-3xl font-poppins text-gray-500 italic font-light">
                Send us your thoughts.
              </h3>
              
              <div className="relative w-full h-32 sm:h-64 md:h-80 opacity-90">
                 <Image src="/lotus 2.png" alt="Lotus Plant" fill className="object-contain object-left-top" />
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-[60%] md:w-1/2 relative z-20">
              <form className="space-y-3 sm:space-y-6 w-full max-w-lg">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-md sm:rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-poppins text-gray-700 text-xs sm:text-base" 
                />
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-md sm:rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm font-poppins text-gray-700 text-xs sm:text-base" 
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={4} 
                  className="w-full px-2 sm:px-4 py-2 sm:py-3 rounded-md sm:rounded-lg border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-sm resize-none font-poppins text-gray-700 text-xs sm:text-base"
                ></textarea>
                


                <button 
                  type="submit" 
                  className="bg-[#e91e8c] hover:bg-[#d61a80] text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg sm:rounded-2xl font-bold shadow-md transition-all mt-2 sm:mt-4 font-poppins self-start text-xs sm:text-base"
                >
                   Submit Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
