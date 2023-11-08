import React from 'react'
import FeatureCard from './FeatureCard'
import features from '@/data/featured'

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
