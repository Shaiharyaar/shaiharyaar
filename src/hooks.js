import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = (scrollRef = null) => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }, [pathname, scrollRef])
}

function usePageTop(ref = null) {
  const [isPageTop, setIsPageTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const isPageTop = ref ? ref.current.scrollTop < 50 : window.scrollY < 50
      setIsPageTop(isPageTop)
    }

    const scrollTarget = ref ? ref.current : window
    scrollTarget.addEventListener('scroll', handleScroll)
    return () => scrollTarget.removeEventListener('scroll', handleScroll)
  }, [ref])

  return isPageTop
}

// Usage

// Hook
const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )
  return debouncedValue
}

const useLaterEffect = (callback, dependencyArray) => {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      callback()
    } else {
      didMountRef.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencyArray)
}

export { useDebounce, useLaterEffect, usePageTop, useScrollToTop }

