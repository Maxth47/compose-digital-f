"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    company: "FreshNest",
    year: "2023",
    title: "Digital Strategy for a Leading Home Décor Brand",
    testimonial:
      "The digital strategy this agency provided was exactly what we needed to grow FreshNest's presence and connect with customers who care about sustainability. Their innovative content and campaigns have elevated our brand and significantly boosted our sales!",
    author: "Kimberly Rogers",
    role: "Marketing Director, FreshNest",
    image: "/images/project-freshnest.jpg",
    side: "left" as const,
  },
  {
    company: "GreenLeaf Organics",
    year: "2022",
    title: "Growing Brand Awareness Through Content and Social Media",
    testimonial:
      "Working with this agency has been a game-changer. Their ability to connect us with our audience through content and influencer partnerships has exceeded our expectations. We've seen remarkable growth in brand visibility and customer engagement.",
    author: "David Thompson",
    role: "Marketing Manager, GreenLeaf Organics",
    image: "/images/project-greenleaf.jpg",
    side: "right" as const,
  },
  {
    company: "LuxeFit",
    year: "2022",
    title: "Enhancing Brand Engagement for a Premium Fitness Brand",
    testimonial:
      "This agency transformed LuxeFit's digital footprint! The branding and influencer partnerships created an invaluable connection with our audience, and we've seen outstanding growth in our brand recognition and sales. LuxeFit is now a top choice in the luxury fitness market.",
    author: "Michael Peterson",
    role: "CMO, LuxeFit",
    image: "/images/project-luxefit.jpg",
    side: "left" as const,
  },
  {
    company: "Bright Horizons",
    year: "2023",
    title: "Elevating Education Through Digital Marketing",
    testimonial:
      "Their tailored strategies were key in boosting our online presence and connecting with our community. Enrollments have never been higher!",
    author: "Jessica Williams",
    role: "Marketing Director, Bright Horizons",
    image: "/images/project-bright-horizons.jpg",
    side: "right" as const,
  },
  {
    company: "Tech Innovators",
    year: "2023",
    title: "Building a Digital Presence to Drive Product Adoption",
    testimonial:
      "This team brought a fresh perspective to our digital marketing. Their expertise in paid ads and social media made a measurable impact on our user acquisition, and we're thrilled with the results. They've set us up for ongoing success!",
    author: "Laura Stevens",
    role: "CEO, Tech Innovators",
    image: "/images/project-tech-innovators.jpg",
    side: "left" as const,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <ScrollReveal>
      <div>
        <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "16px", overflow: "hidden" }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover project-image-hover"
          />
        </div>
        <div className="flex items-center justify-between" style={{ marginTop: "16px" }}>
          <span style={{ fontSize: "14px", color: "#595959" }}>{project.company}</span>
          <span style={{ fontSize: "14px", color: "#595959" }}>{project.year}</span>
        </div>
        <h3 style={{ fontSize: "24px", fontWeight: 500, marginTop: "8px", marginBottom: "20px", lineHeight: 1.2 }}>{project.title}</h3>

        {/* Testimonial */}
        <div className="flex gap-2.5 items-start">
          <div style={{ color: "#d4d4d4", marginTop: "2px", flexShrink: 0, fontSize: "18px", lineHeight: 1 }}>&ldquo;&ldquo;</div>
          <div className="flex gap-3 items-start">
            <div style={{ width: "2px", backgroundColor: "#e5e5e5", flexShrink: 0, alignSelf: "stretch", borderRadius: "100px" }}></div>
            <div>
              <p style={{ color: "#595959", fontSize: "16px", lineHeight: 1.4, marginBottom: "16px" }}>
                {project.testimonial}
              </p>
              <p style={{ fontWeight: 500, fontSize: "14px" }}>– {project.author}</p>
              <p style={{ color: "#595959", fontSize: "14px" }}>{project.role}</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const leftProjects = projects.filter((p) => p.side === "left");
  const rightProjects = projects.filter((p) => p.side === "right");

  return (
    <section style={{ padding: "96px 0", maxWidth: "1440px", margin: "0 auto", paddingLeft: "40px", paddingRight: "40px" }}>
      <ScrollReveal>
        <div style={{ marginBottom: "64px" }}>
          <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#101010", marginBottom: "20px" }}>
            OUR PROJECTS
          </p>
          <h2 style={{ fontSize: "42px", fontWeight: 500, lineHeight: 1.2 }}>
            Showcasing Our Success Stories
          </h2>
        </div>
      </ScrollReveal>

      {/* Two-column staggered grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ columnGap: "40px" }}>
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
          {leftProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Right column - offset down */}
        <div style={{ display: "flex", flexDirection: "column", gap: "64px", marginTop: "300px" }}>
          {rightProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <ScrollReveal>
        <div
          className="flex flex-col md:flex-row items-center justify-between"
          style={{ marginTop: "96px", backgroundColor: "#101010", borderRadius: "16px", padding: "56px", gap: "32px" }}
        >
          <p style={{ color: "white", fontSize: "22px", fontWeight: 500, lineHeight: 1.5, maxWidth: "480px" }}>
            If you are ready for a change or have an idea you believe in, let&apos;s talk about it.
            Contact us and stand by for a quick reply.
          </p>
          <div className="flex items-center gap-5 flex-shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 btn-hover-scale"
              style={{ padding: "12px 24px", backgroundColor: "#c8f31d", borderRadius: "100px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const }}
            >
              GET IN TOUCH
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 13L13 1M13 1H3M13 1V11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 link-hover-line"
              style={{ color: "white", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const }}
            >
              SEE MORE PROJECTS
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
