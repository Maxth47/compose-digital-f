"use client";

import ScrollReveal from "../ScrollReveal";

const positions = [
  {
    title: "Senior Software Developer",
    type: "Remote",
    description:
      "Join our dynamic tech team, leading the development of innovative software solutions. Bring your expertise to the forefront of digital transformation.",
  },
  {
    title: "Digital Marketing Manager",
    type: "Full Time",
    description:
      "Shape the online presence of our brand. Lead strategic digital marketing initiatives and drive impactful campaigns to engage and grow our audience.",
  },
  {
    title: "UX/UI Designer",
    type: "Remote",
    description:
      "Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.",
  },
  {
    title: "Customer Success Specialist",
    type: "Part Time",
    description:
      "Be the bridge between our clients and success. Ensure customer satisfaction and build lasting relationships through proactive support and guidance.",
  },
];

export default function CareersContent() {
  return (
    <section style={{ padding: "50px 40px 100px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "50px" }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ display: "flex", gap: "50px", alignItems: "flex-start" }}>
            <h1 style={{ fontSize: "56px", fontWeight: 500, lineHeight: "67.2px", letterSpacing: "-2.24px", color: "#101010", flex: "0 0 auto" }}>
              Join Our Team
            </h1>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959", maxWidth: "500px" }}>
              At Compose, we believe in fostering a culture of collaboration, continuous learning, and growth. Our team is made up of forward-thinking creatives, strategists, and problem-solvers who are dedicated to crafting impactful digital solutions for our clients. If you&apos;re ready to take your career to the next level, explore our current openings and find the role that fits you best.
            </p>
          </div>
        </ScrollReveal>

        {/* Job Listings */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {positions.map((pos, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "30px",
                  padding: "30px 0",
                  borderTop: i === 0 ? "1px solid #e5e5e5" : "none",
                  borderBottom: "1px solid #e5e5e5",
                  alignItems: "start",
                }}
              >
                <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "28.8px", color: "#101010" }}>
                  {pos.title}
                </h5>
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010" }}>
                  {pos.type}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959" }}>
                    {pos.description}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010" }}>
                      More Details
                    </span>
                    <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69l-58.35-58.34a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" fill="#101010" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More */}
        <ScrollReveal delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn-hover-scale"
              style={{
                padding: "10px 18px",
                backgroundColor: "#222222",
                borderRadius: "200px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.39px",
                textTransform: "uppercase" as const,
                color: "#fcfcfc",
                border: "none",
                cursor: "pointer",
              }}
            >
              Load More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
