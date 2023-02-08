import Header from '@/components/Header'
import Providers from '@/utils/ThemeProvider'
import { Roboto } from '@next/font/google'
import { ServerThemeProvider } from 'next-themes'

import './globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'optional',
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider attribute='class' defaultTheme='dark'>
      <html lang='en' className={roboto.className}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className='dark:bg-neutral-ten dark:text-neutral-one bg-neutral-one text-neutral-ten '>
          <Providers>
            <Header />
            {children}
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
