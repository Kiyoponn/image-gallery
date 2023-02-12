'use client'

import clsx from 'clsx'

import { ImageDataType } from '@/utils/Types'
import NextImage from './NextImage'
import { Suspense } from 'react'
import Loading from '@/app/(gallery)/loading'

export default function ImageGrid({ data }: { data: Array<ImageDataType> }) {
  return (
    <Suspense fallback={<Loading />}>
      <main
        className={clsx(
          'columns-1 gap-x-4 gap-y-4 mt-4',
          'md:columns-2',
          'lg:columns-3 lg:gap-x-8'
        )}
      >
        {data.map(({ _id, imageUrl, alt, ratio }) => (
          <NextImage key={_id} image={imageUrl} alt={alt} ar={ratio} />
        ))}
      </main>
    </Suspense>
  )
}
