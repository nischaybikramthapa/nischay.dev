import React from 'react'
import imagesData from '@/data/certifications'
import Image from 'next/image'
import Link from 'next/link'


const ImageGrid = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="flex flex-col items-center">
        <div className="mb-8 max-w-[900px] text-center md:mb-12 lg:mb-16">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            Earned <span className="highlighted-text text-primary-500">certifications</span> and
            badges so far...
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-500 dark:text-gray-400">
            Each badge and certificate is a stepping stone in my journey towards excellence and
            unwavering passion for Cloud, Data and AI.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {imagesData.map((image, index) => (
            <Link key={index} href={`${image.link}`} className="flex max-w-full flex-col gap-4 rounded-md px-4 md:px-2">
              <Image
                alt=""
                src={image.src}
                width={800}
                height={800}
                className="inline-block h-50 w-full rounded-2xl object-cover hover:scale-110 duration-300"
              />
              </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGrid
