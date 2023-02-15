'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { useToggleTheme } from '../hooks/useToggleTheme'
import ThemeIcon from './ThemeIcon'

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false)
  const { theme, themes, setTheme } = useToggleTheme()

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
      {themes.map((themeName: string) => (
        <span
          key={themeName}
          className={clsx(
            'relative rounded-full',
            theme === themeName &&
              'bg-neutral-one shadow-md dark:bg-neutral-eight'
          )}
        >
          <input
            id={`theme-${themeName}`}
            value={themeName}
            name='theme'
            onChange={(e) => setTheme(e.target.value)}
            className='absolute appearance-none'
            type='radio'
          />
          <label
            htmlFor={`theme-${themeName}`}
            aria-label={`Switch to ${themeName} mode`}
            title={`Switch to ${themeName} mode`}
            className='group flex cursor-pointer items-center justify-center p-2'
          >
            <ThemeIcon
              width={24}
              height={24}
              theme={themeName}
              className={clsx(
                'group-hover:stroke-neutral-ten',
                'dark:group-hover:stroke-neutral-one',
                theme === themeName &&
                  'stroke-neutral-ten dark:stroke-neutral-one'
              )}
            />
          </label>
        </span>
      ))}
    </div>
  )
}

export function ThemeTogglerLoading() {
  const { themes } = useToggleTheme()
  return (
    <div
      className={clsx(
        'flex h-min w-min items-center justify-center gap-1 rounded-full border p-1',
        'border-neutral-three bg-neutral-two',
        'dark:border-neutral-eight dark:bg-neutral-nine'
      )}
    >
      {themes.map((theme: string) => (
        <span key={theme} className='rounded-full p-2'>
          <ThemeIcon width={24} height={24} theme={theme} />
        </span>
      ))}
    </div>
  )
}
