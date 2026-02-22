"use client";

import Image from "next/image";

const projects = [
  { name: "EcoSolutions", category: "CONTENT MARKETING", image: "/images/project-eco.jpg" },
  { name: "Travelista", category: "CONTENT MARKETING", image: "/images/project-travelista.jpg" },
  { name: "FitLife Studios", category: "SOCIAL MEDIA MARKETING", image: "/images/project-fitlife.jpg" },
  { name: "FreshNest", category: "SOCIAL MEDIA MARKETING", image: "/images/project-freshnest.jpg" },
];

export default function Hero() {
  return (
    <section style={{ paddingTop: "80px", paddingBottom: "100px" }}>
      {/* Main hero content - constrained */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingLeft: "40px", paddingRight: "40px" }}>
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div className="flex-1 animate-fade-in-up" style={{ maxWidth: "750px" }}>
            <h1 style={{ fontSize: "72px", fontWeight: 500, lineHeight: "1.2", letterSpacing: "-2.88px", color: "#101010" }}>
              The Digital Marketing
              <br />
              Agency For Higher ROI
            </h1>

            <div className="flex items-center gap-4 animate-fade-in-up-delay-2" style={{ marginTop: "32px" }}>
              <div className="flex flex-col items-start">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map((i) => (
                    <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#101010">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="halfStar">
                        <stop offset="80%" stopColor="#101010" />
                        <stop offset="80%" stopColor="#d4d4d4" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="url(#halfStar)" />
                  </svg>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span style={{ fontSize: "36px", fontWeight: 600, letterSpacing: "-0.5px" }}>4.9</span>
                  <span style={{ fontSize: "14px", color: "#595959" }}>/5.0</span>
                </div>
              </div>

              <div style={{ width: "1px", height: "56px", backgroundColor: "#d4d4d4", margin: "0 12px" }}></div>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-11 h-11 rounded-full overflow-hidden"
                      style={{ border: "2.5px solid white", backgroundColor: "#d4d4d4" }}
                    >
                      <Image
                        src={`/images/project-${["eco", "travelista", "fitlife", "freshnest"][i - 1]}.jpg`}
                        alt="User"
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ border: "2.5px solid white", backgroundColor: "#c8f31d", fontSize: "16px", fontWeight: 700 }}
                  >
                    +
                  </div>
                </div>
                <span style={{ fontSize: "14px", color: "#595959" }}>Trusted by 500+ Brands Globally</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end lg:text-right animate-fade-in-up-delay-3" style={{ maxWidth: "300px" }}>
            <p style={{ color: "#595959", fontSize: "18px", lineHeight: "1.4", marginBottom: "24px" }}>
              Choose success with our digital marketing agency, dedicated to delivering higher ROI that
              propels your business to new heights.
            </p>
            <div className="flex items-center gap-6 lg:justify-end">
              <a href="/contact" className="flex items-center gap-2 link-hover-line" style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                BOOK A CALL
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="/services" className="flex items-center gap-2 link-hover-line" style={{ fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" as const }}>
                OUR SERVICES
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="animate-fade-in-up-delay-4" style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5", marginBottom: "80px" }}></div>
      </div>

      {/* Scrolling project cards - FULL WIDTH */}
      <div className="animate-fade-in-up-delay-5" style={{ overflow: "hidden" }}>
        <div className="flex animate-marquee-projects" style={{ gap: "20px" }}>
          {[...projects, ...projects, ...projects, ...projects, ...projects, ...projects].map((project, i) => (
            <div key={i} style={{ flexShrink: 0, width: "340px" }}>
              <div style={{ position: "relative", width: "100%", height: "280px", borderRadius: "16px", overflow: "hidden", marginBottom: "16px" }}>
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image-hover"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="flex items-center justify-between">
                <span style={{ fontWeight: 500, fontSize: "18px" }}>{project.name}</span>
                <span style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#595959", textTransform: "uppercase" as const }}>
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
