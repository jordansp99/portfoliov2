import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText, BookOpen, Code, Briefcase, GraduationCap, ExternalLink } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              JS
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Jordan Speight</h1>
            <p className="text-xl text-gray-600 mb-6">Software Engineer</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Passionate about transforming complex data into actionable insights. Specialized in machine learning,
              statistical modeling, and building scalable data solutions that drive business impact.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <a href="/cv-jordan-speight.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <Code className="mr-2 h-4 w-4" />
                Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/blog">
                <BookOpen className="mr-2 h-4 w-4" />
                Blog
              </Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:jordanspeight@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/jordanspeight" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/jordansp99" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CV Preview Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Background</h2>

          {/* Experience Preview */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              Experience
            </h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Software Engineer</h4>
                      <p className="text-blue-600 font-medium">Example Company</p>
                    </div>
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Developed and maintained full-stack applications using React, Node.js, and PostgreSQL.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Junior Software Engineer</h4>
                      <p className="text-blue-600 font-medium">Another Example Company</p>
                    </div>
                    <span className="text-sm text-gray-500">2020 - 2022</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Contributed to the development of web applications and RESTful APIs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education Preview */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">B.S. in Computer Science</h4>
                      <p className="text-blue-600 font-medium">University of Example</p>
                    </div>
                    <span className="text-sm text-gray-500">2016 - 2020</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Specialization: Software Engineering
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Publications Preview */}

          {/* Download CV Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a href="/cv-jordan-speight.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Full CV
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
