import { Roboto_Slab } from '@next/font/google'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

import NavLinks from './NavLinks'
import { ThemeTogglerLoading } from './ThemeToggler'

const roboto_slab = Roboto_Slab({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

const ThemeToggler = dynamic(() => import('./ThemeToggler'), {
  ssr: false,
  loading() {
    return <ThemeTogglerLoading />
  },
})

export default function Header() {
  return (
    <header className='flex flex-col justify-between lg:flex-row lg:items-end'>
      <div>
        <ThemeToggler />
        <h1 className={clsx('mt-4 text-2xl', roboto_slab.className)}>
          Image Gallery
        </h1>
        <p className='mt-3 max-w-md text-sm md:mt-4'>
          Sed nec sit malesuada cursus dolor accumsan massa semper enim. Egestas
          vel ac consectetur enim.
        </p>
      </div>
      <NavLinks />
    </header>
  )
}
