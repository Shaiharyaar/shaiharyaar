import { gsap, useGSAP } from 'animations/registerGsap'
import { Button, Col, Row } from 'antd'
import { PROFILE_IMAGE } from 'assets'
import { usePrefersReducedMotion } from 'hooks'
import { useInView } from 'framer-motion'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'

import { usePageIntro } from '../../PageIntroGate'
import ResumeCvModal from '../ResumeCvModal'

const HERO_FIRST = 'Shaiharyaar'
const HERO_LAST = 'Ahmad'
const HERO_NAME = `${HERO_FIRST} ${HERO_LAST}`
const HERO_NAME_CHAR_MS = 52
/** Full name including space — same tick count for desktop (one line) and mobile (two lines) */
const HERO_TYPE_LEN = HERO_NAME.length
const HERO_FIRST_LEN = HERO_FIRST.length
/** Index in HERO_NAME where last name starts (after space) */
const HERO_LAST_START = HERO_FIRST_LEN + 1

function HeroTypedName({ sliceLen, reducedMotion, twoLine }) {
  const n = Math.min(sliceLen, HERO_TYPE_LEN)
  const done = n >= HERO_TYPE_LEN
  const showCursor = !reducedMotion && !done

  if (!twoLine) {
    return (
      <span className='hero-heading__line hero-heading__line--single'>
        {HERO_NAME.slice(0, n)}
        {showCursor ? <span className='hero-heading__cursor' aria-hidden /> : null}
      </span>
    )
  }

  const line1 = HERO_NAME.slice(0, Math.min(n, HERO_FIRST_LEN))
  const secondN = Math.max(0, n - HERO_LAST_START)
  const line2 = HERO_LAST.slice(0, secondN)
  const cursorOnFirst = showCursor && n <= HERO_FIRST_LEN
  const cursorOnSecond = showCursor && n > HERO_FIRST_LEN && n < HERO_TYPE_LEN

  return (
    <>
      <span className='hero-heading__line'>
        {line1}
        {cursorOnFirst ? <span className='hero-heading__cursor' aria-hidden /> : null}
      </span>
      <span className='hero-heading__line'>
        {line2}
        {cursorOnSecond ? <span className='hero-heading__cursor' aria-hidden /> : null}
      </span>
    </>
  )
}

const HERO_INTRO_COPY =
  "Welcome to my digital space! I'm Shaiharyaar Ahmad, a passionate software engineer with a knack for crafting seamless web experiences. Explore my journey through innovative projects, where I blend creativity with technical prowess. From international collaborations to cutting-edge technologies like React, JavaScript, and TypeScript, join me on a journey of code, design, and endless possibilities. Let's build something extraordinary together."

