import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import ScrollAnimation from "@/components/ScrollAnimation";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Mnnina Case Study – RHI Holding Privé",
  description:
    "A premium E-commerce platform designed to showcase handcrafted jewelry and perfumes with elegance and sophistication.",
};

const services = [
  {
    title: "Brand & Strategy",
    description:
      "Developed Mnnina's brand positioning, messaging, and visual direction to communicate luxury, authenticity, and craftsmanship.",
  },
  {
    title: "Digital Marketing & Growth",
    description:
      "SEO, content structure, and digital marketing strategy to help drive qualified traffic and support brand awareness.",
  },
  {
    title: "E-commerce Experience & UX",
    description:
      "Structured the product catalog, navigation, and user flows to make the shopping journey smooth and conversion-focused.",
  },
  {
    title: "Technology & Cybersecurity",
    description:
      "Ensured secure, stable, and scalable infrastructure (secure payments, SSL, performance best practices).",
  },
  {
    title: "Legal & Administrative Support",
    description:
      "Supported the setup of privacy policy, terms, and other legal elements typical for an E-commerce platform.",
  },
  {
    title: "Customer Support Structure",
    description:
      "Defined or supported customer-service flows for handling inquiries, orders, and post-purchase support.",
  },
];

export default function MnninaCaseStudyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
                Mnnina – Luxury E-commerce Experience
              </h1>
              <p className="text-xl text-gray-600 mb-2">
                Luxury Goods · Jewelry & Perfumes
              </p>
              <p className="text-sm text-gray-500">
                Website:{" "}
                <a
                  href="https://www.mnnina.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  www.mnnina.com
                </a>
              </p>
            </div>
          </ScrollAnimation>

          {/* Hero Image */}
          <ScrollAnimation delay={100}>
            <div className="w-full h-96 rounded-xl overflow-hidden mb-12 relative">
              <Image
                src="/assets/mnnina-website.png"
                alt="Mnnina website screenshot"
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
                Mnnina is an E-commerce platform specializing in luxury and artisan
                products — notably fine jewelry, perfumes, handbags, and other
                exclusive items. The core goal was to build a strong online
                storefront that reflects the brand's craftsmanship, exclusivity,
                and aesthetic values, while delivering a smooth and trustworthy
                shopping experience.
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
                  Build a premium online store that showcases Mnnina's collections
                  in an elegant, visually compelling way.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Create a user-friendly shopping journey with intuitive
                  navigation, clear product information, and secure checkout.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Develop a brand identity that communicates authenticity,
                  artisanal heritage, and premium quality.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={400}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Support marketing and growth by reaching the right audiences
                  and building a loyal customer base online.
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
                  Customers looking for high-quality luxury goods: fine jewelry,
                  perfumes, and curated accessories.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Shoppers who value craftsmanship, exclusivity, and curated style
                  over mass-market products.
                </span>
              </li>
            </ScrollAnimation>
            <ScrollAnimation delay={300}>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <span>
                  Online buyers comfortable purchasing premium products through
                  E-commerce.
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
                By combining brand strategy, E-commerce experience design, and
                robust technology, RHI Holding Privé helped Mnnina launch as a
                credible luxury brand online. The project positioned Mnnina to
                attract high-intent customers, build trust, and scale its
                presence in the luxury goods market.
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

