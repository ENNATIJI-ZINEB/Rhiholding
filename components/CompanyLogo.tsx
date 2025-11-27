"use client";

import { useState } from "react";
import Image from "next/image";

interface CompanyLogoProps {
  src: string;
  alt: string;
  fallbackLetter: string;
}

export default function CompanyLogo({
  src,
  alt,
  fallbackLetter,
}: CompanyLogoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white text-center">
        <div>
          <div className="text-4xl font-heading font-bold mb-2">
            {fallbackLetter}
          </div>
          <div className="text-sm opacity-80">Project Preview</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

