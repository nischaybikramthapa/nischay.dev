'use client'

import CountUp from 'react-countup'

const stats = [
  { id: 1, label: 'Customers', info: 'enabled to make data-informed decisions', value: 10 },
  { id: 2, label: 'Reduction', info: 'in infrastructure cost by building in the cloud', value: 40 },
  { id: 3, label: 'Revenue',info: 'generated by delivering the fit-for-purpose solution', value: 2 },
  { id: 4, label: 'Hours', info: 'saved during transitioning from data to decisions', value: 96},
]

export default function Stats() {
  return (
    <div className="container px-6 py-10 mx-auto text-center">
      <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        Career <span className="highlighted-text text-blue-600">milestones</span>
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
        Here's a snapshot of what I have accomplished so far in my data journey.
      </p>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              <h3 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <CountUp
                  duration={2.75}
                  end={stat.value}
                  prefix={stat.label === 'Revenue' ? '$' : ''}
                  suffix={(() => {
                    switch (stat.label) {
                      case 'Revenue':
                        return 'M+'
                      case 'Reduction':
                        return '%'
                      case 'Yet Another Label':
                        return 'YetAnotherSuffix'
                      default:
                        return '+'
                    }
                  })()}
                />
              </h3>
              <h5 className="text-md font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:text-2xl md:leading-14">
                {stat.label}
              </h5>
              <p className="text-base font-medium leading-7 text-center text-gray-400">
                {stat.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Statistic = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid w-full gap-10 row-gap-8 lg:grid-cols-3">
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl">
              <CountUp end={86} />
            </h6>
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <svg className="text-gray-500 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Downloads</p>
          <p className="text-gray-500">
            Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the Amazon. They’re very
            famous and very high-maintenance effort.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl">
              <CountUp end={1300} />
            </h6>
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <svg className="text-gray-500 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Subscribers</p>
          <p className="text-gray-500">
            One day, after filming a scene deep in the rainforest, the three actors and their agents
            decide to head back to home base by foot.
          </p>
        </div>
        <div>
          <div className="flex">
            <h6 className="mr-2 text-4xl font-bold md:text-5xl">
              <CountUp end={5200} />
            </h6>
            <div className="flex items-center justify-center rounded-full w-7 h-7">
              <svg className="text-gray-500 w-7 h-7" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <p className="mb-2 font-bold md:text-lg">Cookies</p>
          <p className="text-gray-500">
            Suddenly, they come to a large river. On the riverbank, they find a small rowboat, but
            it’s only big enough to hold two of them at one time.
          </p>
        </div>
      </div>
    </div>
  )
}