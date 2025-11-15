interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  className?: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  className = "",
}: TestimonialCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 md:p-8 ${className}`}
    >
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-accent"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-700 mb-6 italic text-lg">{quote}</p>
      <div>
        <p className="font-semibold text-primary">{author}</p>
        <p className="text-sm text-gray-600">
          {role}
          {company && `, ${company}`}
        </p>
      </div>
    </div>
  );
}

