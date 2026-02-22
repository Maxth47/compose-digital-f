import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import VideoBanner from "@/components/about/VideoBanner";
import StatsSection from "@/components/about/StatsSection";
import ClientLogos from "@/components/about/ClientLogos";
import TeamSection from "@/components/about/TeamSection";
import OpenPositions from "@/components/about/OpenPositions";

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fcfcfc" }}>
      <Navbar />
      <AboutHero />
      <WhoWeAre />
      <VideoBanner />
      <StatsSection />
      <ClientLogos />
      <TeamSection />
      <OpenPositions />
      <Marquee />
      <Footer />
    </main>
  );
}
