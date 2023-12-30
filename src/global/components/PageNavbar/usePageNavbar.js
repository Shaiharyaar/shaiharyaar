import { Grid } from 'antd'
import { usePageTop } from 'hooks'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const { useBreakpoint } = Grid

const usePageNavbar = () => {
  const navigate = useNavigate()
  const isPageTop = usePageTop()
  const hash = useLocation().hash
  const screens = useBreakpoint()
  const [isPageNavbarDrawerOpen, setIsPageNavbarDrawerOpen] = useState(false)

  useEffect(() => {
    if (screens.lg && isPageNavbarDrawerOpen) {
      setIsPageNavbarDrawerOpen(false)
    }
  }, [screens, setIsPageNavbarDrawerOpen, isPageNavbarDrawerOpen])

  const handleLogoClick = () => {
    window.location.href = '#'
  }

  const handleNavigation = (to) => {
    navigate(to)
  }

  const handlePageNavbarToggle = () => {
    setIsPageNavbarDrawerOpen(!isPageNavbarDrawerOpen)
  }

  return {
    isPageTop,
    handleLogoClick,
    handleNavigation,
    hash,
    screens,
    handlePageNavbarToggle,
    isPageNavbarDrawerOpen,
  }
}

export default usePageNavbar
