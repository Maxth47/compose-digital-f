"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#d9d9d9" }}>
      {/* CTA Section */}
      <ScrollReveal>
        <div style={{ padding: "50px 40px" }}>
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              borderTop: "1px solid #101010",
              borderBottom: "1px solid #101010",
              padding: "30px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(60px, 9.5vw, 136px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                textTransform: "uppercase" as const,
                lineHeight: 1,
                color: "#101010",
                whiteSpace: "nowrap" as const,
              }}
            >
              Tell Us Your New Ideas
            </h2>
            <Link
              href="/contact"
              style={{ position: "relative", width: "94px", height: "62px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "flex-end" }}
            >
              {/* Gray circle behind */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "62px",
                  height: "62px",
                  borderRadius: "100px",
                  backgroundColor: "#bfbfbf",
                }}
              />
              {/* Dark circle on top */}
              <div
                className="btn-hover-scale"
                style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: "62px",
                  height: "62px",
                  borderRadius: "100px",
                  backgroundColor: "#101010",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 256 256" fill="none">
                  <path
                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Footer Main Content */}
      <ScrollReveal delay={0.1}>
        <div style={{ padding: "50px 40px 30px" }}>
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "50px",
            }}
          >
            {/* Logo + Link Columns */}
            <div style={{ display: "flex", gap: "50px" }}>
              {/* Logo Column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "30px", width: "450px", flexShrink: 0 }}>
                <Image src="/images/logo.svg" alt="Compose Digital" width={127} height={40} />
                <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "19.2px", color: "#000" }}>
                  Optimize your success with our ROI-driven digital marketing agency.
                </p>
              </div>

              {/* Links Container */}
              <div style={{ display: "flex", gap: "30px", flex: "1 0 0" }}>
                {/* Links */}
                <div style={{ display: "flex", flexDirection: "column", gap: "15px", flex: "1 0 0" }}>
                  <h6 style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px", color: "#101010" }}>Links</h6>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <Link href="/" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Home</Link>
                    <Link href="/about" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>About</Link>
                    <Link href="/services" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Services</Link>
                    <Link href="/projects" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Projects</Link>
                  </div>
                </div>

                {/* Support */}
                <div style={{ display: "flex", flexDirection: "column", gap: "15px", flex: "1 0 0" }}>
                  <h6 style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px", color: "#101010" }}>Support</h6>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <Link href="/contact" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Contact</Link>
                    <Link href="/contact" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Book a Call</Link>
                    <Link href="/blog" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Blog</Link>
                    <Link href="/careers" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Careers</Link>
                  </div>
                </div>

                {/* Social Media */}
                <div style={{ display: "flex", flexDirection: "column", gap: "15px", flex: "1 0 0" }}>
                  <h6 style={{ fontSize: "20px", fontWeight: 500, lineHeight: "24px", color: "#101010" }}>Social Media</h6>
                  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <a href="#" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Instagram</a>
                    <a href="#" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Twitter</a>
                    <a href="#" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Facebook</a>
                    <a href="#" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#101010", textDecoration: "none" }}>Behance</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "100%", height: "1px", backgroundColor: "#bfbfbf" }} />

            {/* Copyright Bar */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ display: "flex", gap: "5px", fontSize: "12px", color: "#000", alignItems: "center" }}>
                <span>&copy;</span>
                <span>2026</span>
                <span>All rights reserved.</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px", alignItems: "center", fontSize: "12px", color: "#000" }}>
                <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
                  <span>001 265 847 483</span>
                  <div style={{ width: "1px", height: "12px", backgroundColor: "rgba(6,7,9,0.5)" }} />
                  <span>say_hi@compose.com</span>
                </div>
                <span>23 Artist Avenue, Suite 456, Imaginopolis, 98765, Wonderland</span>
              </div>
              <a href="#" style={{ fontSize: "12px", color: "#000", textDecoration: "none" }}>Use This Templates</a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </footer>
  );
}
