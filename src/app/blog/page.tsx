import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";

export default function BlogPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fcfcfc" }}>
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <Marquee />
      <Footer />
    </main>
  );
}
