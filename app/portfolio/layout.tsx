import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio – RHI Holding Privé",
  description:
    "Explore our portfolio of successful case studies, growth metrics, and client transformations across diverse industries.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

