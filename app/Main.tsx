'use client'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { Featured } from '@/components/Featured'
import Testimonials from '@/components/Testimonials'
import ImageGrid from '@/components/ImageGrid'
import Stats from '@/components/Stats'
import Newsletter from '@/components/NewsLetter'

import { motion } from 'framer-motion'
const MAX_DISPLAY = 5

export default function Home({ posts }) {
  const h1Variants = {
    open: {
      opacity: 1,
      y: '0vh',
    },
    closed: { opacity: 0, y: '-10vh' },
  }
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-8xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Empowering businesses to make strategic,{' '}
              <span className="highlighted-text text-primary-500"> data-informed </span> decisions
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              I'm a passionate data scientist, consultant, and technology enthusiast living in
              Melbourne, Australia. I've worked with various companies to help them design and
              implement data strategies, platforms, and machine learning solutions that has boost
              their business value.
            </p>
            <a
              href={siteMetadata.calendly}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Book a call with me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2 -mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <motion.img
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ ease: 'easeInOut', duration: 0.3, stiffness: 100, damping: 1 }}
              src="/static/images/hero.png"
              alt="mockup"
              width={1200}
            />
          </div>
        </div>
      </div>
      <Featured />
      <ImageGrid />
      <Stats />
      <Testimonials />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 text-center dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            <span className="highlighted-text text-primary-500"> Thoughts </span> on machine
            learning, data and cloud
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && (
            <div className="p-10">
              <h1 className="max-w-8xl mb-4 text-4xl font-extrabold tracking-tightn text-center leading-none md:text-2xl xl:text-5xl dark:text-white">
                Coming <span className="highlighted-text text-primary-500">soon...</span>
              </h1>
            </div>
          )}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article className="hover:-translate-y-1 hover:scale-110 duration-300 ...">
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100 hover:dark:text-gray-400 text-2xl font-bold leading-8 tracking-tight"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <Newsletter />
        </div>
      )} */}
    </>
  )
}
