import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "RHI Holding Privé – Strategic Growth, Resilience & Digital Excellence",
    template: "%s – RHI Holding Privé",
  },
  description:
    "RHI Holding Privé is a private holding company focused on strategic growth, branding, digital excellence, and multi-brand management.",
  keywords: [
    "holding company",
    "strategic consulting",
    "brand management",
    "digital marketing",
    "multi-brand",
    "business growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
