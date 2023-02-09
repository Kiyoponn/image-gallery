'use client'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

type Image = {
  imageSrc: StaticImageData
  altText: string
  aspectRatio: string
}

export default function NextImage({ imageSrc, altText, aspectRatio }: Image) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <figure
      className={clsx(
        'mb-4 relative group rounded dark:bg-neutral-nine bg-neutral-two overflow-hidden',
        'md:mb-4',
        'lg:mb-8',
        aspectRatio === 'square'
          ? 'aspect-square'
          : aspectRatio === 'landscape'
          ? 'aspect-landscape'
          : 'aspect-portrait'
      )}
    >
      <Image
        fill={true}
        loading='lazy'
        sizes='(min-width: 66em) 33vw, (min-width: 44em) 50vw, 100vw'
        placeholder='blur'
        alt={altText}
        src={imageSrc}
        className={clsx(
          'duration-700 object-cover ease-in-out group-hover:opacity-90 group-hover:cursor-pointer',
          isLoading
            ? 'scale-120 blur-3xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </figure>
  )
}
