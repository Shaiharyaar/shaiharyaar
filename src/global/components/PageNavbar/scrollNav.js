export function getScrollBehavior() {
  if (typeof window === 'undefined') return 'auto'
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

/** @param {string} href e.g. `#home`, `#my-projects` */
export function scrollToSectionByHash(href, navigate) {
  const id = href.replace(/^#/, '')
  const el = document.getElementById(id)
  navigate({ pathname: '/', hash: id })
  requestAnimationFrame(() => {
    el?.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' })
  })
}
