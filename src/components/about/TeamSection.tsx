"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const team = [
  { name: "Jane Mills", role: "Developer", image: "/images/team-1.jpg" },
  { name: "Julio Bricks", role: "Designer", image: "/images/team-2.jpg" },
  { name: "Klara Klarsson", role: "Marketing", image: "/images/team-3.jpg" },
  { name: "Ichiro Wang", role: "Art Direction", image: "/images/team-4.jpg" },
  { name: "Jane Jimenez", role: "Sales Person", image: "/images/team-5.jpg" },
  { name: "Simon Fay", role: "Developer", image: "/images/team-6.jpg" },
];

export default function TeamSection() {
  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "50px" }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "750px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010" }}>
              Our Team
            </p>
            <h2 style={{ fontSize: "42px", fontWeight: 500, lineHeight: "50.4px", color: "#101010" }}>
              Crafting Digital Success with Passion & Expertise
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959" }}>
              Our team at Compose is a collective of creatives, strategists, and innovators committed to delivering digital excellence. Together, we bring a diverse set of skills and a shared passion for driving growth and building meaningful connections between brands and their audiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
          {team.map((member, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                {/* Photo */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "460 / 460", borderRadius: "10px", overflow: "hidden" }}>
                  <Image src={member.image} alt={member.name} fill className="object-cover project-image-hover" />
                </div>
                {/* Social icons */}
                <div style={{ display: "flex", gap: "8px" }}>
                  {[0, 1, 2, 3].map((i) => (
                    <a key={i} href="#" style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid #d9d9d9", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                      <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" fill="#595959" />
                      </svg>
                    </a>
                  ))}
                </div>
                {/* Info */}
                <div>
                  <h6 style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px", color: "#101010", margin: 0 }}>{member.name}</h6>
                  <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959", marginTop: "4px" }}>{member.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
