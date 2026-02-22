"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Branding and Strategy",
    description:
      "Our Branding and Strategy services are designed to help you build a strong, cohesive brand identity and create effective strategies to connect with your target audience.",
    hasLink: true,
  },
  {
    title: "Analytics and Reporting",
    description:
      "We provide comprehensive analytics and reporting services to help you track performance, understand your audience, and make data-driven decisions.",
  },
  {
    title: "Website Development",
    description:
      "Our website development team creates stunning, responsive websites that deliver exceptional user experiences and drive conversions.",
  },
  {
    title: "Email Marketing",
    description:
      "We craft targeted email marketing campaigns that nurture leads, engage customers, and drive measurable results for your business.",
  },
  {
    title: "Pay-Per-Click Advertising",
    description:
      "Our PPC experts create and manage high-performing advertising campaigns across Google, social media, and other platforms to maximize your ROI.",
  },
  {
    title: "Content Marketing",
    description:
      "We develop compelling content strategies and create high-quality content that resonates with your audience and establishes your brand authority.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section style={{ padding: "96px 0", maxWidth: "1440px", margin: "0 auto", paddingLeft: "40px", paddingRight: "40px" }}>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
        {/* Left side */}
        <ScrollReveal className="lg:w-[45%]">
          <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#101010", marginBottom: "20px" }}>
            OUR SERVICES
          </p>
          <h2 style={{ fontSize: "32px", fontWeight: 500, lineHeight: 1.2, marginBottom: "32px" }}>
            Empowering Clients to Embrace Transformation
          </h2>
          <p style={{ color: "#595959", fontSize: "16px", lineHeight: 1.4, marginBottom: "16px" }}>
            We harness creativity and technical expertise to help brands evolve, thrive, and redefine
            their presence both commercially and culturally.
          </p>
          <p style={{ color: "#595959", fontSize: "16px", lineHeight: 1.4 }}>
            Our greatest asset is the trust of our clients.
            <br />
            Our true success is measured by theirs.
          </p>
        </ScrollReveal>

        {/* Right side - Accordion */}
        <ScrollReveal delay={0.15} className="lg:w-[55%]">
          {services.map((service, index) => (
            <div key={index} style={{ borderTop: "1px solid #e5e5e5" }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex items-center justify-between w-full text-left group"
                style={{ padding: "20px 0" }}
              >
                <span style={{ fontSize: "24px", fontWeight: 500, lineHeight: 1.2 }}>{service.title}</span>
                <div
                  className="flex items-center justify-center flex-shrink-0 group-hover:border-gray-500 transition-colors"
                  style={{ width: "32px", height: "32px", borderRadius: "100%", border: "1px solid #d4d4d4", marginLeft: "16px", transition: "transform 0.3s ease, border-color 0.3s ease", transform: openIndex === index ? "rotate(0deg)" : "rotate(0deg)" }}
                >
                  {openIndex === index ? (
                    <svg width="12" height="2" viewBox="0 0 12 2" fill="none">
                      <path d="M1 1h10" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke="#101010" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </div>
              </button>
              <div className={`accordion-content ${openIndex === index ? "open" : ""}`}>
                <p style={{ color: "#595959", fontSize: "16px", lineHeight: 1.4, paddingBottom: "12px" }}>
                  {service.description}
                </p>
                {service.hasLink && openIndex === index && (
                  <a
                    href="/services"
                    className="inline-flex items-center gap-2 link-hover-line"
                    style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const, marginBottom: "16px" }}
                  >
                    MORE DETAILS
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "24px" }}>
            <a
              href="/services"
              className="inline-flex btn-hover-scale"
              style={{ padding: "12px 24px", border: "1px solid #d4d4d4", borderRadius: "100px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const }}
            >
              MORE SERVICES
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
