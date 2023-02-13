'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const categories = [
  { _id: 1, category: 'architecture' },
  { _id: 2, category: 'landscape' },
  { _id: 3, category: 'neon' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className='mt-6 text-sm md:mt-8'>
      <ul className='flex gap-5'>
        <li
          className={clsx(
            'hover:text-rose-seven dark:hover:text-rose-five',
            pathname === '/' && 'text-rose-seven dark:text-rose-five'
          )}
        >
          <Link href='/'>All</Link>
        </li>
        {categories.map(({ _id, category }) => (
          <li
            key={_id}
            className={clsx(
              'hover:text-rose-seven dark:hover:text-rose-five',
              pathname === `/${category}` &&
                'text-rose-seven dark:text-rose-five'
            )}
          >
            <Link className='capitalize' href={`/${category}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
