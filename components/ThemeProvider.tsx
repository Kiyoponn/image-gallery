'use client'

import { ThemeProvider } from 'next-themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider enableSystem={false} defaultTheme='dark' attribute='class'>{children}</ThemeProvider>
}
