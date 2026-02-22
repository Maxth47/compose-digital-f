"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function CTABanner() {
  return (
    <section>
      <ScrollReveal>
        <div
          style={{
            position: "relative",
            height: "480px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {/* Background Image */}
          <Image
            src="/images/quote-bg.jpg"
            alt="CTA Background"
            fill
            className="object-cover"
            style={{ zIndex: 0 }}
          />
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(16,16,16,0.6)",
              zIndex: 1,
            }}
          />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", padding: "0 40px" }}>
            <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#fcfcfc" }}>
              Get in Touch with Compose
            </p>
            <h2 style={{ fontSize: "42px", fontWeight: 500, lineHeight: "50.4px", color: "#fcfcfc", maxWidth: "600px" }}>
              Collaboration, Work Enquires or Just Say Hello.
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "rgba(252,252,252,0.8)", maxWidth: "500px" }}>
              Contact us today, and let&apos;s start creating the space you&apos;ve imagined. We&apos;re here to guide you from design to construction.
            </p>
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
                marginTop: "10px",
              }}
            >
              Drop Us a Line
              <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="#101010" />
              </svg>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
