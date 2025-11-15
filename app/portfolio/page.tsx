"use client";

import SectionTitle from "@/components/SectionTitle";
import CaseStudyCard from "@/components/CaseStudyCard";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const caseStudies = [
  {
    clientName: "TechStart Solutions",
    before: [
      "Limited brand recognition",
      "Inconsistent digital presence",
      "Low lead generation",
      "No clear market positioning",
    ],
    after: [
      "300% increase in brand awareness",
      "Unified digital strategy across all channels",
      "500% increase in qualified leads",
      "Clear market leadership position",
    ],
    outcome:
      "TechStart Solutions achieved market leadership within 12 months, with revenue growth of 250% and established brand recognition in their industry.",
  },
  {
    clientName: "Global Commerce Group",
    before: [
      "Fragmented brand portfolio",
      "Inefficient operations",
      "Low customer retention",
      "Outdated technology infrastructure",
    ],
    after: [
      "Unified brand ecosystem",
      "Streamlined operations with 40% efficiency gain",
      "85% customer retention rate",
      "Modern cloud-based infrastructure",
    ],
    outcome:
      "Global Commerce Group transformed their operations, achieving 40% cost reduction while improving customer satisfaction scores by 60%.",
  },
  {
    clientName: "Innovate Health",
    before: [
      "Weak online presence",
      "Limited patient engagement",
      "No digital marketing strategy",
      "Low conversion rates",
    ],
    after: [
      "Comprehensive digital presence",
      "Active patient community with 10K+ members",
      "Multi-channel marketing strategy",
      "300% increase in conversions",
    ],
    outcome:
      "Innovate Health expanded their patient base by 400% and established a strong digital presence that drives consistent growth.",
  },
];

const successSnapshots = [
  {
    objective: "Increase brand awareness",
    approach:
      "Comprehensive rebranding campaign with multi-channel digital marketing",
    result: "300% increase in brand recognition within 6 months",
  },
  {
    objective: "Drive lead generation",
    approach:
      "SEO optimization, content marketing, and targeted PPC campaigns",
    result: "500% increase in qualified leads",
  },
  {
    objective: "Improve customer retention",
    approach:
      "Customer support optimization and loyalty program implementation",
    result: "85% retention rate, up from 45%",
  },
  {
    objective: "Scale operations",
    approach:
      "Process automation and technology infrastructure upgrade",
    result: "40% efficiency gain with 60% cost reduction",
  },
];

const revenueData = [
  { month: "Jan", revenue: 120 },
  { month: "Feb", revenue: 150 },
  { month: "Mar", revenue: 180 },
  { month: "Apr", revenue: 220 },
  { month: "May", revenue: 280 },
  { month: "Jun", revenue: 350 },
];

const leadsData = [
  { month: "Jan", leads: 50 },
  { month: "Feb", leads: 75 },
  { month: "Mar", leads: 100 },
  { month: "Apr", leads: 150 },
  { month: "May", leads: 200 },
  { month: "Jun", leads: 300 },
];

const awarenessData = [
  { month: "Jan", awareness: 20 },
  { month: "Feb", awareness: 35 },
  { month: "Mar", awareness: 50 },
  { month: "Apr", awareness: 65 },
  { month: "May", awareness: 80 },
  { month: "Jun", awareness: 95 },
];

const industries = [
  "Technology",
  "E-commerce",
  "Healthcare",
  "Financial Services",
  "Education",
  "Consulting",
  "Retail",
  "Manufacturing",
];

export default function PortfolioPage() {
  return (
    <div>
      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Portfolio</SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              At RHI Holding Privé, we take pride in the transformative results
              we've achieved for our partners. Our portfolio showcases real
              success stories across diverse industries, demonstrating our
              ability to drive growth, enhance operations, and build lasting
              brand value.
            </p>
            <p>
              Each case study represents a unique journey of strategic
              transformation, where we've combined our expertise in branding,
              digital marketing, operations, and technology to deliver
              measurable, sustainable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Before → After Case Studies</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Success Snapshots */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Campaign Success Snapshots</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {successSnapshots.map((snapshot, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {snapshot.objective}
                </h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Approach:</span> {snapshot.approach}
                </p>
                <p className="text-accent font-semibold">
                  <span className="font-medium">Result:</span> {snapshot.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth KPIs */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Growth KPIs</SectionTitle>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                Revenue Growth
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3459A6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                Lead Increase
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={leadsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="leads"
                    stroke="#3459A6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                Brand Awareness
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={awarenessData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="awareness"
                    stroke="#142550"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Industry Coverage</SectionTitle>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md px-6 py-3 text-primary font-medium hover:shadow-lg transition-shadow duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

