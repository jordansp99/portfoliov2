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
              DS
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Dr. Sarah Chen</h1>
            <p className="text-xl text-gray-600 mb-6">Senior Data Scientist & Machine Learning Engineer</p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Passionate about transforming complex data into actionable insights. Specialized in machine learning,
              statistical modeling, and building scalable data solutions that drive business impact.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <a href="/cv-sarah-chen.pdf" download>
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
              <a href="mailto:sarah.chen@email.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/sarahchen" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/sarahchen" target="_blank" rel="noreferrer">
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
                      <h4 className="font-semibold">Senior Data Scientist</h4>
                      <p className="text-blue-600 font-medium">TechCorp Inc.</p>
                    </div>
                    <span className="text-sm text-gray-500">2021 - Present</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Led ML initiatives that increased customer retention by 25% and deployed real-time systems serving
                    10M+ users daily.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">Data Scientist</h4>
                      <p className="text-blue-600 font-medium">DataFlow Solutions</p>
                    </div>
                    <span className="text-sm text-gray-500">2018 - 2021</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Developed predictive models with 92% accuracy and created automated data pipelines processing 1TB+
                    daily.
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
                      <h4 className="font-semibold">Ph.D. in Statistics</h4>
                      <p className="text-blue-600 font-medium">Stanford University</p>
                    </div>
                    <span className="text-sm text-gray-500">2014 - 2018</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Dissertation: "Bayesian Methods for High-Dimensional Time Series Analysis"
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold">M.S. in Computer Science</h4>
                      <p className="text-blue-600 font-medium">MIT</p>
                    </div>
                    <span className="text-sm text-gray-500">2012 - 2014</span>
                  </div>
                  <p className="text-gray-600 text-sm">Specialization: Machine Learning and Artificial Intelligence</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Publications Preview */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Publications
            </h3>
            <div className="space-y-4">
              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-medium text-sm mb-2">
                    "VarDial 2025 Shared Task: Language Identification and Dialect Classification"
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    <strong>S. Chen</strong>, et al. - <em>Proceedings of VarDial Workshop</em>, 2025
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/papers/vardial-2025.pdf" target="_blank" rel="noreferrer">
                        <FileText className="h-3 w-3 mr-1" />
                        PDF
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://aclanthology.org/2025.vardial-1.4/" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Publication
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-medium text-sm mb-2">
                    "Deep Learning Approaches for Time Series Forecasting in Financial Markets"
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    <strong>S. Chen</strong>, J. Wang, M. Liu - <em>Journal of Machine Learning Research</em>, 2023
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/papers/jmlr-2023-timeseries.pdf" target="_blank" rel="noreferrer">
                        <FileText className="h-3 w-3 mr-1" />
                        PDF
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://jmlr.org/papers/v24/chen23a.html" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Publication
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-medium text-sm mb-2">
                    "Scalable Bayesian Inference for Large-Scale Recommendation Systems"
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    <strong>S. Chen</strong>, A. Rodriguez, K. Thompson - <em>Proceedings of ICML</em>, 2022
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/papers/icml-2022-bayesian.pdf" target="_blank" rel="noreferrer">
                        <FileText className="h-3 w-3 mr-1" />
                        PDF
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://proceedings.mlr.press/v162/chen22a.html" target="_blank" rel="noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Publication
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Download CV Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <a href="/cv-sarah-chen.pdf" download>
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
