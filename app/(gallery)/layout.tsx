import { Roboto } from '@next/font/google'
import clsx from 'clsx'
import { ServerThemeProvider } from 'next-themes'

import Header from '@/components/Header'
import Providers from '@/components/ThemeProvider'

import '@/app/globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'optional',
  preload: true,
})

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider attribute='class' defaultTheme='dark'>
      <html lang='en' className={roboto.className}>
        <head />
        <body className='dark:bg-neutral-ten dark:text-neutral-one bg-neutral-one text-neutral-ten'>
          <Providers>
            <section
              className={clsx(
                'mx-auto py-12 px-4',
                'md:py-16 md:px-8',
                'lg:py-24 lg:px-8 lg:max-w-5xl'
              )}
            >
              <Header />
              {children}
            </section>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}