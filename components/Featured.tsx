import {
  CloudIcon,
  CircleStackIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
import FeatureCard from './FeatureCard'

const features = [
  {
    name: 'Data Engineering',
    description: `I have designed modern data platforms and data pipelines for organisations, enabling advanced analytics and better decision-making.`,
    points: [
      'Ingest data from different sources like APIs, SQL databases, Spreadsheets, or real-time messaging systems like Kafka',
      'Design and implement data lake and lakehouse solution for central data storage and governance',
      'Implement data quality checks and validation rules within pipelines to ensure data integrity and accuracy throughout the processing lifecycle.',
      'Continuously monitor and improve data pipeline performance by leveraging monitoring and logging tools',
      'Create reproducible and modular data workflows',
    ],
    techStack: ["dbt", "snowflake", "awslambda", "S3", "kafka", "flink", "ECS", "redshift", "dynamodb", "airflow", "ghactions", "hive", "parquet", "spark"],
    icon: CircleStackIcon,
  },
  {
    name: 'Machine Learning',
    description:
      'I have led organisations from AI/ML use case identification to continuous ML model deployment for business success.',
    points: [
      "Collect, preprocess, and label data from varied sources efficiently",
      "Implement statistical analysis and feature engineering for deeper understanding of your data",
      "Establish reproducible, modular ML pipeline ensuring scalability and consistency",
      "Enable diverse use cases through MLOps implementation",
      "Translate business needs into interpretable and explainable models"
    ],
    techStack: [ "aws", "mlflow", "python", "R", "tensorflow", "pytorch", "jupyter", "wandb", "pandas", "polars", "dvc", "streamlit", "bentoml", "fastapi", "apigateway"],
    icon: CodeBracketIcon,
  },
  {
    name: 'Natural Language Processing',
    description:
      'I have employed NLP for challenging business questions, including Q&A, summarisation, and topic modeling.',
    points: [
      "Extract insights from text, documents, and conversations accurately and efficiently",
      "Develop customised models for sentiment analysis, Q&A, topic modelling and more",
      "Construct robust language models for translation, summarisation, and conversational AI",
      "Optimise NLP pipelines for efficiency and accuracy through performance monitoring",
      "Implement reproducible workflows for seamless model development and deployment"
    ],
    techStack: ["spacy", "openai", "awslambda", "opensearch", "mlflow", "python", "tensorflow", "pytorch", "streamlit", "nextjs"],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Cloud Computing',
    description:
      'I specialise in building data and ML solutions on AWS to implement robust, scalable, and cost-effective solutions',
    points: [
      "Integrate diverse data inputs: APIs, databases, file servers, and real-time systems",
      "Develop cloud-based data ecosystems for unified storage and governance.",
      "Enforce data quality standards for consistency and accuracy.",
      "Optimise pipeline efficiency using robust monitoring and logging solutions.",
      "Build adaptable, reproducible data workflows for seamless Data and AI integration."
    ],
    techStack: ["awslambda", "S3","ECS", "redshift", "dynamodb", "airflow", "apigateway", "sqs", "cloudwatch"],
    icon: CloudIcon,
  },
  {
    name: 'Tech Consulting',
    description:
      'I have been assisting diverse customers on their data-to-insight journey, offering expert guidance and fit-for-purpose solutions',
    points: [
      "Strategic guidance for implementation and data transformation",
      "Custom solutions for data and ML solution design",
      "Optimise workflows, improving efficiency and productivity",
      "Assessment of data infrastructure and recommendations for enhancements",
      "Implementation of data quality measures to improve decision making",
    ],
    techStack: ["jira", "powerpoint", "diagrams", "office", "teams", "confluence"],
    icon: UsersIcon,
  },
  {
    name: 'Data Visualisation',
    description:
      "I'm passionate about storytelling, uncovering core issues, and crafting effective solutions",
    points: [
      "Create engaging visual representations of complex data sets",
      "Design interactive dashboards for real-time insights",
      "Customise data visualizations to meet specific business needs",
      "Implement intuitive and user-friendly graphical representations",
      "Craft visual storytelling to effectively convey insights",
    ],
    techStack: ["plotly", "python", "powerbi", "tableau", "streamlit", ],
    icon: ChartBarIcon,
  },
]

export function Featured() {
  return (
    <section>
      <div className="container px-6 py-10 mx-auto text-center">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          I'm your <span className="highlighted-text text-primary-500">all in one</span> data
          specialist
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
          I'm a data unicorn who can build modern data platforms, integrate ML solutions into your
          tech stack, and turn data into actionable insights to
          create value. Want more details? Find out more by navigating through the icons below.
        </p>
        <dl className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
