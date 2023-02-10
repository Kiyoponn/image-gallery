import clsx from 'clsx'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={clsx('scroll-smooth')}>
      <head />
      <body>{children}</body>
    </html>
  )
}
