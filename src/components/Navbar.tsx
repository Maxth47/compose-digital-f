"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavFlipLink({ href, children, active = false }: { href: string; children: string; active?: boolean }) {
  return (
    <Link
      href={href}
      style={{
        padding: "6px 12px",
        backgroundColor: active ? "#b3ff00" : "transparent",
        color: "#101010",
        borderRadius: "50px",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.39px",
        textTransform: "uppercase" as const,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
      }}
    >
      <span className="nav-flip-wrap">
        <span className="nav-flip-text">{children}</span>
        <span className="nav-flip-text-clone">{children}</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header
      className="sticky top-0 z-50 w-full animate-fade-in"
      style={{ padding: "24px 40px", backgroundColor: "#fcfcfc" }}
    >
      <nav
        className="flex items-center justify-between"
        style={{ maxWidth: "1440px", margin: "0 auto", backgroundColor: "#f5f5f5", borderRadius: "100px", padding: "12px 24px", height: "64px" }}
      >
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image src="/images/logo.svg" alt="Compose Digital" width={127} height={40} />
        </Link>

        <nav
          className="hidden md:flex items-center"
          style={{ backgroundColor: "#d9d9d9", borderRadius: "100px", padding: "6px", gap: "10px", height: "40px" }}
        >
          <NavFlipLink href="/" active={pathname === "/"}>Home</NavFlipLink>
          <NavFlipLink href="/services" active={pathname === "/services"}>Services</NavFlipLink>
          <NavFlipLink href="/projects" active={pathname === "/projects"}>Projects</NavFlipLink>
          <NavFlipLink href="/about" active={pathname === "/about"}>About</NavFlipLink>
          <NavFlipLink href="/blog" active={pathname === "/blog"}>Blog</NavFlipLink>
        </nav>

        <div className="flex items-center" style={{ gap: "10px" }}>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center btn-hover-scale"
            style={{
              padding: "10px 18px",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.39px",
              textTransform: "uppercase" as const,
              borderRadius: "50px",
              border: "1px solid #101010",
              height: "40px",
              textDecoration: "none",
              color: "#101010",
            }}
          >
            <span className="nav-flip-wrap">
              <span className="nav-flip-text">Contact Us</span>
              <span className="nav-flip-text-clone">Contact Us</span>
            </span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center btn-hover-scale"
            style={{ width: "40px", height: "40px", borderRadius: "50px", backgroundColor: "#b3ff00", border: "1px solid #b3ff00" }}
          >
            <svg width="18" height="18" viewBox="0 0 256 256" fill="none">
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="#101010" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