const HeroSection = ({ onInView }) => {
  const { animationsReady } = usePageIntro()
  const containerRef = useRef(null)
  const blobStageRef = useRef(null)
  const imageWrapRef = useRef(null)
  const isInView = useInView(containerRef)
  const reducedMotion = usePrefersReducedMotion()
  const [resumeCvOpen, setResumeCvOpen] = useState(false)
  const [typedNameLen, setTypedNameLen] = useState(0)
  const [isHeroMobileLayout, setIsHeroMobileLayout] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches,
  )

  useLayoutEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const sync = () => setIsHeroMobileLayout(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const typingDoneMs = useMemo(() => HERO_TYPE_LEN * HERO_NAME_CHAR_MS + 80, [])

  useEffect(() => {
    onInView(isInView, '#home')
  }, [isInView, onInView])

  useEffect(() => {
    if (!animationsReady) return undefined
    const mqReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || mqReduced) {
      setTypedNameLen(HERO_TYPE_LEN)
      return undefined
    }
    if (typedNameLen >= HERO_TYPE_LEN) return undefined
    const id = window.setTimeout(() => setTypedNameLen((k) => Math.min(k + 1, HERO_TYPE_LEN)), HERO_NAME_CHAR_MS)
    return () => window.clearTimeout(id)
  }, [typedNameLen, reducedMotion, animationsReady])

  useGSAP(
    () => {
      if (reducedMotion || !animationsReady) return undefined
      const root = containerRef.current
      if (!root) return undefined
      const ctx = gsap.context(() => {
        const introDelay = typingDoneMs / 1000 + 0.06
        gsap.from(root.querySelectorAll('.hero-animate-item'), {
          y: 40,
          opacity: 0,
          duration: 0.85,
          stagger: 0.11,
          ease: 'power3.out',
          delay: introDelay,
        })
        const stage = blobStageRef.current
        if (stage) {
          gsap.to(stage, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: root,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.1,
            },
          })
        }
      }, root)
      return () => ctx.revert()
    },
    { dependencies: [reducedMotion, typingDoneMs, animationsReady] }
  )

  const onBlobMove = (e) => {
    if (reducedMotion || !imageWrapRef.current) return
    const rect = imageWrapRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / 25
    const dy = (e.clientY - cy) / 25
    gsap.to(imageWrapRef.current, { rotateX: -dy, rotateY: dx, duration: 0.35, ease: 'power2.out', transformPerspective: 600 })
  }

  const onBlobLeave = () => {
    if (!imageWrapRef.current) return
    gsap.to(imageWrapRef.current, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' })
  }

  const heroIntroBlock = (
    <>
      <p className='hero-paragraph hero-animate-item line-height-30 text-18'>{HERO_INTRO_COPY}</p>
      <div className='hero-animate-item hero-cta-row'>
        <Button
          type='primary'
          className='custom-btn btn-shadow'
          onClick={() => window.open('https://www.linkedin.com/in/shaiharyaar-ahmad-973a60195/', '_blank')}
        >
          View LinkedIn Profile
        </Button>
        <Button type='default' className='custom-btn ml-10' onClick={() => setResumeCvOpen(true)}>
          Resume & CV
        </Button>
      </div>
    </>
  )

  return (
    <section className='hero-section container' id='home' ref={containerRef}>
      <Row
        className='flex-1 hero-section__row'
        gutter={[
          { xs: 16, md: 30 },
          { xs: 16, md: 10 },
        ]}
        align={isHeroMobileLayout ? 'top' : 'middle'}
      >
        <Col xs={{ span: 13 }} sm={{ span: 13 }} md={{ span: 14 }} lg={{ span: 14 }} className='hero-left'>
          <div className='hero-left-inner'>
            <h1 className='hero-heading primary-text-color text-huge' aria-label={HERO_NAME}>
              <HeroTypedName sliceLen={typedNameLen} reducedMotion={reducedMotion} twoLine={isHeroMobileLayout} />
            </h1>
            <h3 className='hero-sub-heading hero-animate-item secondary-text-color text-medium'>Software Engineer</h3>
            {!isHeroMobileLayout ? <div className='hero-section__body hero-section__body--desktop'>{heroIntroBlock}</div> : null}
          </div>
        </Col>
        <Col xs={{ span: 11 }} sm={{ span: 11 }} md={{ span: 10 }} lg={{ span: 10 }} className='hero-right'>
          <div className='hero-blob-stage' ref={blobStageRef} onMouseMove={onBlobMove} onMouseLeave={onBlobLeave}>
            <div className={'image-container'} ref={imageWrapRef}>
              <img src={PROFILE_IMAGE} alt='Shaiharyaar Ahmad' draggable={false} />
            </div>
          </div>
        </Col>
      </Row>
      {isHeroMobileLayout ? (
        <Row className='hero-section__body-row'>
          <Col span={24}>
            <div className='hero-section__body hero-section__body--mobile'>{heroIntroBlock}</div>
          </Col>
        </Row>
      ) : null}
      <ResumeCvModal open={resumeCvOpen} onClose={() => setResumeCvOpen(false)} />
    </section>
  )
}

export default HeroSection
