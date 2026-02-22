"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "../ScrollReveal";

const services = [
  {
    title: "Branding and Strategy",
    description: "Our Branding and Strategy services are designed to help you build a strong, cohesive brand identity and create effective strategies to connect with your target audience.",
    image: "/images/project-bright-horizons.jpg",
  },
  {
    title: "Analytics and Reporting",
    description: "Our Analytics and Reporting services help you make data-driven decisions by providing in-depth insights into your website's performance, user behavior, and overall business metrics.",
    image: "/images/project-tech-innovators.jpg",
  },
  {
    title: "Website Development",
    description: "Our Website Development services are designed to create fast, responsive, and user-friendly websites that are optimized for both performance and conversion.",
    image: "/images/project-eco.jpg",
  },
  {
    title: "Email Marketing",
    description: "Our Email Marketing services are crafted to help you nurture relationships with your audience, promote your products or services, and drive conversions.",
    image: "/images/project-fitlife.jpg",
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Our Pay-Per-Click (PPC) Advertising services are designed to drive immediate traffic to your website and increase conversions through targeted ad campaigns.",
    image: "/images/project-freshnest.jpg",
  },
  {
    title: "Content Marketing",
    description: "Our Content Marketing services are designed to create compelling content that resonates with your audience and drives long-term engagement.",
    image: "/images/project-luxefit.jpg",
  },
  {
    title: "Social Media Marketing",
    description: "Our Social Media Marketing services are designed to build brand awareness, foster engagement, and drive conversions across key platforms.",
    image: "/images/project-greenleaf.jpg",
  },
  {
    title: "Search Engine Optimization",
    description: "Our SEO service is crafted to improve your website's search engine rankings, increase organic traffic, and help your brand gain visibility in competitive online markets.",
    image: "/images/project-travelista.jpg",
  },
];

export default function ServicesGrid() {
  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "50px" }}>
        {/* Title Section */}
        <ScrollReveal>
          <div style={{ display: "flex", gap: "50px", justifyContent: "space-between", alignItems: "flex-start" }}>
            <h2 style={{ fontSize: "42px", fontWeight: 500, lineHeight: "50.4px", color: "#101010", maxWidth: "500px" }}>
              Tailored Digital Strategies for Growth and Impact
            </h2>
            <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "22.4px", color: "#595959", maxWidth: "500px" }}>
              At Compose, our services are crafted to amplify your brand, engage your audience, and drive measurable results. From impactful content to SEO that enhances visibility, we&apos;re here to elevate your digital presence.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <Link href="/services" style={{ display: "flex", flexDirection: "column", gap: "20px", textDecoration: "none", color: "inherit" }}>
                {/* Image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "460 / 307", borderRadius: "10px", overflow: "hidden" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover project-image-hover"
                  />
                </div>
                {/* Details */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <h3 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "28.8px", color: "#101010" }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "19.6px", color: "#595959" }}>
                    {service.description}
                  </p>
                </div>
                {/* More Details */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase" as const, color: "#101010" }}>
                    More Details
                  </span>
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="none">
                    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="#101010" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
