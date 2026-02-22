import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import CTABanner from "@/components/services/CTABanner";
import Testimonials from "@/components/services/Testimonials";

export default function ServicesPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fcfcfc" }}>
      <Navbar />
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <CTABanner />
      <Testimonials />
      <Marquee />
      <Footer />
    </main>
  );
}
