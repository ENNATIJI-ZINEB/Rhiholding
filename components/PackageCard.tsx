import { ReactNode } from "react";
import Button from "./Button";

interface PackageCardProps {
  name: string;
  description: string;
  targetAudience: string;
  features: string[];
  className?: string;
}

export default function PackageCard({
  name,
  description,
  targetAudience,
  features,
  className = "",
}: PackageCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 flex flex-col ${className}`}
    >
      <h3 className="text-2xl font-heading font-bold text-primary mb-3">
        {name}
      </h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <p className="text-sm font-medium text-primary mb-4">
        <span className="font-semibold">Who it's for:</span> {targetAudience}
      </p>
      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature, index) => (
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
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Button href="/contact" variant="primary" className="w-full">
        Request this package
      </Button>
    </div>
  );
}

