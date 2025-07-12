import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { CalendarDays } from "lucide-react" // Import CalendarDays for date display
import { getMarkdownFiles } from "@/lib/content-utils" // Import the utility function

// Define the expected structure for projects
interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  featured?: boolean; // Optional
  github?: string; // Optional
  demo?: string; // Optional
  htmlContent?: string; // This will be populated by getMarkdownFiles
}

// Fetch projects using the utility function
// This function will run on the server
async function getProjects(): Promise<Project[]> {
  const projects = await getMarkdownFiles("content/projects");
  // Ensure all expected fields are present, providing defaults if necessary
  return projects.map(project => ({
    slug: project.slug,
    title: project.title,
    description: project.description,
    tags: project.tags || [],
    date: project.date,
    featured: project.featured || false, // Default featured to false
    github: project.github,
    demo: project.demo,
    htmlContent: project.htmlContent, // This might be used on a detail page
  }));
}

export default async function ProjectsPage() {
  const projects = await getProjects();

  // Sort projects by date (descending) - getMarkdownFiles already does this, but good to be explicit if needed
  // projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

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
                    <CardTitle className="text-xl mb-2">
                      <Link href={`/projects/${project.slug}`} className="hover:text-blue-600 transition-colors">
                        {project.title}
                      </Link>
                    </CardTitle>
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
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
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
                <CardTitle className="text-lg mb-2">
                  <Link href={`/projects/${project.slug}`} className="hover:text-blue-600 transition-colors">
                    {project.title}
                  </Link>
                </CardTitle>
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
                  {project.github && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
