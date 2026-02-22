"use client";

import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const positions = [
  {
    title: "Senior Software Developer",
    type: "Remote",
    description: "Join our dynamic tech team, leading the development of innovative software solutions. Bring your expertise to the forefront of digital transformation.",
  },
  {
    title: "Digital Marketing Manager",
    type: "Full Time",
    description: "Shape the online presence of our brand. Lead strategic digital marketing initiatives and drive impactful campaigns to engage and grow our audience.",
  },
  {
    title: "UX/UI Designer",
    type: "Remote",
    description: "Elevate user experiences through intuitive and visually appealing designs. Collaborate with cross-functional teams to create seamless digital interactions.",
  },
];

export default function OpenPositions() {
  return (
    <section style={{ padding: "50px 40px 100px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5", marginBottom: "50px" }} />

        <ScrollReveal>
          <h3 style={{ fontSize: "32px", fontWeight: 500, lineHeight: "38.4px", color: "#101010", marginBottom: "40px" }}>
            Open Positions
          </h3>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {positions.map((pos, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "30px",
                  padding: "30px 0",
                  borderBottom: "1px solid #e5e5e5",
                  alignItems: "start",
                }}
              >
                <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "28.8px", color: "#101010" }}>
                  {pos.title}
                </h5>
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959" }}>
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
                      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="#101010" />
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div style={{ marginTop: "40px" }}>
            <Link
              href="/contact"
              className="btn-hover-scale"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#b3ff00",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.39px",
                textTransform: "uppercase" as const,
                color: "#101010",
                textDecoration: "none",
              }}
            >
              See All Positions
              <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="#101010" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
