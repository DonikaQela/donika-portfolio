import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Donika Qela | Senior Frontend Engineer",
  description:
    "Portfolio of Donika Qela, Senior Frontend Engineer specialized in React, TypeScript, and Next.js.",
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
