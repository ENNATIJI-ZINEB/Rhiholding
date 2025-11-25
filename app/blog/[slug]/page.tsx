import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "../page";

function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

// Helper function to parse markdown-like content
function parseContent(content: string) {
  return content.split('\n').map((line, index) => {
    if (line.startsWith('# ')) {
      return (
        <h2
          key={index}
          className="text-3xl font-heading font-bold text-primary mt-8 mb-4"
        >
          {line.substring(2)}
        </h2>
      );
    }
    if (line.startsWith('## ')) {
      return (
        <h3
          key={index}
          className="text-2xl font-heading font-semibold text-primary mt-6 mb-3"
        >
          {line.substring(3)}
        </h3>
      );
    }
    if (line.trim() === '') {
      return <br key={index} />;
    }
    return (
      <p key={index} className="text-gray-700 mb-4">
        {line.trim()}
      </p>
    );
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const post = getBlogPost(resolvedParams.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: `${post.title} – RHI Holding Privé Blog`,
    description: post.excerpt || `Read our insights on ${post.category?.toLowerCase()}.`,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const resolvedParams = params instanceof Promise ? await params : params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <article className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="text-sm font-semibold text-accent uppercase tracking-wide">
                {post.category}
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-sm text-gray-600">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              {post.title}
            </h1>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {parseContent(post.content)}
          </div>
        </div>
      </article>
    </div>
  );
}

