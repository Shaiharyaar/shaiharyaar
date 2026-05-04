import { Grid } from 'antd'
import { usePageTop, usePrefersReducedMotion } from 'hooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSectionByHash } from './scrollNav'

const { useBreakpoint } = Grid

const SCROLL_DIR_THRESHOLD = 10

const useNavbarScrollPeek = (isPageTop, isPageNavbarDrawerOpen, reducedMotion) => {
  const [peekVisible, setPeekVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    if (isPageTop) setPeekVisible(true)
  }, [isPageTop])

  useEffect(() => {
    if (isPageNavbarDrawerOpen) setPeekVisible(true)
  }, [isPageNavbarDrawerOpen])

  useEffect(() => {
    if (reducedMotion) return undefined

    lastScrollY.current = typeof window !== 'undefined' ? window.scrollY : 0

    const onScroll = () => {
      if (isPageNavbarDrawerOpen) return

      const y = window.scrollY
      if (y < 24) {
        setPeekVisible(true)
        lastScrollY.current = y
        return
      }

      const delta = y - lastScrollY.current
      lastScrollY.current = y

      if (delta > SCROLL_DIR_THRESHOLD) setPeekVisible(false)
      else if (delta < -SCROLL_DIR_THRESHOLD) setPeekVisible(true)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reducedMotion, isPageNavbarDrawerOpen])

  const isNavbarHidden = !reducedMotion && !isPageTop && !peekVisible

  return { isNavbarHidden }
}

const usePageNavbar = () => {
  const navigate = useNavigate()
  const isPageTop = usePageTop()
  const reducedMotion = usePrefersReducedMotion()
  const location = useLocation()
  const hash = location.hash
  const screens = useBreakpoint()
  const [isPageNavbarDrawerOpen, setIsPageNavbarDrawerOpen] = useState(false)
  const { isNavbarHidden } = useNavbarScrollPeek(isPageTop, isPageNavbarDrawerOpen, reducedMotion)

  useEffect(() => {
    if (screens.lg && isPageNavbarDrawerOpen) {
      setIsPageNavbarDrawerOpen(false)
    }
  }, [screens, isPageNavbarDrawerOpen])

  const handleLogoClick = () => {
    scrollToSectionByHash('#home', navigate)
  }

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault()
      scrollToSectionByHash(href, navigate)
      setIsPageNavbarDrawerOpen(false)
    },
    [navigate]
  )

  const handlePageNavbarToggle = () => {
    setIsPageNavbarDrawerOpen(!isPageNavbarDrawerOpen)
  }

  const normalizedHash = hash && hash.length > 1 ? hash : '#home'

  return {
    isPageTop,
    isNavbarHidden,
    handleLogoClick,
    hash: normalizedHash,
    rawHash: hash,
    screens,
    handlePageNavbarToggle,
    isPageNavbarDrawerOpen,
    handleNavClick,
  }
}

export default usePageNavbar
