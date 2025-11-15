import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "About Us – RHI Holding Privé",
  description:
    "Learn about RHI Holding Privé, our mission, vision, and the values that drive our strategic approach to multi-brand management.",
};

const coreValues = [
  {
    title: "Resilience",
    description:
      "We build businesses that can withstand challenges, adapt to change, and emerge stronger from adversity.",
  },
  {
    title: "Clarity",
    description:
      "Transparent communication, clear strategies, and straightforward solutions guide everything we do.",
  },
  {
    title: "Efficiency",
    description:
      "Streamlined processes and optimized operations ensure maximum productivity and results.",
  },
  {
    title: "Research-Driven",
    description:
      "Every decision is backed by data, research, and deep market insights for sustainable growth.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Company Story */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Story</SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              RHI Holding Privé was founded with a vision to revolutionize how
              private holdings manage and grow their brand portfolios. Born from
              the recognition that modern businesses need more than traditional
              consulting—they need strategic partners who understand the
              complexities of multi-brand ecosystems in the digital age.
            </p>
            <p className="mb-6">
              Our name, inspired by the rhino—a symbol of strength, resilience,
              and unwavering determination—reflects our commitment to building
              businesses that can navigate any challenge. We combine the
              strategic depth of traditional consulting with the agility and
              innovation required in today's fast-paced digital landscape.
            </p>
            <p>
              Today, RHI Holding Privé stands as a trusted partner to companies
              across industries, helping them achieve sustainable growth,
              operational excellence, and market leadership through our
              comprehensive suite of services and deep expertise in brand
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Mission & Vision</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-lg">
                To empower businesses with strategic clarity, operational
                excellence, and digital innovation, enabling them to achieve
                sustainable growth and market leadership. We are committed to
                building resilient businesses that thrive in an ever-evolving
                marketplace.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-lg">
                To become the leading private holding company recognized for
                transforming businesses through strategic excellence, innovative
                digital solutions, and unparalleled multi-brand management
                expertise. We envision a future where every brand under our
                guidance achieves its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Founder Message</SectionTitle>
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-heading font-bold">
                    RHI
                  </span>
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  A Message from Our Founder
                </h3>
                <p className="text-gray-700 mb-4 italic text-lg">
                  "Building RHI Holding Privé has been a journey of
                  understanding what businesses truly need in today's complex
                  marketplace. We don't just consult—we partner, we build, and
                  we grow together. Our commitment to resilience, clarity, and
                  excellence drives everything we do."
                </p>
                <p className="text-gray-600">
                  — Founder, RHI Holding Privé
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-brand Model */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Multi-Brand Model</SectionTitle>
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700 mb-8">
              <p className="mb-6">
                RHI Holding Privé operates on a unique multi-brand ecosystem
                model that allows us to manage diverse brand portfolios while
                maintaining each brand's distinct identity and market position.
              </p>
              <p className="mb-6">
                Our approach ensures that each brand receives dedicated attention
                and resources while benefiting from shared expertise, technology,
                and strategic insights across the entire holding structure.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-background-light rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  Central Strategy
                </h4>
                <p className="text-sm text-gray-600">
                  Unified strategic vision with brand-specific execution
                </p>
              </div>
              <div className="text-center p-6 bg-background-light rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  Shared Resources
                </h4>
                <p className="text-sm text-gray-600">
                  Technology, expertise, and infrastructure shared across brands
                </p>
              </div>
              <div className="text-center p-6 bg-background-light rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <h4 className="font-heading font-semibold text-primary mb-2">
                  Independent Growth
                </h4>
                <p className="text-sm text-gray-600">
                  Each brand maintains autonomy while leveraging collective strength
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Core Values</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <ServiceCard
                key={index}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

