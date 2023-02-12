import { Roboto_Slab } from '@next/font/google'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

import NavLinks from './NavLinks'
import { ThemeTogglerLoading } from './ThemeToggler'

const roboto_slab = Roboto_Slab({
  weight: '500',
  subsets: ['latin'],
  display: 'optional',
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
    <header className='flex flex-col lg:flex-row lg:items-end justify-between'>
      <div>
        <ThemeToggler />
        <h1 className={clsx('text-2xl mt-4', roboto_slab.className)}>Works</h1>
        <p className='text-sm mt-3 md:mt-4 max-w-md'>
          Sed nec sit malesuada cursus dolor accumsan massa semper enim. Egestas
          vel ac consectetur enim.
        </p>
      </div>
      <NavLinks />
    </header>
  )
}
