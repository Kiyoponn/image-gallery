'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { Moon, Sun } from './Icons'

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  const defaultTheme = document.documentElement.getAttribute('data-theme')
  console.log('defaultTheme', defaultTheme)

  return (
    <div
      className={clsx(
        'flex h-min w-min items-center justify-center gap-1 rounded-full border p-1',
        'border-neutral-three bg-neutral-two',
        'dark:border-neutral-eight dark:bg-neutral-nine'
      )}
    >
      <button
        id='light'
        aria-label='light mode'
        onClick={() => setTheme('light')}
        className={clsx(
          'group rounded-full p-2',
          theme === 'light' && 'bg-neutral-one shadow-md'
        )}
      >
        <Sun className='dark:stroke-neutral-four dark:group-hover:stroke-neutral-one' />
      </button>
      <button
        id='dark'
        aria-label='dark mode'
        onClick={() => setTheme('dark')}
        className={clsx(
          'group rounded-full p-2',
          theme === 'dark' && 'bg-neutral-eight'
        )}
      >
        <Moon
          className={clsx(
            'stroke-neutral-seven group-hover:stroke-neutral-ten',
            'dark:stroke-neutral-one dark:group-hover:stroke-neutral-one'
          )}
        />
      </button>
    </div>
  )
}

export function ThemeTogglerLoading() {
  return (
    <div
      className={clsx(
        'flex h-min w-min items-center justify-center gap-1 rounded-full border p-1',
        'border-neutral-three bg-neutral-two',
        'dark:border-neutral-eight dark:bg-neutral-nine'
      )}
    >
      <div className='rounded-full p-2'>
        <Sun className='stroke-neutral-seven dark:stroke-neutral-four' />
      </div>
      <div className='rounded-full p-2'>
        <Moon className='stroke-neutral-seven dark:stroke-neutral-four' />
      </div>
    </div>
  )
}
