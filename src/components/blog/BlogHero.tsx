"use client";

import ScrollReveal from "../ScrollReveal";

export default function BlogHero() {
  return (
    <section style={{ padding: "50px 40px 100px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "100px" }}>
        {/* Content */}
        <ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "750px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010" }}>
              Insights & Innovations
            </p>
            <h1 style={{ fontSize: "56px", fontWeight: 500, lineHeight: "67.2px", letterSpacing: "-2.24px", color: "#101010" }}>
              Dive into the Latest in Digital Marketing
            </h1>
            <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: "25.2px", color: "#595959" }}>
              Stay informed, inspired, and ahead of the curve with our curated insights and thought leadership. From the latest trends in digital marketing to in-depth analyses of industry shifts, our blog is your go-to resource for all things digital.
            </p>
          </div>
        </ScrollReveal>

        {/* Bottom row - Social icons + Scroll to explore */}
        <ScrollReveal delay={0.2}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[0, 1, 2, 3].map((i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: "1px solid #d9d9d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" fill="#595959" />
                  </svg>
                </a>
              ))}
            </div>

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
