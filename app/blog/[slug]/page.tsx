import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ArrowLeft } from "lucide-react"

// This would typically come from your MDX files or CMS
const blogPosts = {
  "introduction-to-mlops": {
    title: "Introduction to MLOps: Bridging the Gap Between ML and Production",
    date: "2023-12-01",
    readTime: "8 min read",
    tags: ["MLOps", "DevOps", "Machine Learning"],
    content: `
# Introduction to MLOps: Bridging the Gap Between ML and Production

Machine Learning Operations (MLOps) has become a critical discipline for organizations looking to deploy and maintain ML models at scale. In this comprehensive guide, we'll explore the fundamentals of MLOps and how it bridges the gap between machine learning development and production deployment.

## What is MLOps?

MLOps is a set of practices that combines Machine Learning, DevOps, and Data Engineering to deploy and maintain ML systems in production reliably and efficiently. It encompasses the entire ML lifecycle, from data preparation to model deployment and monitoring.

## Key Components of MLOps

### 1. Version Control
- **Code versioning**: Track changes in your ML code
- **Data versioning**: Manage different versions of training datasets
- **Model versioning**: Keep track of model iterations and performance

### 2. Continuous Integration/Continuous Deployment (CI/CD)
- Automated testing of ML pipelines
- Automated model training and validation
- Seamless deployment to production environments

### 3. Monitoring and Observability
- Model performance monitoring
- Data drift detection
- Infrastructure monitoring

## Best Practices

1. **Start Simple**: Begin with basic automation before implementing complex MLOps workflows
2. **Automate Everything**: From data validation to model deployment
3. **Monitor Continuously**: Set up alerts for model performance degradation
4. **Document Thoroughly**: Maintain clear documentation of your ML pipelines

## Conclusion

MLOps is essential for scaling machine learning in production environments. By implementing proper MLOps practices, teams can reduce deployment time, improve model reliability, and ensure consistent performance.
  `,
  },
  "feature-engineering-techniques": {
    title: "Advanced Feature Engineering Techniques for Better ML Models",
    date: "2023-11-15",
    readTime: "12 min read",
    tags: ["Feature Engineering", "Data Science", "Python"],
    content: `
# Advanced Feature Engineering Techniques for Better ML Models

Feature engineering is often the difference between a mediocre model and an exceptional one. In this post, we'll explore advanced techniques that can significantly boost your model's performance.

## Why Feature Engineering Matters

Good features can make simple algorithms work better than complex algorithms with poor features. Feature engineering is the process of using domain knowledge to extract features from raw data that make machine learning algorithms work better.

## Advanced Techniques

### 1. Polynomial Features
Creating polynomial combinations of existing features can capture non-linear relationships.

\`\`\`python
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)
\`\`\`

### 2. Target Encoding
Encoding categorical variables based on the target variable can be very effective.

\`\`\`python
def target_encode(df, column, target):
  mean_target = df.groupby(column)[target].mean()
  return df[column].map(mean_target)
\`\`\`

### 3. Feature Interactions
Creating interaction features between different variables.

\`\`\`python
# Creating interaction features
df['feature_interaction'] = df['feature1'] * df['feature2']
\`\`\`

## Conclusion

Feature engineering is both an art and a science. The techniques covered here should give you a solid foundation for creating better features and improving your model performance.
  `,
  },
  "time-series-forecasting-guide": {
    title: "Complete Guide to Time Series Forecasting",
    date: "2023-09-30",
    readTime: "15 min read",
    tags: ["Time Series", "Forecasting", "Python", "R"],
    content: `
# Complete Guide to Time Series Forecasting

Time series forecasting is crucial for many real-world applications such as demand planning, finance, and supply-chain optimization.  
In this guide we’ll cover classic statistical approaches (ARIMA, ETS), machine-learning methods, and modern deep-learning models like Temporal Fusion Transformers.

## Contents
1. Exploratory data analysis  
2. Stationarity & transformations  
3. Classical models (ARIMA / SARIMA)  
4. Machine-learning approaches (XGBoost, LightGBM)  
5. Deep-learning approaches (LSTM, TFT)  
6. Model selection & evaluation metrics  

---
Stay tuned for code examples and notebooks you can try yourself!
      `,
  },

  "data-visualization-best-practices": {
    title: "Data Visualization Best Practices for Data Scientists",
    date: "2023-09-10",
    readTime: "7 min read",
    tags: ["Visualization", "Storytelling", "Design"],
    content: `
# Data Visualization Best Practices for Data Scientists

Crafting visualizations that resonate with stakeholders is an essential skill.  
In this post we’ll discuss color theory, chart selection, and telling a compelling story with data.

* Use perceptually uniform color scales  
* Label axes and units clearly  
* Avoid clutter— maximize the data-ink ratio  
* Use annotations to focus attention  

Check the accompanying repo for reusable Plotly templates.
      `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br>") }} />
      </article>
    </div>
  )
}

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
