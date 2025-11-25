"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ScrollAnimation from "@/components/ScrollAnimation";
import StatsSection from "@/components/StatsSection";

export default function HomePage() {
  const [activePackage, setActivePackage] = useState("launch");

  const servicePillars = [
    {
      title: "Brand & Strategy",
      description:
        "Comprehensive brand development and strategic planning to position your business for long-term success.",
    },
    {
      title: "Digital Growth & Marketing",
      description:
        "Data-driven digital marketing strategies that drive growth, engagement, and measurable results.",
    },
    {
      title: "Operational Support",
      description:
        "Streamlined operations and process optimization to enhance efficiency and scalability.",
    },
    {
      title: "Cybersecurity & Technology",
      description:
        "Robust technology solutions and cybersecurity measures to protect and empower your business.",
    },
  ];

  const valuePropositions = [
    {
      title: "Resilience",
      description: "Built to withstand challenges and adapt to market changes.",
    },
    {
      title: "Clarity",
      description: "Clear strategies and transparent communication at every step.",
    },
    {
      title: "Efficiency",
      description: "Streamlined processes that maximize productivity and results.",
    },
    {
      title: "Research-Driven",
      description: "Data-backed decisions and insights-driven strategies.",
    },
    {
      title: "Multi-Brand Expertise",
      description: "Proven experience managing diverse brand portfolios.",
    },
    {
      title: "Digital Excellence",
      description: "Cutting-edge digital solutions and marketing expertise.",
    },
  ];

  const industries = [
    "Technology",
    "E-commerce",
    "Consulting",
    "Financial Services",
    "Healthcare",
    "Education",
  ];

  const packages = {
    launch: {
      name: "Launch",
      description:
        "Perfect for startups and new ventures looking to establish a strong foundation.",
      targetAudience: "Startups and new businesses",
      features: [
        "Brand identity development",
        "Basic digital presence",
        "Strategic planning session",
        "3-month support",
        "Marketing roadmap",
        "Initial market research",
      ],
    },
    momentum: {
      name: "Momentum",
      description:
        "Designed for growing businesses ready to scale and accelerate growth.",
      targetAudience: "Growing businesses",
      features: [
        "Advanced brand strategy",
        "Comprehensive digital marketing",
        "Operational optimization",
        "6-month support",
        "Performance analytics",
        "Growth acceleration plan",
      ],
    },
    dominance: {
      name: "Dominance",
      description:
        "For established companies aiming to dominate their market and expand.",
      targetAudience: "Established companies",
      features: [
        "Full brand ecosystem",
        "Multi-channel marketing",
        "Technology integration",
        "12-month support",
        "Market leadership strategy",
        "Dedicated account manager",
      ],
    },
  };

  const testimonials = [
    {
      quote:
        "RHI Holding Privé transformed our brand strategy and digital presence. Their expertise in multi-brand management is unmatched.",
      author: "O.S",
      role: "Founder",
      company: "Archikmor",
    },
    {
      quote:
        "Working with RHI has been a game-changer. Their research-driven approach helped us achieve 300% growth in just one year.",
      author: "C.U",
      role: "Manager",
      company: "Northbridge So",
    },
    {
      quote:
        "The team's resilience and clarity in communication made our partnership seamless. Highly recommend their services.",
      author: "N.A",
      role: "CEO",
      company: "Mnnina",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation className="order-2 md:order-1">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Strategic growth, resilience & digital excellence.
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  RHI Holding Privé is a private holding company focused on
                  strategic growth, branding, digital excellence, and multi-brand
                  management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="#contact" variant="secondary">
                    Book a consultation
                  </Button>
                  <Button href="#" variant="secondary">
                    Download company brochure
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} className="order-1 md:order-2">
                <div className="rounded-2xl p-4 md:p-8">
                  <div className="aspect-square rounded-xl flex items-center justify-center p-4 md:p-6">
                    <Image
                      src="/assets/logo2.png"
                      alt="RHI Holding Privé icon"
                      width={1000}
                      height={1000}
                      className="object-contain drop-shadow-lg animate-pulse w-full max-w-xs md:max-w-none"
                      priority
                    />
                  </div>
                </div>
              </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              RHI Holding Privé stands at the intersection of strategic
              consulting, brand excellence, and digital innovation. As a private
              holding company, we specialize in managing and growing diverse
              brand portfolios while maintaining the highest standards of
              operational efficiency and market leadership.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our approach combines deep industry expertise with cutting-edge
              digital strategies, ensuring that every brand under our umbrella
              not only survives but thrives in today's competitive landscape. We
              believe in building resilient businesses that can adapt, grow, and
              dominate their respective markets.
            </p>
            <p className="text-lg text-gray-700">
              Through our multi-brand ecosystem, we provide comprehensive
              support across strategy, marketing, operations, technology, and
              beyond, all while maintaining the unique identity and vision of each
              brand we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Core Service Pillars */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Core Service Pillars</SectionTitle>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {servicePillars.map((service, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Why Partner With Us</SectionTitle>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valuePropositions.map((value, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <ServiceCard
                  title={value.title}
                  description={value.description}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <StatsSection
              stats={[
                { value: "300", suffix: "%", label: "Average Growth Rate" },
                { value: "500", suffix: "+", label: "Projects Completed" },
                { value: "95", suffix: "%", label: "Client Satisfaction" },
                { value: "50", suffix: "+", label: "Industry Experts" },
              ]}
              valueClassName="text-white"
              labelClassName="text-white/80"
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Featured Industries</SectionTitle>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md px-6 py-3 text-primary font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {industry}
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Packages Carousel */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>Our Packages</SectionTitle>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <div className="mb-8 flex justify-center space-x-4 flex-wrap gap-4">
              {Object.keys(packages).map((key) => (
                <button
                  key={key}
                  onClick={() => setActivePackage(key)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activePackage === key
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {packages[key as keyof typeof packages].name}
                </button>
              ))}
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="max-w-4xl mx-auto">
              <PackageCard
                {...packages[activePackage as keyof typeof packages]}
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <SectionTitle>What Our Partners Say</SectionTitle>
          </ScrollAnimation>
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation delay={200}>
              <TestimonialsCarousel testimonials={testimonials} />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="contact"
        className="py-16 md:py-24 bg-primary text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to accelerate your company's growth?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Let's discuss how RHI Holding Privé can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary">
              Schedule a consultation
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

