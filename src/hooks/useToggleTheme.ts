'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const useToggleTheme = () => {
  const { theme = 'system', themes, setTheme } = useTheme()
  const [themeValue, setThemeValue] = useState<string>('system')

  useEffect(() => setThemeValue(theme), [theme])

  return { theme: themeValue, setTheme, themes }
}
