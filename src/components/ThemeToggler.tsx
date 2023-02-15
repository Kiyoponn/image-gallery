'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import { Moon, Sun } from './Icons'

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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
          resolvedTheme === 'light' &&
            'bg-neutral-one shadow-md dark:bg-neutral-eight'
        )}
      >
        <input
          type='radio'
          id='theme-light'
          value='light'
          name='theme'
          onChange={(e) => setTheme(e.target.value)}
          className='absolute appearance-none'
        />
        <label
          htmlFor='theme-light'
          aria-label='Switch to light mode'
          title='Switch to light mode'
          className='flex cursor-pointer items-center justify-center p-2'
        >
          <Sun
            className={clsx(
              'stroke-neutral-ten group-hover:stroke-neutral-ten',
              'dark:stroke-neutral-four dark:group-hover:stroke-neutral-one'
            )}
          />
        </label>
      </span>
      <span
        className={clsx(
          'group relative rounded-full',
          resolvedTheme === 'dark' &&
            'bg-neutral-one shadow-md dark:bg-neutral-eight'
        )}
      >
        <input
          type='radio'
          id='theme-dark'
          value='dark'
          name='theme'
          onChange={(e) => setTheme(e.target.value)}
          className='absolute appearance-none'
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
