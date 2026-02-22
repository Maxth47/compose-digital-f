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

  const rowStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    overflow: "hidden",
    maskImage:
      "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
    WebkitMaskImage:
      "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
  };

  const itemStyle = (isLight: boolean): React.CSSProperties => ({
    fontSize: "54px",
    fontWeight: 500,
    lineHeight: "64.8px",
    letterSpacing: "-0.54px",
    color: isLight ? "#fcfcfc" : "#101010",
    WebkitTextStroke: isLight ? "0px" : "0.5px #fcfcfc",
    WebkitTextFillColor: isLight ? "#fcfcfc" : "#101010",
    flexShrink: 0,
    whiteSpace: "nowrap",
  });

  // Repeat items enough to fill width seamlessly
  const row1Items = [
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
    ...servicesRow1,
  ];
  const row2Items = [
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
    ...servicesRow2,
  ];

  return (
    <ScrollReveal distance={0} duration={0.5}>
      <section
        style={{
          backgroundColor: "#101010",
          padding: "100px 40px",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Row 1 */}
          <div style={rowStyle}>
            <div
              className="animate-marquee"
              style={{ display: "flex", gap: "30px", whiteSpace: "nowrap" }}
            >
              {row1Items.map((service, i) => (
                <span key={i} style={itemStyle(i % 2 === 0)}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div style={rowStyle}>
            <div
              className="animate-marquee-slow"
              style={{
                display: "flex",
                gap: "30px",
                whiteSpace: "nowrap",
                animationDirection: "reverse",
              }}
            >
              {row2Items.map((service, i) => (
                <span key={i} style={itemStyle(i % 2 === 0)}>
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
