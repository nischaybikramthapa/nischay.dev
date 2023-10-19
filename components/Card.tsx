'use client'

import { useEffect, useState } from 'react'
import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => {
  const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

    if (!isMounted) {
      return null
    }
return (
  <a href={href} className="max-w-lg mb-4">
      <div className="flex flex-col h-full overflow-hidden rounded-xl border-2 p-[6px] border-zinc-300 hover:border-black dark:border-zinc-700 hover:dark:border-white/90">
        {imgSrc && (
          <div className="flex-shrink-0 object-none">
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-72 lg:h-72"
              width={500}
              height={300}
            />
          </div>
        )}
        <div className="flex-grow p-3">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
          <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <Link
            href={href}
            className="mt-auto text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </a>
)}

export default Card
