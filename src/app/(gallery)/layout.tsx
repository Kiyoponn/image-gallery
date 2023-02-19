import { Roboto } from '@next/font/google'
import clsx from 'clsx'

import Header from '@/src/components/Header'
import Provider from '@/src/components/ThemeProvider'

import '@/src/app/globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={clsx('scroll-smooth', roboto.className)}
    >
      <head />
      <body className='bg-neutral-one text-neutral-ten dark:bg-neutral-ten dark:text-neutral-one'>
        <Provider>
          <section
            className={clsx(
              'mx-auto px-4 py-12 ',
              'md:py-16 md:px-8',
              'lg:max-w-5xl lg:py-24 lg:px-8'
            )}
          >
            <Header />
            {children}
          </section>
        </Provider>
      </body>
    </html>
  )
}
