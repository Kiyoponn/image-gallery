'use client'

import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'

import NextImage from '@/components/NextImage'
import { ImageDataType } from '@/utils/Types'

export default function ImageGrid() {
  const query = useSearchParams().get('category')

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data } = useSWR<ImageDataType[]>('/api/images', fetcher)

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
          .filter(({ category }: { category: string }) => {
            if (!query) return true
            return category === query
          })
          .map(({ _id, imageUrl, alt, ratio }) => (
            <NextImage key={_id} image={imageUrl} alt={alt} ar={ratio} />
          ))}
    </main>
  )
}
