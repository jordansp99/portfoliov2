import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock } from "lucide-react"

// In a real application, you would dynamically load these from your markdown files
const blogPosts = [
  {
    slug: "introduction-to-mlops",
    title: "Introduction to MLOps: Bridging the Gap Between ML and Production",
    description:
      "Learn the fundamentals of MLOps and how to deploy machine learning models at scale with proper monitoring and governance.",
    date: "2023-12-01",
    readTime: "8 min read",
    tags: ["MLOps", "DevOps", "Machine Learning"],
    featured: true,
  },
  {
    slug: "feature-engineering-techniques",
    title: "Advanced Feature Engineering Techniques for Better ML Models",
    description:
      "Explore sophisticated feature engineering methods that can significantly improve your model performance.",
    date: "2023-11-15",
    readTime: "12 min read",
    tags: ["Feature Engineering", "Data Science", "Python"],
    featured: true,
  },
  {
    slug: "bayesian-ab-testing",
    title: "Bayesian A/B Testing: A More Intuitive Approach",
    description:
      "Understanding Bayesian methods for A/B testing and why they might be better than traditional frequentist approaches.",
    date: "2023-10-20",
    readTime: "10 min read",
    tags: ["Statistics", "A/B Testing", "Bayesian"],
    featured: false,
  },
  {
    slug: "time-series-forecasting-guide",
    title: "Complete Guide to Time Series Forecasting",
    description:
      "From ARIMA to Prophet to deep learning approaches - a comprehensive guide to time series forecasting.",
    date: "2023-09-30",
    readTime: "15 min read",
    tags: ["Time Series", "Forecasting", "Python", "R"],
    featured: false,
  },
  {
    slug: "data-visualization-best-practices",
    title: "Data Visualization Best Practices for Data Scientists",
    description: "How to create compelling and informative visualizations that tell a story with your data.",
    date: "2023-09-10",
    readTime: "7 min read",
    tags: ["Visualization", "Storytelling", "Design"],
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const otherPosts = blogPosts.filter((post) => !post.featured)

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
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
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
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
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
                    <Badge key={tag} variant="outline">
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
