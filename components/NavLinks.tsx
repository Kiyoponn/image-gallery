'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'

import { ImageDataType } from '@/utils/Types'

export default function NavLinks() {
  const query = useSearchParams().get('category')

  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data } = useSWR<ImageDataType[]>('/api/images', fetcher)

  return (
    <nav className='mt-6 md:mt-8 text-sm'>
      <ul className='flex gap-5'>
        <li
          className={clsx(
            'dark:hover:text-rose-five hover:text-rose-seven',
            query === null && 'text-rose-seven dark:text-rose-five'
          )}
        >
          <Link href='/'>All</Link>
        </li>
        {data &&
          data
            .filter((d) => {
              const category = d.category
              const index = data.findIndex((d) => d.category === category)
              return index === data.indexOf(d)
            })
            .map(({ _id, category }) => (
              <li
                key={_id}
                className={clsx(
                  'dark:hover:text-rose-five hover:text-rose-seven',
                  query === category + 1 &&
                    'text-rose-seven dark:text-rose-five'
                )}
              >
                <Link className='capitalize' href={`?category=${category}`}>
                  {category}
                </Link>
              </li>
            ))}
      </ul>
    </nav>
  )
}
