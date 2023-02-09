'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { categories } from '@/utils/db/data'

export default function NavLinks() {
  const query = Number(useSearchParams().get('category'))

  return (
    <nav className='mt-6 md:mt-8 text-sm'>
      <ul className='flex gap-5'>
        <li
          className={clsx(
            'dark:hover:text-rose-five hover:text-rose-seven',
            query === 0 && 'text-rose-seven dark:text-rose-five'
          )}
        >
          <Link href='/'>All</Link>
        </li>
        {categories.map(({ name }, index) => (
          <li
            key={index + 1}
            className={clsx(
              'dark:hover:text-rose-five hover:text-rose-seven',
              query === index + 1 && 'text-rose-seven dark:text-rose-five'
            )}
          >
            <Link href={`/?category=${index + 1}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
