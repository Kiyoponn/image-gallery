'use client'

import { ImageDataType } from '@/utils/Types'
import clsx from 'clsx'
import useSWR from 'swr'
import NextImage from './NextImage'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function ImageGrid({ slug }: { slug?: string }) {
  const { data } = useSWR<Array<ImageDataType>>('/api/images', fetcher)

  return (
    <main
      className={clsx(
        'columns-1 gap-x-4 gap-y-4 mt-4',
        'md:columns-2',
        'lg:columns-3 lg:gap-x-8'
      )}
    >
      {data &&
        data
          .filter(({ category }) => {
            if (slug) {
              return category === slug
            }
            return true
          })
          .map(({ _id, imageUrl, alt, ratio }) => (
            <NextImage key={_id} image={imageUrl} alt={alt} ar={ratio} />
          ))}
    </main>
  )
}
