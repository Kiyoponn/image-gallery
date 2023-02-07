'use client'

import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { Moon, Sun } from './Icons'

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme()
  const whichTheme = window.localStorage.getItem('theme') || theme

  return (
    <div
      className={clsx(
        'border h-min w-min p-1 rounded-full flex justify-center items-center gap-1',
        'bg-neutral-two border-neutral-three',
        'dark:bg-neutral-nine dark:border-neutral-eight'
      )}
    >
      <button
        onClick={() => setTheme('light')}
        className={clsx(
          'group rounded-full p-2',
          whichTheme === 'light' && 'bg-neutral-one shadow-md'
        )}
      >
        <Sun
          className={clsx(
            'dark:stroke-neutral-four',
            'dark:group-hover:stroke-neutral-one'
          )}
        />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={clsx(
          'group rounded-full p-2',
          whichTheme === 'dark' && 'bg-neutral-eight'
        )}
      >
        <Moon
          className={clsx(
            'stroke-neutral-seven dark:stroke-neutral-one',
            'dark:group-hover:stroke-neutral-one group-hover:stroke-neutral-ten'
          )}
        />
      </button>
    </div>
  )
}
