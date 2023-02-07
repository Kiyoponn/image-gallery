import { Roboto } from '@next/font/google'
import clsx from 'clsx'
import Link from 'next/link'
import ThemeToggler from './ThemeToggler'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export default function Header() {
  return (
    <header className='px-4 md:px-8 lg:px-0 flex flex-col lg:flex-row items-start lg:items-end justify-center max-w-5xl mx-auto'>
      <div className='mt-12'>
        <ThemeToggler />
        <h1 className='text-2xl mt-4'>Works</h1>
        <p className={clsx('text-sm mt-3 max-w-sm', roboto.className)}>
          Sed nec sit malesuada cursus dolor accumsan massa semper enim. Egestas
          vel ac consectetur enim.
        </p>
      </div>
      <nav className={clsx('mt-6 text-sm', roboto.className)}>
        <ul className='flex gap-5'>
          <li className='dark:text-rose-five text-rose-seven'>
            <Link href='/'>All</Link>
          </li>
          <li className='active:text-rose-five'>
            <Link href='/'>Architecture</Link>
          </li>
          <li className='active:text-rose-five'>
            <Link href='/'>Neon</Link>
          </li>
          <li className='active:text-rose-five'>
            <Link href='/'>Landscape</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
