import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services – RHI Holding Privé",
  description:
    "Comprehensive services including brand strategy, digital marketing, PR, customer support, legal services, technology, and psychological support.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

