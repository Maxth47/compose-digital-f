"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Quote() {
  return (
    <section style={{ position: "relative", padding: "112px 0", backgroundColor: "#101010", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.2 }}>
        <Image
          src="/images/quote-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div style={{ position: "relative", maxWidth: "1440px", margin: "0 auto", paddingLeft: "40px", paddingRight: "40px" }}>
        <ScrollReveal distance={20}>
          <div style={{ maxWidth: "750px" }}>
            <div className="flex gap-6">
              <div style={{ width: "3px", backgroundColor: "rgba(255,255,255,0.2)", flexShrink: 0, borderRadius: "100px" }}></div>
              <div>
                <p style={{ color: "white", fontSize: "26px", lineHeight: 1.6, fontWeight: 300, marginBottom: "32px" }}>
                  &ldquo;Compose was born from a desire to help brands unlock their full potential in
                  the digital world. I believe that every business has a story worth sharing, and our
                  mission is to bring that story to life with creativity, strategy, and impact. Success,
                  to us, isn&apos;t just about metrics—it&apos;s about building connections and helping
                  our clients grow in ways they never thought possible.&rdquo;
                </p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
                  — DAVIDE GOTLIEB, FOUNDER OF COMPOSE
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
