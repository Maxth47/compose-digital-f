"use client";

import ScrollReveal from "./ScrollReveal";

export default function Marquee() {
  const servicesRow1 = [
    "Branding and Strategy",
    "Analytics and Reporting",
    "Website Development",
    "Email Marketing",
  ];

  const servicesRow2 = [
    "Pay-Per-Click Advertising",
    "Content Marketing",
    "Social Media Marketing",
    "Search Engine Optimization",
  ];

  return (
    <ScrollReveal distance={0} duration={0.5}>
      <section className="py-14 bg-[#101010] overflow-hidden">
        {/* Row 1 */}
        <div className="overflow-hidden mb-2">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...servicesRow1, ...servicesRow1, ...servicesRow1, ...servicesRow1].map((service, i) => (
              <span
                key={i}
                className={`text-4xl md:text-5xl lg:text-[56px] font-semibold mx-8 ${
                  i % 2 === 0 ? "text-white/20" : "text-white"
                }`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee-slow whitespace-nowrap" style={{ animationDirection: "reverse" }}>
            {[...servicesRow2, ...servicesRow2, ...servicesRow2, ...servicesRow2].map((service, i) => (
              <span
                key={i}
                className={`text-4xl md:text-5xl lg:text-[56px] font-semibold mx-8 ${
                  i % 2 === 0 ? "text-white/20" : "text-white"
                }`}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
