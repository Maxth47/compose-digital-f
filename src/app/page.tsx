import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      <Navbar />
      <Hero />
      <WhoAreWe />
      <Quote />
      <Services />
      <Projects />
      <Blog />
      <Marquee />
      <Footer />
    </main>
  );
}
