import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import ScrollAnimation from "@/components/ScrollAnimation";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "ARCHIKMOR Case Study – RHI Holding Privé",
  description:
    "A refined digital identity and portfolio presence highlighting custom craftsmanship, interior design services, and bespoke wood creations.",
};

const services = [
  {
    title: "Brand & Strategy",
    description:
      "Refined ARCHIKMOR's positioning and messaging to emphasize craftsmanship, harmony, and custom solutions.",
  },
  {
    title: "Website & Digital Presence",
    description:
      "Structured and designed the website to clearly present services, portfolio, and contact options in a professional, intuitive way.",
  },
  {
    title: "Digital Marketing Foundations",
    description:
      "Prepared content and structure suitable for SEO and future campaigns, and supported clear communication of services.",
  },
  {
    title: "Portfolio & Catalog Presentation",
    description:
      "Organized visual content and categories (living rooms, bedrooms, kitchens, offices, paneling) to showcase the breadth of their work.",
  },
  {
    title: "Legal & Administrative Support",
    description:
      "Assisted with the necessary website legal structure (terms, privacy, service information, etc.) to build trust and legitimacy.",
  },
  {
    title: "Customer Support & Lead Handling",
    description:
      "Helped define how client inquiries are captured and how the team can respond and manage potential projects.",
  },
];

export default function ArchikmorCaseStudyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
                ARCHIKMOR – Interior Design & Wood Craft Studio
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Interior Design · Custom Furniture · Wood Craft
              </p>
              <p className="text-sm text-gray-500">
                Website:{" "}
                <a
                  href="https://www.archikmor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  www.archikmor.com
                </a>
              </p>
            </div>
          </ScrollAnimation>

          {/* Hero Image */}
          <ScrollAnimation delay={100}>
            <div className="w-full h-96 rounded-xl overflow-hidden mb-12 relative">
              <Image
                src="/assets/archikmor-website.png"
                alt="ARCHIKMOR website screenshot"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Project Overview</SectionTitle>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                ARCHIKMOR is a design- and craft-oriented company offering interior
                design, custom furniture, wood-craft & panels, and space-planning
                services. The project focused on building a polished online presence
                that reflects their craftsmanship, highlights their portfolio, and
                makes it easy for clients to understand and request their services.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Objectives</SectionTitle>
          </ScrollAnimation>
          <ul className="space-y-4 text-gray-700">
            <ScrollAnimation delay={100}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Present ARCHIKMOR as a premium provider of interior design and
                  custom wood furniture.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Showcase their services and portfolio (living rooms, bedrooms,
                  kitchens, doors, offices, wood paneling, etc.) in a clear and
                  attractive way.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Make it easy for potential clients to understand the value they
                  offer and reach out with project inquiries.
                </span>
              </li>
            </ScrollAnimation>
          </ul>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Target Audience</SectionTitle>
          </ScrollAnimation>
          <ul className="space-y-4 text-gray-700">
            <ScrollAnimation delay={100}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Homeowners and property owners seeking bespoke interiors and
                  custom wood furniture.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Clients who value craftsmanship, custom design, and quality
                  materials.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Businesses or professionals looking to design or redesign office
                  and workspace interiors.
                </span>
              </li>
            </ScrollAnimation>
          </ul>
        </div>
      </section>

      {/* Services Provided */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Services Provided by RHI Holding Privé</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {services.map((service, index) => (
                <ScrollAnimation key={index} delay={index * 50}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                  />
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Impact / Value Delivered */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Impact / Value Delivered</SectionTitle>
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p>
                RHI Holding Privé helped ARCHIKMOR translate its craftsmanship and
                interior design expertise into a professional, credible digital
                presence. The new structure makes it easier for potential clients
                to discover their services, view their work, and reach out for
                bespoke projects, reinforcing ARCHIKMOR's position as a trusted
                partner in premium interior design and custom furniture.
              </p>
            </div>
            <div className="text-center">
              <Button href="/contact" variant="primary">
                Start Your Project With Us
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

