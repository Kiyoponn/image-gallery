import { Roboto_Slab } from '@next/font/google'
import { ServerThemeProvider } from 'next-themes'

import './globals.css'

const robotoslab = Roboto_Slab({ weight: '500', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider attribute='class' defaultTheme='dark'>
      <html lang='en' className={robotoslab.className}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body className='dark:bg-neutral-ten dark:text-neutral-one bg-neutral-one text-neutral-ten '>
          {children}
        </body>
      </html>
    </ServerThemeProvider>
  )
}
