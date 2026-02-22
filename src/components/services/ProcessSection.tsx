"use client";

import ScrollReveal from "../ScrollReveal";

const steps = [
  { name: "Discovery", position: 10, row: 0, color: "#d9d9d9" },
  { name: "Planning", position: 30, row: 1, color: "#595959" },
  { name: "Execution", position: 50, row: 0, color: "#595959" },
  { name: "Optimization", position: 70, row: 1, color: "#101010" },
  { name: "Reporting", position: 90, row: 0, color: "#101010" },
];

const percentages = ["0%", "25%", "50%", "75%", "100%"];

export default function ProcessSection() {
  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Divider top */}
        <div style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5", marginBottom: "80px" }} />

        <ScrollReveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "750px", marginBottom: "60px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010" }}>
              How We Work?
            </p>
            <h2 style={{ fontSize: "42px", fontWeight: 500, lineHeight: "50.4px", color: "#101010" }}>
              Crafting Success, Step by Step
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959" }}>
              At Compose, our process combines strategy, creativity, and data insights to drive impactful results. From discovery to reporting, we focus on transparent, collaborative steps that fuel growth for your brand.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Timeline */}
        <ScrollReveal delay={0.2}>
          <div style={{ position: "relative", padding: "40px 0" }}>
            {/* Vertical grid lines */}
            <div style={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              {percentages.map((_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `${i * 25}%`,
                    top: "-40px",
                    width: "1px",
                    height: "240px",
                    backgroundColor: "#e5e5e5",
                  }}
                />
              ))}
            </div>

            {/* Steps */}
            <div style={{ position: "relative", height: "180px" }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: `${step.position - 10}%`,
                    top: step.row === 0 ? "0" : "80px",
                    width: "20%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <p style={{ fontSize: "16px", fontWeight: 500, color: "#101010" }}>{step.name}</p>
                  <div
                    style={{
                      width: "100%",
                      height: "24px",
                      borderRadius: "100px",
                      backgroundColor: step.color,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Percentage labels */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
              {percentages.map((pct, i) => (
                <span key={i} style={{ fontSize: "14px", color: "#595959" }}>{pct}</span>
              ))}
            </div>

            {/* Bottom line */}
            <div style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5", marginTop: "10px" }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
