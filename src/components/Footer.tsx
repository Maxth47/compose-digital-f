"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#fcfcfc", paddingTop: "64px", paddingBottom: "32px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: "40px", paddingRight: "40px" }}>
        {/* CTA Section */}
        <ScrollReveal>
          <div style={{ borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", padding: "40px 0", marginBottom: "64px" }}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 style={{ fontSize: "80px", fontWeight: 700, letterSpacing: "-0.03em", textTransform: "uppercase", lineHeight: 1 }}>
                TELL US YOUR NEW IDEAS
              </h2>
              <a
                href="/contact"
                className="flex items-center justify-center btn-hover-scale"
                style={{ flexShrink: 0, width: "64px", height: "64px", borderRadius: "100%", backgroundColor: "#101010" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer content */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10" style={{ marginBottom: "64px" }}>
            {/* Logo + Description */}
            <div>
              <Image src="/images/logo.svg" alt="Compose Digital" width={127} height={40} style={{ marginBottom: "24px" }} />
              <p style={{ fontSize: "14px", color: "#595959", lineHeight: 1.7 }}>
                Optimize your success with our ROI-driven digital marketing agency.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Links</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="/" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Home</a></li>
                <li><a href="/about" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>About</a></li>
                <li><a href="/services" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Services</a></li>
                <li><a href="/projects" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Projects</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Support</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="/contact" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Contact</a></li>
                <li><a href="/contact" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Book a Call</a></li>
                <li><a href="/blog" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Blog</a></li>
                <li><a href="/careers" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Careers</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 style={{ fontWeight: 600, fontSize: "14px", marginBottom: "20px" }}>Social Media</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <li><a href="#" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Instagram</a></li>
                <li><a href="#" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Twitter</a></li>
                <li><a href="#" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Facebook</a></li>
                <li><a href="#" className="link-hover-line" style={{ fontSize: "14px", color: "#595959" }}>Behance</a></li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: "32px" }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4" style={{ fontSize: "12px", color: "#595959" }}>
            <p>&copy; 2026 All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>001 265 847 483</span>
              <span style={{ color: "#d4d4d4" }}>|</span>
              <span>say_hi@compose.com</span>
            </div>
            <p>23 Artist Avenue, Suite 456, Imaginopolis, 98765, Wonderland</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
