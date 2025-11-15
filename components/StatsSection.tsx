"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export default function StatsSection({
  stats,
  className = "",
  valueClassName = "text-primary",
  labelClassName = "text-gray-600",
}: StatsSectionProps) {
  const [counted, setCounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [counted]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div
            className={`text-4xl md:text-5xl font-heading font-bold mb-2 ${valueClassName}`}
          >
            {stat.value}
            {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
          </div>
          <div className={`font-medium ${labelClassName}`}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

