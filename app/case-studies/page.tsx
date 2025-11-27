import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import ScrollAnimation from "@/components/ScrollAnimation";
import CompanyLogo from "@/components/CompanyLogo";

export const metadata: Metadata = {
  title: "Case Studies – RHI Holding Privé",
  description:
    "A showcase of the brands we empower and the digital experiences we craft. Explore our work with Mnnina and ARCHIKMOR.",
};

const caseStudies = [
  {
    id: "mnnina",
    title: "Mnnina – Luxury E-commerce Experience",
    industry: "Luxury Goods, Jewelry & Perfumes",
    description:
      "A premium E-commerce platform designed to showcase handcrafted jewelry and perfumes with elegance and sophistication.",
    href: "/case-studies/mnnina",
    logo: "/assets/mnnina-logo.png",
  },
  {
    id: "archikmor",
    title: "ARCHIKMOR – Interior Design & Wood Craft Studio",
    industry: "Interior Design, Custom Furniture, Wood Craft",
    description:
      "A refined digital identity and portfolio presence highlighting custom craftsmanship, interior design services, and bespoke wood creations.",
    href: "/case-studies/archikmor",
    logo: "/assets/archikmor-logo.png",
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>
            Case Studies
            <span className="block text-2xl md:text-3xl mt-4 text-gray-600 font-normal">
              A showcase of the brands we empower and the digital experiences we
              craft.
            </span>
          </SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              At RHI Holding Privé, we partner with ambitious brands to elevate
              their identity, strengthen their digital presence, and build systems
              that allow them to grow with confidence. From luxury E-commerce
              platforms to interior-design craft studios, our work reflects a
              commitment to excellence, innovation, and detail.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <ScrollAnimation key={study.id} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Company Logo */}
                  <div className="w-full h-64 bg-white relative overflow-hidden">
                    <CompanyLogo
                      src={study.logo}
                      alt={`${study.title} logo`}
                      fallbackLetter={study.id === "mnnina" ? "M" : "A"}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <span className="text-sm text-accent font-medium uppercase tracking-wide">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-grow">
                      {study.description}
                    </p>
                    <Button href={study.href} variant="primary" className="w-full">
                      View Case Study
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Let's Build Your Next Success Story
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Whether you're launching a digital brand, growing an established
              business, or creating a luxury experience, RHI Holding Privé is
              your end-to-end partner.
            </p>
            <Button href="/contact" variant="secondary">
              Start Your Project
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}

