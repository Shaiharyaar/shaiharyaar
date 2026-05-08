import { ScrollTrigger } from 'animations/registerGsap'
import { usePrefersReducedMotion } from 'hooks'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import WelcomeCurtain from './WelcomeCurtain'

const STORAGE_KEY = 'portfolio_welcome_curtain_v1'

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function writeStored() {
  try {
    localStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* ignore */
  }
}

const PageIntroContext = createContext({ animationsReady: true })

export function usePageIntro() {
  return useContext(PageIntroContext)
}

export function PageIntroProvider({ children }) {
  const reducedMotion = usePrefersReducedMotion()
  const [animationsReady, setAnimationsReady] = useState(() => {
    if (typeof window === 'undefined') return true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
    return readStored()
  })
  const [showCurtain, setShowCurtain] = useState(() => {
    if (typeof window === 'undefined') return false
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
    return !readStored()
  })

  useEffect(() => {
    if (!reducedMotion) return
    writeStored()
  }, [reducedMotion])

  useEffect(() => {
    if (!animationsReady) return
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [animationsReady])

  const handleCurtainDone = useCallback(() => {
    writeStored()
    setAnimationsReady(true)
    setShowCurtain(false)
  }, [])

  return (
    <PageIntroContext.Provider value={{ animationsReady }}>
      {children}
      {showCurtain ? <WelcomeCurtain onComplete={handleCurtainDone} /> : null}
    </PageIntroContext.Provider>
  )
}
