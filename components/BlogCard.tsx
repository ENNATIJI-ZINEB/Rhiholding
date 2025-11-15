import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  className?: string;
}

export default function BlogCard({
  title,
  excerpt,
  category,
  date,
  slug,
  className = "",
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={`block bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
            {category}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-heading font-semibold text-primary mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <span className="text-primary font-medium hover:text-accent transition-colors duration-200">
          Read more →
        </span>
      </div>
    </Link>
  );
}

