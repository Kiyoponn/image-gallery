import { Roboto } from '@next/font/google'
import clsx from 'clsx'

import '@/src/app/globals.css'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={clsx('scroll-smooth', roboto.className)}>
      <head />
      <body>{children}</body>
    </html>
  )
}
