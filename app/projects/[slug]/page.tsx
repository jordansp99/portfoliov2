import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

// This would typically come from your MDX files
const projects = {
  "customer-churn-prediction": {
    title: "Customer Churn Prediction Model",
    tags: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    githubUrl: "https://github.com/sarahchen/churn-prediction",
    demoUrl: "https://churn-demo.example.com",
    content: `
# Customer Churn Prediction Model

A machine learning solution to predict customer churn with 94% accuracy using ensemble methods and advanced feature engineering techniques.

## Overview

Customer churn is a critical business metric that directly impacts revenue. This project develops a robust machine learning model to identify customers at risk of churning, enabling proactive retention strategies.

## Key Features

- **High Accuracy**: Achieved 94% accuracy using ensemble methods
- **Feature Engineering**: Advanced feature creation from customer behavior data
- **Real-time Scoring**: API endpoint for real-time churn probability scoring
- **Interpretability**: SHAP values for model explainability

## Technical Implementation

### Data Processing
- Handled missing values using advanced imputation techniques
- Created time-based features from customer interaction history
- Applied feature scaling and normalization

### Model Architecture
- Ensemble of XGBoost, Random Forest, and Logistic Regression
- Hyperparameter optimization using Bayesian optimization
- Cross-validation for robust performance estimation

### Results
- **Accuracy**: 94.2%
- **Precision**: 91.8%
- **Recall**: 89.5%
- **F1-Score**: 90.6%

## Business Impact

The model has been deployed in production and has helped:
- Reduce churn rate by 15%
- Increase customer lifetime value by $2.3M annually
- Improve retention campaign efficiency by 40%
    `,
  },
  "real-time-fraud-detection": {
    title: "Real-time Fraud Detection System",
    tags: ["Python", "Apache Kafka", "TensorFlow", "Docker"],
    githubUrl: "https://github.com/sarahchen/fraud-detection",
    demoUrl: null,
    content: `
# Real-time Fraud Detection System

A scalable real-time fraud detection system capable of processing 100k+ transactions per minute with sub-100ms latency.

## Architecture Overview

The system uses a microservices architecture with Apache Kafka for real-time data streaming and TensorFlow for machine learning inference.

## Key Components

### 1. Data Ingestion
- Apache Kafka for real-time transaction streaming
- Schema validation and data quality checks
- Horizontal scaling capabilities

### 2. Feature Engineering
- Real-time feature computation
- Sliding window aggregations
- Behavioral pattern detection

### 3. ML Model
- Deep neural network for fraud detection
- Online learning capabilities
- Model versioning and A/B testing

## Performance Metrics

- **Latency**: < 100ms per transaction
- **Throughput**: 100k+ transactions/minute
- **Accuracy**: 99.2%
- **False Positive Rate**: 0.8%

## Deployment

The system is containerized using Docker and deployed on Kubernetes for high availability and scalability.
    `,
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          <Button asChild>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4 mr-2" />
              View Code
            </a>
          </Button>
          {project.demoUrl && (
            <Button variant="outline" asChild>
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, "<br>") }} />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}
