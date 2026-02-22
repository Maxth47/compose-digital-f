"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const posts = [
  {
    date: "Jun 25, 2024",
    title: "The Role of Prototyping in Product Design",
    excerpt:
      "This iterative process is crucial for addressing potential issues, validating design choices, and",
    image: "/images/blog-prototyping.jpg",
  },
  {
    date: "Jun 24, 2024",
    title: "Designing for User Experience: Key Considerations",
    excerpt:
      "Methods such as user interviews, surveys, and persona development help in gaining insights into user",
    image: "/images/blog-ux.jpg",
  },
  {
    date: "Jun 23, 2024",
    title: "The Future of Product Design: Trends to Watch in 2024",
    excerpt:
      "Designers are increasingly focusing on creating products with minimal environmental impact by using",
    image: "/images/blog-future.jpg",
  },
];

export default function Blog() {
  return (
    <section style={{ padding: "100px 40px", maxWidth: "1440px", margin: "0 auto" }}>
      <ScrollReveal>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "50px" }}>
          <p style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.39px", textTransform: "uppercase", color: "#101010" }}>
            Latest Blog
          </p>
          <h2 style={{ fontSize: "42px", fontWeight: 500, lineHeight: "50.4px" }}>
            Stay up to Date with the Latest News
          </h2>
        </div>
      </ScrollReveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
        {posts.map((post, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <a href="/blog" className="group" style={{ display: "flex", flexDirection: "column", gap: "20px", textDecoration: "none", color: "inherit" }}>
              <div style={{ position: "relative", aspectRatio: "0.84 / 1", borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover project-image-hover"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "#595959", textTransform: "uppercase", letterSpacing: "0.39px" }}>
                  {post.date}
                </p>
                <h3 className="group-hover:opacity-70 transition-opacity" style={{ fontSize: "24px", fontWeight: 500, lineHeight: "28.8px" }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#595959", lineHeight: "19.6px" }}>
                  {post.excerpt}
                </p>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
