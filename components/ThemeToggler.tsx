'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { Moon, Sun } from './Icons'

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={clsx(
        'border h-min w-min p-1 rounded-full flex justify-center items-center gap-1',
        'bg-neutral-two border-neutral-three',
        'dark:bg-neutral-nine dark:border-neutral-eight'
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
        'border h-min w-min p-1 rounded-full flex justify-center items-center gap-1',
        'bg-neutral-two border-neutral-three',
        'dark:bg-neutral-nine dark:border-neutral-eight'
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
