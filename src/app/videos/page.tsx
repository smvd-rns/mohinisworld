import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VideosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28 pb-16 container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Videos</h1>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
          Our full video library is coming soon. Stay tuned for empowering stories and community impact features.
        </p>
      </div>
      <Footer />
    </main>
  );
}
