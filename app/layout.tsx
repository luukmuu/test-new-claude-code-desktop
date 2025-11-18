import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stray Dog - Modern Web Directory",
  description: "Your modern web directory built with Next.js, React, and Tailwind CSS. Discover, explore, and connect with amazing resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
