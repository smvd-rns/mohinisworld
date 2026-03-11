import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TributePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 md:pt-28 pb-16 container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary">Tributes</h1>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-poppins">
          A dedicated space for community voices and heartfelt messages. This section will be live shortly.
        </p>
      </div>
      <Footer />
    </main>
  );
}
