import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Profile Project",
  description: "CGT390 Lab 15 profile directory",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            backgroundColor: "#111",
            padding: "1rem 2rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>

          <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
            About
          </Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
