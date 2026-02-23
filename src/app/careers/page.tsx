import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import CareersContent from "@/components/careers/CareersContent";

export default function CareersPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fcfcfc" }}>
      <Navbar />
      <CareersContent />
      <Marquee />
      <Footer />
    </main>
  );
}
