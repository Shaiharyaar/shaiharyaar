const PUBLIC = process.env.PUBLIC_URL || ''

/** Favicon asset: dark-mark when system UI is dark, light-mark when system UI is light. */
export function faviconHrefForColorScheme(isPrefersDark) {
  return `${PUBLIC}/image/sa-logo-${isPrefersDark ? 'dark' : 'light'}.png`
}

export function getPrefersColorSchemeDark() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function subscribePrefersColorScheme(listener) {
  if (typeof window === 'undefined') return () => {}
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', listener)
  return () => mq.removeEventListener('change', listener)
}

export function applyFaviconFromSystemScheme() {
  const link = document.getElementById('theme-favicon')
  if (!link) return
  link.href = faviconHrefForColorScheme(getPrefersColorSchemeDark())
  link.type = 'image/png'
}

export function subscribeFaviconToSystemScheme() {
  return subscribePrefersColorScheme(() => {
    applyFaviconFromSystemScheme()
  })
}
