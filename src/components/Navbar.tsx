"use client";

import Image from "next/image";
import Link from "next/link";

function NavFlipLink({ href, children, active = false }: { href: string; children: string; active?: boolean }) {
  return (
    <Link
      href={href}
      className="nav-flip-container"
      style={{
        padding: "8px 20px",
        backgroundColor: active ? "#c8f31d" : "transparent",
        color: "#101010",
        borderRadius: "100px",
        fontSize: "12px",
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase" as const,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <span className="nav-flip-text">{children}</span>
      <span className="nav-flip-text-clone">{children}</span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full animate-fade-in" style={{ padding: "24px 40px" }}>
      <nav
        className="flex items-center justify-between"
        style={{ maxWidth: "1440px", margin: "0 auto", backgroundColor: "#f5f5f5", borderRadius: "100px", padding: "12px 24px", height: "64px" }}
      >
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/images/logo.svg" alt="Compose Digital" width={127} height={40} />
        </Link>

        <div
          className="hidden md:flex items-center"
          style={{ backgroundColor: "#d9d9d9", borderRadius: "100px", padding: "6px", gap: "4px" }}
        >
          <NavFlipLink href="/" active>HOME</NavFlipLink>
          <NavFlipLink href="/services">SERVICES</NavFlipLink>
          <NavFlipLink href="/projects">PROJECTS</NavFlipLink>
          <NavFlipLink href="/about">ABOUT</NavFlipLink>
          <NavFlipLink href="/blog">BLOG</NavFlipLink>
        </div>

        <div className="flex items-center" style={{ gap: "12px" }}>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center btn-hover-scale"
            style={{ padding: "10px 24px", fontSize: "12px", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, borderRadius: "100px", border: "1.5px solid #c4c4c4" }}
          >
            CONTACT US
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center btn-hover-scale"
            style={{ width: "40px", height: "40px", borderRadius: "100%", backgroundColor: "#c8f31d" }}
          >
            <svg className="arrow-btn-hover" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 13L13 1M13 1H3M13 1V11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
