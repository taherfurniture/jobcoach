import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Coach (working title)",
  description: "AI career coach for the UAE and GCC — profile, coach, job discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
