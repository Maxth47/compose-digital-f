"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

export default function WhoWeAre() {
  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <ScrollReveal>
          <div style={{ display: "flex", gap: "30px", alignItems: "flex-start" }}>
            {/* Left side - Images */}
            <div style={{ display: "flex", flexDirection: "column", gap: "30px", flex: "0 0 auto", width: "66%" }}>
              <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010", marginBottom: "10px" }}>
                Who We Are?
              </p>
              <div style={{ display: "flex", gap: "30px" }}>
                <div style={{ position: "relative", flex: 1, aspectRatio: "460 / 340", borderRadius: "10px", overflow: "hidden" }}>
                  <Image src="/images/about-office.jpg" alt="Our office" fill className="object-cover" />
                </div>
                <div style={{ position: "relative", flex: 1, aspectRatio: "460 / 340", borderRadius: "10px", overflow: "hidden" }}>
                  <Image src="/images/about-colors.jpg" alt="Our work" fill className="object-cover" />
                </div>
              </div>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959", maxWidth: "500px" }}>
                Whether you&apos;re a seasoned player in the digital landscape or just stepping into it, we have the expertise and strategies to propel your brand. At Compose, we are passionate about empowering brands to thrive in the digital realm.
              </p>
            </div>

            {/* Right side - Text */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "20px", paddingTop: "40px" }}>
              <h3 style={{ fontSize: "32px", fontWeight: 500, lineHeight: "38.4px", color: "#101010" }}>
                We&apos;re a dynamic digital marketing agency committed to making your business thrive.
              </h3>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959" }}>
                Founded on the principles of creativity and innovation, we understand that every business has a unique story to tell.
              </p>
              <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959" }}>
                Our mission is to craft compelling narratives and strategies that resonate with your audience and elevate your brand.
              </p>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
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
                  }}
                >
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="#101010" />
                  </svg>
                </Link>
                <Link
                  href="/projects"
                  className="btn-hover-scale"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    border: "1px solid #101010",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.39px",
                    textTransform: "uppercase" as const,
                    color: "#101010",
                    textDecoration: "none",
                    backgroundColor: "transparent",
                  }}
                >
                  Our Projects
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
