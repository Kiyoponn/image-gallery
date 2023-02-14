'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'

import { Moon, Sun } from './Icons'

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={clsx(
        'flex h-min w-min items-center justify-center gap-1 rounded-full border p-1',
        'border-neutral-three bg-neutral-two',
        'dark:border-neutral-eight dark:bg-neutral-nine'
      )}
    >
      <span
        className={clsx(
          'group relative rounded-full',
          theme === 'light' && 'bg-neutral-one shadow-md'
        )}
      >
        <input
          type='radio'
          id='theme-light'
          value='light'
          name='theme'
          onChange={() => setTheme('light')}
          className='absolute appearance-none'
          {...{ checked: theme === 'light' }}
        />
        <label
          htmlFor='theme-light'
          aria-label='Switch to light mode'
          title='Switch to light mode'
          className='flex cursor-pointer items-center justify-center p-2'
        >
          <Sun className='dark:stroke-neutral-four dark:group-hover:stroke-neutral-one' />
        </label>
      </span>
      <span
        className={clsx(
          'group relative rounded-full',
          theme === 'dark' && 'bg-neutral-eight'
        )}
      >
        <input
          type='radio'
          id='theme-dark'
          value='dark'
          name='theme'
          onChange={() => setTheme('dark')}
          className='absolute appearance-none'
          {...{ checked: theme === 'dark' }}
        />
        <label
          htmlFor='theme-dark'
          aria-label='Switch to dark mode'
          title='Switch to dark mode'
          className='flex cursor-pointer items-center justify-center p-2'
        >
          <Moon
            className={clsx(
              'stroke-neutral-seven group-hover:stroke-neutral-ten',
              'dark:stroke-neutral-one dark:group-hover:stroke-neutral-one'
            )}
          />
        </label>
      </span>
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
