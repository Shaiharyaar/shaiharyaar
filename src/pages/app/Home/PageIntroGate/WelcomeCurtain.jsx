import { gsap, useGSAP } from 'animations/registerGsap'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import './WelcomeCurtain.scss'

/** Vertical curtain folds — odd count keeps a visual center */
const STRIP_COUNT = 21

function stripClassName(index) {
  const mid = Math.floor(STRIP_COUNT / 2)
  if (index < mid) return 'welcome-curtain__strip welcome-curtain__strip--edge-left'
  if (index > mid) return 'welcome-curtain__strip welcome-curtain__strip--edge-right'
  return 'welcome-curtain__strip welcome-curtain__strip--center'
}

const WelcomeCurtain = ({ onComplete }) => {
  const rootRef = useRef(null)
  const onCompleteRef = useRef(onComplete)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useGSAP(
    () => {
      const el = rootRef.current
      if (!el) return undefined
      const strips = el.querySelectorAll('.welcome-curtain__strip')
      const title = el.querySelector('.welcome-curtain__title')
      if (!strips.length || !title) return undefined

      gsap.set(strips, { yPercent: 0 })
      gsap.set(title, { opacity: 0, y: 36, scale: 0.92 })

      const tl = gsap.timeline({
        onComplete: () => onCompleteRef.current?.(),
      })

      tl.to(title, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.68,
        ease: 'back.out(1.25)',
      })
      tl.to({}, { duration: 0.48 })
      tl.addLabel('lift')
      tl.to(
        title,
        {
          opacity: 0,
          y: -28,
          scale: 1.08,
          duration: 0.4,
          ease: 'power3.in',
        },
        'lift'
      )
      tl.to(
        strips,
        {
          yPercent: -100,
          duration: 1.22,
          ease: 'power4.inOut',
          stagger: {
            each: 0.045,
            from: 'center',
          },
        },
        'lift+=0.06'
      )

      return () => {
        tl.kill()
      }
    },
    { dependencies: [] }
  )

  return createPortal(
    <div
      ref={rootRef}
      className='welcome-curtain'
      role='dialog'
      aria-modal='true'
      aria-labelledby='welcome-curtain-title'
    >
      <div className='welcome-curtain__strips' aria-hidden>
        {Array.from({ length: STRIP_COUNT }, (_, i) => (
          <div key={i} className={stripClassName(i)} />
        ))}
      </div>
      <p id='welcome-curtain-title' className='welcome-curtain__title'>
        Welcome
      </p>
    </div>,
    document.body
  )
}

export default WelcomeCurtain
