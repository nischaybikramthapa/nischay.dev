'use client';

import CountUp from "react-countup";


const stats = [
  { id: 1, label: 'Successful Projects', value: 250 },
  { id: 2, label: 'Annual Revenue Growth', value: 12, decimalPlaces: 1 },
  { id: 3, label: 'Global Partners', value: 2600 },
  { id: 4, label: 'Daily Website Visitors', value: 18000 },
];

export default function Stats(){
  return (
    <div className="grid w-full grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-8">
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col items-center">
          <h3 className="text-5xl font-extrabold leading-tight text-center text-dark-grey-600">
            {stat.decimalPlaces !== undefined ? `$${stat.value}m` : stat.value}
          </h3>
          <p className="text-base font-medium leading-7 text-center text-dark-grey-600">{stat.label}</p>
        </div>
      ))}
    </div>
  )
};

export const Statistic = () => {
    
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl">
              <CountUp end = {86}/>
              </h6>
              <div className="flex items-center justify-center rounded-full w-7 h-7">
                <svg
                  className="text-gray-500 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
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
              Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the
              Amazon. They’re very famous and very high-maintenance effort.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl">
                <CountUp end = {1300}/>
              </h6>
              <div className="flex items-center justify-center rounded-full w-7 h-7">
                <svg
                  className="text-gray-500 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
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
              One day, after filming a scene deep in the rainforest, the three
              actors and their agents decide to head back to home base by foot.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl">
              <CountUp end = {5200}/>
              </h6>
              <div className="flex items-center justify-center rounded-full w-7 h-7">
                <svg
                  className="text-gray-500 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
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
              Suddenly, they come to a large river. On the riverbank, they find a
              small rowboat, but it’s only big enough to hold two of them at one
              time.
            </p>
          </div>
        </div>
      </div>
    );
  };