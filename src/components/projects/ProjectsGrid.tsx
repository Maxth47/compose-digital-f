"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const projects = [
  {
    name: "EcoSolutions",
    year: "2023",
    title: "Raising Awareness for a Sustainable Living Brand",
    image: "/images/project-eco.jpg",
  },
  {
    name: "Travelista",
    year: "2023",
    title: "Building an Inspiring Travel Community Online",
    image: "/images/project-travelista.jpg",
  },
  {
    name: "FitLife Studios",
    year: "2022",
    title: "Transforming Online Engagement for a Fitness Brand",
    image: "/images/project-fitlife.jpg",
  },
  {
    name: "FreshNest",
    year: "2023",
    title: "Digital Strategy for a Leading Home Décor Brand",
    image: "/images/project-freshnest.jpg",
  },
  {
    name: "LuxeFit",
    year: "2022",
    title: "Enhancing Brand Engagement for a Premium Fitness Brand",
    image: "/images/project-luxefit.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px", width: "100%" }}>
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <Link href="/projects" style={{ display: "flex", flexDirection: "column", gap: "20px", textDecoration: "none", color: "inherit" }}>
                {/* Image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "460 / 321", borderRadius: "8px", overflow: "hidden" }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover project-image-hover"
                  />
                </div>
                {/* Details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {/* Meta row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "19.6px", color: "#595959" }}>
                      {project.name}
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "19.6px", color: "#595959" }}>
                      {project.year}
                    </p>
                  </div>
                  {/* Title */}
                  <h3 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "28.8px", color: "#101010" }}>
                    {project.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More Button */}
        <ScrollReveal>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 32px",
              backgroundColor: "#222222",
              borderRadius: "200px",
              border: "none",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.39px",
              textTransform: "uppercase" as const,
              color: "#fcfcfc",
              cursor: "pointer",
            }}
          >
            Load More
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
