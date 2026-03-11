import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VideoGallery from "@/components/VideoGallery";
import QuoteSection from "@/components/QuoteSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <VideoGallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
