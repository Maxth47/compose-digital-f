"use client";

import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const posts = [
  {
    date: "Jun 25, 2024",
    title: "The Role of Prototyping in Product Design",
    excerpt: "This iterative process is crucial for addressing potential issues, validating design choices, and",
    image: "/images/blog-prototyping.jpg",
  },
  {
    date: "Jun 24, 2024",
    title: "Designing for User Experience: Key Considerations",
    excerpt: "Methods such as user interviews, surveys, and persona development help in gaining insights into user",
    image: "/images/blog-ux.jpg",
  },
  {
    date: "Jun 23, 2024",
    title: "The Future of Product Design: Trends to Watch in 2024",
    excerpt: "Designers are increasingly focusing on creating products with minimal environmental impact by using",
    image: "/images/blog-future.jpg",
  },
  {
    date: "Jun 22, 2024",
    title: "10 Essential Web Design Principles for 2024",
    excerpt: "Start by conducting thorough user research to understand what your audience values and how they",
    image: "/images/blog-webdesign.jpg",
  },
  {
    date: "Jun 21, 2024",
    title: "Responsive Web Design: Best Practices and Tips",
    excerpt: "With the proliferation of smartphones, tablets, and other mobile devices, responsive design ensures",
    image: "/images/blog-responsive.jpg",
  },
];

export default function BlogGrid() {
  return (
    <section style={{ padding: "0 40px 100px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
          {posts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <a
                href="#"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Image */}
                <div style={{ position: "relative", width: "100%", aspectRatio: "460 / 547", borderRadius: "10px", overflow: "hidden" }}>
                  <Image src={post.image} alt={post.title} fill className="object-cover project-image-hover" />
                </div>

                {/* Text content */}
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", overflow: "hidden" }}>
                  <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "19.6px", color: "#595959", textTransform: "uppercase" as const }}>
                    {post.date}
                  </p>
                  <h5 style={{ fontSize: "24px", fontWeight: 500, lineHeight: "28.8px", color: "#101010", margin: 0 }}>
                    {post.title}
                  </h5>
                  <p style={{ fontSize: "14px", fontWeight: 400, lineHeight: "19.6px", color: "#595959" }}>
                    {post.excerpt}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Load More Button */}
        <ScrollReveal delay={0.2}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "60px" }}>
            <button
              className="btn-hover-scale"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                backgroundColor: "#222222",
                borderRadius: "200px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.39px",
                textTransform: "uppercase" as const,
                color: "#fcfcfc",
                border: "none",
                cursor: "pointer",
              }}
            >
              Load More
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
