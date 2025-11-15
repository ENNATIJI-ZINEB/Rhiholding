import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Sub-brands – RHI Holding Privé",
  description:
    "Explore the RHI Holding Privé ecosystem and our portfolio of sub-brands including Hattrhix, Rhitoric, and Rhi Studio.",
};

const subBrands = [
  {
    name: "Hattrhix",
    category: "Cybersecurity",
    description:
      "Hattrhix is our dedicated cybersecurity brand, providing cutting-edge security solutions and protection services for businesses of all sizes. We specialize in threat detection, risk assessment, and comprehensive security strategies.",
  },
  {
    name: "Rhitoric",
    category: "Debate & Empowerment",
    description:
      "Rhitoric focuses on fostering meaningful dialogue, debate, and empowerment through communication platforms and educational initiatives. We believe in the power of discourse to drive positive change.",
  },
  {
    name: "Rhi Studio",
    category: "Branding & Creative",
    description:
      "Rhi Studio is our creative branding arm, delivering exceptional design, brand identity, and creative solutions. We combine artistic vision with strategic thinking to create memorable brand experiences.",
  },
  {
    name: "Future Brands",
    category: "Coming Soon",
    description:
      "RHI Holding Privé continues to expand its ecosystem with new brands and ventures. Stay tuned for exciting additions to our portfolio that will further strengthen our multi-brand approach.",
  },
];

export default function SubBrandsPage() {
  return (
    <div>
      {/* Intro to Ecosystem */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Multi-Brand Ecosystem</SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              RHI Holding Privé operates as a strategic holding company managing
              a diverse portfolio of specialized brands, each serving distinct
              market needs while sharing core values of resilience, clarity, and
              excellence.
            </p>
            <p className="mb-6">
              Our multi-brand model allows each sub-brand to maintain its unique
              identity and market position while benefiting from shared resources,
              strategic guidance, and operational support from the holding
              structure.
            </p>
            <p>
              This ecosystem approach enables us to serve a broader range of
              clients and markets while maintaining the agility and focus
              required for each brand's success.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-brands List */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Sub-brands</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            {subBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                      {brand.name}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      {brand.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-lg">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RHI Ecosystem Map */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>RHI Ecosystem Map</SectionTitle>
          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            {/* Central RHI Holding */}
            <div className="flex justify-center mb-12">
              <div className="bg-primary text-white rounded-full w-32 h-32 flex items-center justify-center text-center p-4">
                <div>
                  <div className="font-heading font-bold text-lg">RHI</div>
                  <div className="text-sm">Holding Privé</div>
                </div>
              </div>
            </div>

            {/* Sub-brands around center */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Hattrhix */}
              <div className="text-center">
                <div className="bg-accent/10 rounded-xl p-6 mb-4">
                  <h4 className="font-heading font-bold text-primary text-lg mb-2">
                    Hattrhix
                  </h4>
                  <p className="text-sm text-gray-600">Cybersecurity</p>
                </div>
                <div className="h-8 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-primary"></div>
                </div>
              </div>

              {/* Rhitoric */}
              <div className="text-center">
                <div className="bg-accent/10 rounded-xl p-6 mb-4">
                  <h4 className="font-heading font-bold text-primary text-lg mb-2">
                    Rhitoric
                  </h4>
                  <p className="text-sm text-gray-600">Debate & Empowerment</p>
                </div>
                <div className="h-8 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-primary"></div>
                </div>
              </div>

              {/* Rhi Studio */}
              <div className="text-center">
                <div className="bg-accent/10 rounded-xl p-6 mb-4">
                  <h4 className="font-heading font-bold text-primary text-lg mb-2">
                    Rhi Studio
                  </h4>
                  <p className="text-sm text-gray-600">Branding & Creative</p>
                </div>
                <div className="h-8 flex items-center justify-center">
                  <div className="w-0.5 h-full bg-primary"></div>
                </div>
              </div>
            </div>

            {/* Future Brands */}
            <div className="mt-12 text-center">
              <div className="inline-block bg-background-light rounded-xl p-6">
                <h4 className="font-heading font-bold text-primary text-lg mb-2">
                  Future Brands
                </h4>
                <p className="text-sm text-gray-600">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

