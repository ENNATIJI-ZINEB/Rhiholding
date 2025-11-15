import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog & Insights – RHI Holding Privé",
  description:
    "Read our latest insights on business transformation, digital growth, market analysis, and strategic consulting.",
};

async function getBlogPosts() {
  try {
    // Check if Supabase is configured
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      console.warn('Supabase not configured. Blog posts will be empty.');
      return [];
    }

    // Use direct Supabase call instead of API to avoid circular issues
    const { createServerClient } = await import('@/lib/supabase');
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, slug, title, excerpt, category, published_at, created_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return empty array to prevent page crash
    return [];
  }
}

const categories = [
  "Business transformation",
  "Digital growth",
  "Market analysis",
  "Resilience & leadership",
  "Branding",
  "PR & communication",
  "Tech & cybersecurity",
];

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Extract unique categories from posts
  const categories = Array.from(
    new Set(posts.map((post: any) => post.category))
  ).filter(Boolean);

  // Format posts for BlogCard component
  const formattedPosts = posts.map((post: any) => ({
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    date: post.published_at
      ? new Date(post.published_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : new Date(post.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
    slug: post.slug,
  }));

  return (
    <div>
      {/* Blog List */}
      <section className="py-16 md:py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Blog & Insights</SectionTitle>
          
          {/* Categories */}
          {categories.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                Categories
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white rounded-lg shadow-sm text-sm text-primary font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          {formattedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {formattedPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No blog posts available at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

