'use client'

import clsx from 'clsx'

export default function ImageGrid({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={clsx(
        'columns-1 gap-x-4 gap-y-4 mt-4',
        'md:columns-2',
        'lg:columns-3 lg:gap-x-8'
      )}
    >
      {children}
    </main>
  )
}
