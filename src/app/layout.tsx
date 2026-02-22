import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compose - Digital Marketing Agency",
  description:
    "Choose success with our digital marketing agency, dedicated to delivering higher ROI that propels your business to new heights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
