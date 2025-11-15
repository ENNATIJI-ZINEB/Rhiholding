"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import PackageComparisonTable from "@/components/PackageComparisonTable";

const services = {
  "brand-strategy": {
    name: "Brand & Strategy",
    description:
      "Comprehensive brand development and strategic planning services to position your business for long-term success.",
    deliverables: [
      "Brand identity development",
      "Market positioning strategy",
      "Competitive analysis",
      "Brand guidelines and style guides",
      "Strategic planning workshops",
      "Brand architecture design",
    ],
  },
  "digital-marketing": {
    name: "Digital Marketing",
    description:
      "Data-driven digital marketing strategies that drive growth, engagement, and measurable results across all channels.",
    deliverables: [
      "SEO and content strategy",
      "Social media management",
      "Email marketing campaigns",
      "PPC and paid advertising",
      "Marketing automation",
      "Analytics and reporting",
    ],
  },
  "pr-community": {
    name: "PR & Community",
    description:
      "Build and maintain strong public relations and community engagement to enhance brand reputation and visibility.",
    deliverables: [
      "Press release writing",
      "Media relations management",
      "Community building strategies",
      "Event planning and management",
      "Crisis communication",
      "Influencer partnerships",
    ],
  },
  "customer-support": {
    name: "Customer Support Services",
    description:
      "Exceptional customer support solutions that enhance satisfaction and build lasting relationships.",
    deliverables: [
      "Support system design",
      "Customer service training",
      "Support channel optimization",
      "Customer feedback analysis",
      "Retention strategies",
      "Support metrics and KPIs",
    ],
  },
  "legal-admin": {
    name: "Legal & Administrative",
    description:
      "Comprehensive legal and administrative support to ensure compliance and operational efficiency.",
    deliverables: [
      "Contract review and drafting",
      "Compliance management",
      "Administrative process optimization",
      "Document management systems",
      "Regulatory guidance",
      "Risk assessment",
    ],
  },
  "tech-cybersecurity": {
    name: "Technology & Cybersecurity",
    description:
      "Robust technology solutions and cybersecurity measures to protect and empower your business.",
    deliverables: [
      "Technology infrastructure setup",
      "Cybersecurity audits",
      "Data protection strategies",
      "Cloud migration services",
      "IT support and maintenance",
      "Security training programs",
    ],
  },
  "psychological-support": {
    name: "Psychological Support",
    description:
      "Mental health and wellness support services for teams and leadership to foster resilience and productivity.",
    deliverables: [
      "Leadership coaching",
      "Team wellness programs",
      "Stress management workshops",
      "Work-life balance strategies",
      "Mental health resources",
      "Resilience training",
    ],
  },
};

const packageFeatures = [
  { name: "Brand Identity Development", launch: true, momentum: true, dominance: true, personalized: true },
  { name: "Digital Marketing Strategy", launch: true, momentum: true, dominance: true, personalized: true },
  { name: "SEO Optimization", launch: false, momentum: true, dominance: true, personalized: true },
  { name: "Social Media Management", launch: true, momentum: true, dominance: true, personalized: true },
  { name: "Content Creation", launch: true, momentum: true, dominance: true, personalized: true },
  { name: "Email Marketing", launch: false, momentum: true, dominance: true, personalized: true },
  { name: "PPC Advertising", launch: false, momentum: false, dominance: true, personalized: true },
  { name: "Marketing Automation", launch: false, momentum: false, dominance: true, personalized: true },
  { name: "Analytics & Reporting", launch: true, momentum: true, dominance: true, personalized: true },
  { name: "Dedicated Account Manager", launch: false, momentum: false, dominance: true, personalized: true },
  { name: "Custom Strategy Development", launch: false, momentum: false, dominance: false, personalized: true },
  { name: "Priority Support", launch: false, momentum: false, dominance: true, personalized: true },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof services>("brand-strategy");

  return (
    <div>
      {/* Services Tabs */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Services</SectionTitle>
          
          {/* Tab Navigation */}
          <div className="mb-8 overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
            <div className="flex space-x-2 min-w-max pb-2">
              {Object.entries(services).map(([key, service]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as keyof typeof services)}
                  className={`px-3 sm:px-4 py-2 rounded-lg font-medium whitespace-nowrap text-sm sm:text-base transition-all duration-200 ${
                    activeTab === key
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Content */}
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">
              {services[activeTab].name}
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              {services[activeTab].description}
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-heading font-semibold text-primary mb-4">
                Deliverables
              </h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {services[activeTab].deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button href="/contact" variant="primary">
              Request a tailored plan
            </Button>
          </div>
        </div>
      </section>

      {/* Digital Packages */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Digital Packages</SectionTitle>
          <div className="mb-8">
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Choose the package that best fits your business needs, or opt for
              a personalized solution tailored to your specific requirements.
            </p>
          </div>
          <PackageComparisonTable features={packageFeatures} />
        </div>
      </section>
    </div>
  );
}

