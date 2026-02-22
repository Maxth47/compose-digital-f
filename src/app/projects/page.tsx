import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fcfcfc" }}>
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <Marquee />
      <Footer />
    </main>
  );
}
