"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function WhoAreWe() {
  return (
    <section style={{ padding: "96px 0", maxWidth: "1440px", margin: "0 auto", paddingLeft: "40px", paddingRight: "40px" }}>
      <ScrollReveal>
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#101010", marginBottom: "20px" }}>
            WHO ARE WE?
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row gap-12 mb-12">
        <ScrollReveal delay={0.1} className="flex-1">
          <h2 style={{ fontSize: "32px", fontWeight: 500, lineHeight: 1.2 }}>
            We&apos;re a dynamic digital marketing agency committed to making your business thrive.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="flex-1 flex items-start pt-2">
          <p style={{ color: "#595959", fontSize: "16px", lineHeight: 1.4 }}>
            Whether you&apos;re a seasoned player in the digital landscape or just stepping into it,
            we have the expertise and strategies to propel your brand. At Compose, we are passionate
            about empowering brands to thrive in the digital realm.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div style={{ position: "relative", height: "420px", borderRadius: "16px", overflow: "hidden" }}>
            <Image
              src="/images/about-office.jpg"
              alt="Office meeting"
              fill
              className="object-cover project-image-hover"
            />
          </div>
          <div>
            <div style={{ position: "relative", height: "260px", borderRadius: "16px", overflow: "hidden", marginBottom: "24px" }}>
              <Image
                src="/images/about-colors.jpg"
                alt="Color swatches"
                fill
                className="object-cover project-image-hover"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <p style={{ color: "#595959", fontSize: "16px", lineHeight: 1.4 }}>
                Founded on the principles of creativity and innovation, we understand that every
                business has a unique story to tell.
              </p>
              <p style={{ color: "#595959", fontSize: "16px", lineHeight: 1.4 }}>
                Our mission is to craft compelling narratives and strategies that resonate with your
                audience and elevate your brand.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="flex items-center gap-4" style={{ marginTop: "32px" }}>
          <a
            href="/about"
            className="inline-flex items-center gap-2 btn-hover-scale"
            style={{ padding: "12px 24px", backgroundColor: "#c8f31d", borderRadius: "100px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const }}
          >
            MORE ABOUT US
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/projects"
            className="inline-flex btn-hover-scale"
            style={{ padding: "12px 24px", border: "1px solid #d4d4d4", borderRadius: "100px", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const }}
          >
            OUR PROJECTS
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
