import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"
import { getMarkdownFiles } from "@/lib/content-utils" // Import the utility function

// Define the expected structure for blog posts
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime?: string; // Optional, as it might not be in all markdown files
  tags: string[];
  featured?: boolean; // Optional
  htmlContent?: string; // This will be populated by getMarkdownFiles
}

// Fetch blog posts using the utility function
// This function will run on the server
async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getMarkdownFiles("content/blog");
  // Ensure all expected fields are present, providing defaults if necessary
  return posts.map(post => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    readTime: post.readTime || "N/A", // Default readTime if not present
    tags: post.tags || [],
    featured: post.featured || false, // Default featured to false
    htmlContent: post.htmlContent, // This will be used for the full post content
  }));
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  // Sort posts by date (descending) - getMarkdownFiles already does this, but good to be explicit if needed
  // blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Insights, tutorials, and thoughts on data science, machine learning, and analytics.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  {post.readTime && ( // Only display readTime if it exists
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Posts */}
      <section>
        <h2 className="text-2xl font-bold mb-6">All Posts</h2>
        <div className="space-y-6">
          {otherPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  {post.readTime && ( // Only display readTime if it exists
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
