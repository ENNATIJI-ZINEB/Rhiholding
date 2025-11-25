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

// Easing function for smooth animation
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatsSection({
  stats,
  className = "",
  valueClassName = "text-primary",
  labelClassName = "text-gray-600",
}: StatsSectionProps) {
  const [counted, setCounted] = useState(false);
  const [displayValues, setDisplayValues] = useState<number[]>(
    stats.map(() => 0)
  );
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

  useEffect(() => {
    if (!counted) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    const startValues = stats.map(() => 0);
    const targetValues = stats.map((stat) => {
      const numValue = parseInt(stat.value.replace(/\D/g, ""), 10);
      return isNaN(numValue) ? 0 : numValue;
    });

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      const newValues = targetValues.map((target, index) => {
        return Math.floor(startValues[index] + (target - startValues[index]) * easedProgress);
      });

      setDisplayValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final values are exact
        setDisplayValues(targetValues);
      }
    };

    requestAnimationFrame(animate);
  }, [counted, stats]);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}
    >
      {stats.map((stat, index) => {
        const displayValue = counted ? displayValues[index] : 0;
        return (
          <div key={index} className="text-center">
            <div
              className={`text-4xl md:text-5xl font-heading font-bold mb-2 ${valueClassName}`}
            >
              {displayValue}
              {stat.suffix && <span className="text-accent">{stat.suffix}</span>}
            </div>
            <div className={`font-medium ${labelClassName}`}>{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}

