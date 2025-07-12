import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

// In a real application, you would dynamically load these from your markdown files
const projects = [
  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction Model",
    description:
      "Machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    date: "2023-11-15",
    featured: true,
  },
  {
    slug: "real-time-fraud-detection",
    title: "Real-time Fraud Detection System",
    description:
      "Deployed a real-time fraud detection system processing 100k+ transactions per minute with sub-100ms latency.",
    tags: ["Python", "Apache Kafka", "TensorFlow", "Docker"],
    date: "2023-09-20",
    featured: true,
  },
  {
    slug: "nlp-sentiment-analysis",
    title: "Multi-language Sentiment Analysis",
    description:
      "Built a sentiment analysis system supporting 12 languages using transformer models and transfer learning.",
    tags: ["Python", "Transformers", "BERT", "FastAPI"],
    date: "2023-07-10",
    featured: false,
  },
  {
    slug: "time-series-forecasting",
    title: "Sales Forecasting Dashboard",
    description:
      "Interactive dashboard for sales forecasting using ARIMA and Prophet models with automated model selection.",
    tags: ["R", "Shiny", "Prophet", "Plotly"],
    date: "2023-05-15",
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg text-gray-600">
          A collection of data science projects showcasing machine learning, analytics, and engineering solutions.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm">
                    <Link href={`/projects/${project.slug}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Other Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project) => (
            <Card key={project.slug} className="h-full">
              <CardHeader>
                <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/projects/${project.slug}`}>View Details</Link>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="#" target="_blank" rel="noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
