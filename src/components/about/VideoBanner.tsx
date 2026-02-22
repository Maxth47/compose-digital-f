"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

export default function VideoBanner() {
  return (
    <section style={{ padding: "0 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5", marginBottom: "80px" }} />
      </div>
      <ScrollReveal>
        <div style={{ maxWidth: "1440px", margin: "0 auto", position: "relative", height: "480px", borderRadius: "10px", overflow: "hidden" }}>
          <Image src="/images/video-banner.jpg" alt="Video banner" fill className="object-cover" style={{ zIndex: 0 }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(16,16,16,0.4)", zIndex: 1 }} />
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", gap: "30px" }}>
            {/* Play button */}
            <div style={{ width: "80px", height: "80px", borderRadius: "50%", border: "2px solid rgba(252,252,252,0.5)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <svg width="24" height="24" viewBox="0 0 256 256" fill="none">
                <path d="M232.4,114.49,88.32,26.35a16,16,0,0,0-16.2-.3A15.86,15.86,0,0,0,64,40.74V215.26a15.94,15.94,0,0,0,8.12,13.88,16,16,0,0,0,16.2-.3L232.4,141.51a15.81,15.81,0,0,0,0-27ZM80,215.26V40.74L224,128Z" fill="#fcfcfc" />
              </svg>
            </div>
            <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: "25.2px", color: "#fcfcfc", textAlign: "center", maxWidth: "600px" }}>
              Discover how Compose transforms brands through innovative digital strategies and captivating storytelling.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
