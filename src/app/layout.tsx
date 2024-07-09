import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "linearicons";
import "./main.css";

// const inter = Inter({ subsets: ["latin"] });

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wear4U",
  description: "E-commerce shopping web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
