import React from 'react'
import testimonialsData from '@/data/testimonials'

const Testimonials = () => {
  return (
    <section>
      <div className="container px-3 py-10 mx-auto">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 text-center sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Here’s what <span className="text-primary-500">people</span> say about me
        </h2>
        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </section>
      </div>
    </section>
  )
}

const Testimonial = ({ imageSrc, name, position, quote }) => {
  return (
    <div className="p-8 border rounded-lg dark:border-gray-700 hover:scale-110 duration-300">
      <p className="leading-loose text-gray-500 dark:text-gray-400">{quote}</p>
      <div className="flex items-center mt-8 -mx-2">
        <img
          className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
          src={imageSrc}
          alt=""
        />
        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 dark:text-white">{name}</h1>
          <span className="text-sm text-gray-500">{position}</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials