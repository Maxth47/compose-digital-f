"use client";

const logos = ["Automation", "Penta", "Chain", "Sitemark", "Glossy", "Leafe"];

export default function ClientLogos() {
  const items = [...logos, ...logos, ...logos, ...logos];

  return (
    <section style={{ padding: "40px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", paddingBottom: "40px", paddingLeft: "40px", paddingRight: "40px" }}>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#e5e5e5" }} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "60px",
          alignItems: "center",
          whiteSpace: "nowrap",
        }}
        className="animate-marquee"
      >
        {items.map((name, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
            <svg width="24" height="24" viewBox="0 0 256 256" fill="none">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" fill="#595959" />
            </svg>
            <span style={{ fontSize: "20px", fontWeight: 500, color: "#595959" }}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
