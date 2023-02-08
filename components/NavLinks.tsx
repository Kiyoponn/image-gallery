import clsx from 'clsx'
import Link from 'next/link'

import { categories } from '@/utils/db/data'

export default function NavLinks() {
  return (
    <nav className='mt-6 text-sm'>
      <ul role='tablist' className='peer flex gap-5'>
        <li
          role='tab'
          className={clsx(
            'dark:hover:text-rose-five hover:text-rose-seven',
            'dark:aria-selected:text-rose-five aria-selected:text-rose-seven'
          )}
        >
          <Link href='/'>All</Link>
        </li>
        {categories.map(({ name }, index) => (
          <li
            role='tab'
            key={index + 1}
            className={clsx(
              'dark:hover:text-rose-five hover:text-rose-seven',
              'dark:aria-selected:text-rose-five aria-selected:text-rose-seven'
            )}
          >
            <Link href={`/?category=${index + 1}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {/* <ul className='flex gap-5'>
          <li className='dark:text-rose-five text-rose-seven'>
            <Link href='/'>All</Link>
          </li>
          <li className='active:text-rose-five'>
            <Link href='?category=1'>Architecture</Link>
          </li>
          <li className='active:text-rose-five'>
            <Link href='?category=2'>Neon</Link>
          </li>
          <li className='active:text-rose-five'>
            <Link href='?category=3'>Landscape</Link>
          </li>
        </ul> */}
    </nav>
  )
}
