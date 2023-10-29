import {
  CloudIcon,
  CircleStackIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  UsersIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import FeatureCard from './FeatureCard'

const features = [
  {
    name: 'Data Engineering',
    description:
      'I have designed modern data platforms and data pipelines for organisations, enabling advanced analytics and better decision-making.',
    icon: CircleStackIcon,
  },
  {
    name: 'Machine Learning',
    description:
      'I have led organisations from AI/ML use case identification to continuous ML model deployment for business success.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Natural Language Processing',
    description:
      'I have employed NLP for challenging business questions, including Q&A, summarisation, and topic modeling.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Cloud Computing',
    description:
      'I specialise in building data and ML solutions on AWS to implement robust, scalable, and cost-effective solutions',
    icon: CloudIcon,
  },
  {
    name: 'Tech Consulting',
    description:
      'I have been assisting diverse customers on their data-to-insight journey, offering expert guidance and fit-for-purpose solutions',
    icon: UsersIcon,
  },
  {
    name: 'Data Visualisation',
    description:
      "I'm passionate about storytelling, uncovering core issues, and crafting effective solutions",
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
          tech stack, crunch numbers, analyze trends, and turn data into actionable insights to
          create value.
        </p>
        <dl className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="space-y-3">
              <FeatureCard feature={feature}/>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
