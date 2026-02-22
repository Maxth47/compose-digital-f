"use client";

import { useState } from "react";
import ScrollReveal from "../ScrollReveal";

const services = [
  "Branding and Strategy",
  "Analytics and Reporting",
  "Website Development",
  "Email Marketing",
  "Pay-Per-Click Advertising",
  "Content Marketing",
  "Social Media Marketing",
  "Search Engine Optimization",
];

export default function ContactForm() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <section style={{ padding: "80px 40px 120px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Title */}
        <ScrollReveal>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 500,
              lineHeight: "67.2px",
              letterSpacing: "-2.24px",
              color: "#101010",
              textAlign: "center",
            }}
          >
            <em style={{ fontStyle: "italic" }}>Get in touch.</em>
            <br />
            Stay connected fast.
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={0.1}>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "22.4px",
              color: "#595959",
              textAlign: "center",
              maxWidth: "600px",
              marginTop: "20px",
            }}
          >
            Before we begin, we&apos;d like to gain a deeper understanding of your needs. We&apos;ll review your application and arrange a free consultation to provide an estimate.
          </p>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.2}>
          <form
            style={{
              width: "700px",
              maxWidth: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              marginTop: "50px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* First Name + Last Name */}
            <div style={{ display: "flex", gap: "20px" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010" }}>
                  First Name
                </p>
                <div style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
                  <input
                    type="text"
                    placeholder="First name"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#262626",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010" }}>
                  Last Name
                </p>
                <div style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
                  <input
                    type="text"
                    placeholder="Last name"
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#262626",
                      backgroundColor: "transparent",
                      border: "none",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010" }}>
                Email
              </p>
              <div style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
                <input
                  type="email"
                  placeholder="your@company.com"
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#262626",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010" }}>
                Phone Number
              </p>
              <div style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
                <input
                  type="tel"
                  placeholder="+1(555) 000-0000"
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#262626",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Message */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010" }}>
                Message
              </p>
              <div style={{ backgroundColor: "#f0f0f0", borderRadius: "4px" }}>
                <textarea
                  placeholder="Tell us about your project"
                  rows={5}
                  style={{
                    width: "100%",
                    padding: "12px",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#262626",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                />
              </div>
            </div>

            {/* Services */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010" }}>
                Services
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px 20px",
                }}
              >
                {services.map((service) => (
                  <label
                    key={service}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#101010",
                    }}
                    onClick={() => toggleService(service)}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        border: selected.includes(service) ? "none" : "1.5px solid #d9d9d9",
                        backgroundColor: selected.includes(service) ? "#b3ff00" : "transparent",
                        flexShrink: 0,
                        transition: "all 0.2s ease",
                      }}
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-hover-scale"
              style={{
                width: "100%",
                padding: "14px 24px",
                backgroundColor: "#101010",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.39px",
                textTransform: "uppercase" as const,
                color: "#fcfcfc",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
