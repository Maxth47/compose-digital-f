"use client";

import ScrollReveal from "../ScrollReveal";
import SocialIcons from "../SocialIcons";

export default function ServicesHero() {
  return (
    <section style={{ padding: "50px 40px 100px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "100px" }}>
        {/* Content */}
        <ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "750px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010" }}>
              Our Services
            </p>
            <h1 style={{ fontSize: "56px", fontWeight: 500, lineHeight: "67.2px", letterSpacing: "-2.24px", color: "#101010" }}>
              Empowering Brands with Digital Marketing That Delivers
            </h1>
            <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: "25.2px", color: "#595959" }}>
              At Compose, we offer a full suite of digital marketing services designed to grow your brand, engage your audience, and deliver measurable results. Every service we provide is tailored to meet the unique needs of your business, with a focus on strategy, creativity, and impact.
            </p>
          </div>
        </ScrollReveal>

        {/* Bottom row - Social icons + Scroll to explore */}
        <ScrollReveal delay={0.2}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <SocialIcons />

            {/* Scroll to explore */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010" }}>
                Scroll to Explore
              </p>
              <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L128,204.69l66.34-66.35a8,8,0,0,1,11.32,11.32Zm-83.32-45a8,8,0,0,0,11.32,0l72-72a8,8,0,0,0-11.32-11.32L128,87.03,61.66,21.34A8,8,0,0,0,50.34,32.66Z" fill="#101010" />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Divider */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingTop: "50px" }}>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5" }} />
      </div>
    </section>
  );
}
