import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import React, { useRef, useState } from 'react'

export interface NewsletterFormProps {
  title?: string
  apiUrl?: string
}

const Newsletter = ({
  title = 'Neural Perspectives',
  apiUrl = '/api/newsletter',
}: NewsletterFormProps) => {
  const inputEl = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const res = await fetch(apiUrl, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    console.log(res)

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return ''
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
  }

  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            {title.split(' ').map((word, index) => (
              <h2
                key={index}
                className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
              >
                {index === 1 ? <span className="highlighted-text text-primary-500">{word}</span> : word}
              </h2>
            ))}
            <p className="mt-4 text-lg leading-8 text-gray-500 dark:text-gray-400">
              Stay up to date with the latest AI/ML trends, and learn about end to end data flow
              covering data engineering, MLOps, Data Science and Cloud Deployments.
            </p>
            <form onSubmit={subscribe}>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={inputEl}
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder={subscribed ? "You're subscribed !  🎉" : 'Enter your email'}
                  disabled={subscribed}
                />
                <button
                  type="submit"
                  className="flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-primary-500 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  disabled={subscribed}
                >
                  {subscribed ? 'Thank you!' : 'Subscribe'}
                </button>
              </div>
            </form>
            {error && (
              <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">
                {message}
              </div>
            )}
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-primary-500 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900 dark:text-gray-100">
                Weekly articles
              </dt>
              <dd className="mt-2 leading-7 text-gray-500 dark:text-gray-400">
                Every week I share insights on tools, processes and architectural patterns I've
                learned over a long career in the field of data.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-primary-500 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-gray-900 dark:text-gray-100">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-500 dark:text-gray-400">
                I value your privacy. Your email address will be kept confidential and you can
                unsubcribe anytime. It's all about quality, not spam.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
