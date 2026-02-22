"use client";

import ScrollReveal from "../ScrollReveal";

const stats = [
  { value: "260", suffix: "+", label: "Campaigns Launched" },
  { value: "5", suffix: "x", label: "Client ROI" },
  { value: "10M", suffix: "+", label: "Total Audience Reach" },
  { value: "98%", suffix: "", label: "Client Satisfaction" },
];

export default function StatsSection() {
  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "60px" }}>
        <ScrollReveal>
          <p style={{ fontSize: "24px", fontWeight: 500, lineHeight: "33.6px", color: "#101010", textAlign: "center", maxWidth: "800px" }}>
            Dive into our studio&apos;s core – numbers that mirror our dedication, creativity, and pursuit of excellence. These stats offer a glimpse into our design prowess and its real-world impact.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div style={{ display: "flex", gap: "80px", justifyContent: "center" }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
                <h2 style={{ fontSize: "64px", fontWeight: 500, lineHeight: "76.8px", color: "#101010" }}>
                  {stat.value}
                  {stat.suffix && (
                    <sup style={{ fontSize: "32px", verticalAlign: "super", lineHeight: 0 }}>{stat.suffix}</sup>
                  )}
                </h2>
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
