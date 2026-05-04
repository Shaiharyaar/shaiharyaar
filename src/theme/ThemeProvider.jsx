import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { applyFaviconFromSystemScheme, subscribeFaviconToSystemScheme } from './faviconFromSystemScheme'

const STORAGE_KEY = 'shaiharyaar-theme'

const ThemeContext = createContext(null)

function readStoredTheme() {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === 'dark' || v === 'light') return v
  } catch (_) {
    /* ignore */
  }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => readStoredTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (_) {
      /* ignore */
    }
  }, [theme])

  /** Tab favicon follows OS / browser chrome (prefers-color-scheme), not in-app theme. */
  useEffect(() => {
    applyFaviconFromSystemScheme()
    return subscribeFaviconToSystemScheme()
  }, [])

  const setTheme = (t) => setThemeState(t === 'dark' ? 'dark' : 'light')
  const toggleTheme = () => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
