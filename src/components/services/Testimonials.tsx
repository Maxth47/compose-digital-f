"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const testimonials = [
  {
    name: "Daniel Smith",
    role: "CEO, EcoSolutions",
    quote: "Working with this team brought our mission to life in the digital world. Their creative approach to content and commitment to sustainable messaging helped us build an engaged community that aligns with our values.",
    avatar: "/images/about-office.jpg",
  },
  {
    name: "Rachel Adams",
    role: "Founder, Travelista",
    quote: "The team exceeded our expectations in every way. Their strategic approach to social media and content marketing helped us reach new audiences and significantly increase our online bookings.",
    avatar: "/images/about-colors.jpg",
  },
  {
    name: "John Martinez",
    role: "Operations",
    quote: "From day one, the team understood our vision and delivered results that spoke for themselves. Their data-driven approach to digital marketing transformed our online presence completely.",
    avatar: "/images/blog-ux.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>
            {/* Left side */}
            <div style={{ flexShrink: 0, width: "400px" }}>
              <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010", marginBottom: "10px" }}>
                Testimonials
              </p>
              <h2 style={{ fontSize: "42px", fontWeight: 500, lineHeight: "50.4px", color: "#101010" }}>
                Hear From Customers
              </h2>
            </div>

            {/* Right side - Quote */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "40px" }}>
              {/* Quote icon */}
              <svg width="48" height="48" viewBox="0 0 256 256" fill="none">
                <path d="M116,72v88a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32v-8H40a16,16,0,0,1-16-16V72A16,16,0,0,1,40,56h60A16,16,0,0,1,116,56Zm100-16H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Z" fill="#101010" />
              </svg>

              {/* Quote text */}
              <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: "25.2px", color: "#101010" }}>
                {testimonials[activeIndex].quote}
              </p>

              {/* People tabs */}
              <div style={{ display: "flex", gap: "20px" }}>
                {testimonials.map((person, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "8px 16px",
                      borderRadius: "50px",
                      border: "none",
                      backgroundColor: i === activeIndex ? "#101010" : "transparent",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0 }}>
                      <Image src={person.avatar} alt={person.name} fill className="object-cover" />
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p style={{ fontSize: "12px", fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: "0.36px", color: i === activeIndex ? "#fcfcfc" : "#595959" }}>
                        {person.name}
                      </p>
                      <p style={{ fontSize: "12px", color: i === activeIndex ? "rgba(252,252,252,0.7)" : "#595959" }}>
                        {person.role}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
