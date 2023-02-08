import { Roboto_Slab } from '@next/font/google'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

import { ThemeTogglerLoading } from './ThemeToggler'
import NavLinks from './NavLinks'

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

export default function Header({}: {}) {

  return (
    <header className='px-4 md:px-8 lg:px-0 flex flex-col lg:flex-row items-start lg:items-end justify-center max-w-5xl mx-auto'>
      <div className='mt-12'>
        <ThemeToggler />
        <h1 className={clsx('text-2xl mt-4', roboto_slab.className)}>Works</h1>
        <p className='text-sm mt-3 max-w-sm'>
          Sed nec sit malesuada cursus dolor accumsan massa semper enim. Egestas
          vel ac consectetur enim.
        </p>
      </div>
      <NavLinks />
    </header>
  )
}
