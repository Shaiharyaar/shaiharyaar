import { gsap, useGSAP } from 'animations/registerGsap'
import { Button, Col, Row } from 'antd'
import { PROFILE_IMAGE } from 'assets'
import { usePrefersReducedMotion } from 'hooks'
import { useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

import ResumeCvModal from '../ResumeCvModal'

const HERO_NAME = 'Shaiharyaar Ahmad'
const HERO_NAME_CHAR_MS = 52

const HeroSection = ({ onInView }) => {
  const containerRef = useRef(null)
  const blobStageRef = useRef(null)
  const imageWrapRef = useRef(null)
  const isInView = useInView(containerRef)
  const reducedMotion = usePrefersReducedMotion()
  const [resumeCvOpen, setResumeCvOpen] = useState(false)
  const [typedNameLen, setTypedNameLen] = useState(0)

  const typingDoneMs = useMemo(() => HERO_NAME.length * HERO_NAME_CHAR_MS + 80, [])

  useEffect(() => {
    onInView(isInView, '#home')
  }, [isInView, onInView])

  useEffect(() => {
    const mqReduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || mqReduced) {
      setTypedNameLen(HERO_NAME.length)
      return undefined
    }
    if (typedNameLen >= HERO_NAME.length) return undefined
    const id = window.setTimeout(() => setTypedNameLen((n) => Math.min(n + 1, HERO_NAME.length)), HERO_NAME_CHAR_MS)
    return () => window.clearTimeout(id)
  }, [typedNameLen, reducedMotion])

  useGSAP(
    () => {
      if (reducedMotion) return undefined
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
    { dependencies: [reducedMotion, typingDoneMs] }
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

  return (
    <section className='hero-section container' id='home' ref={containerRef}>
      <Row className='flex-1' gutter={[30, 10]}>
        <Col
          xs={{
            order: 2,
            span: 24,
          }}
          md={{
            order: 1,
            span: 14,
          }}
          className='hero-left'
        >
          <div className='hero-left-inner'>
            <h1 className='hero-heading primary-text-color text-huge' aria-label={HERO_NAME}>
              <span className='hero-heading__typed'>{HERO_NAME.slice(0, typedNameLen)}</span>
              {!reducedMotion && typedNameLen < HERO_NAME.length ? <span className='hero-heading__cursor' aria-hidden /> : null}
            </h1>
            <h3 className='hero-sub-heading hero-animate-item secondary-text-color text-medium'>Software developer</h3>
            <p className='hero-paragraph hero-animate-item line-height-30 text-18'>
              Welcome to my digital space! I'm Shaiharyaar Ahmad, a passionate Software Developer with a knack for crafting seamless web experiences.
              Explore my journey through innovative projects, where I blend creativity with technical prowess. From international collaborations to
              cutting-edge technologies like React, JavaScript, and TypeScript, join me on a journey of code, design, and endless possibilities. Let's
              build something extraordinary together.
            </p>
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
          </div>
        </Col>
        <Col
          xs={{
            order: 1,
            span: 16,
            offset: 4,
          }}
          md={{
            order: 1,
            span: 10,
            offset: 0,
          }}
          className='hero-right'
        >
          <div className='hero-blob-stage' ref={blobStageRef} onMouseMove={onBlobMove} onMouseLeave={onBlobLeave}>
            <div className={'image-container'} ref={imageWrapRef}>
              <img src={PROFILE_IMAGE} alt='Shaiharyaar Ahmad' draggable={false} />
            </div>
          </div>
        </Col>
      </Row>
      <ResumeCvModal open={resumeCvOpen} onClose={() => setResumeCvOpen(false)} />
    </section>
  )
}

export default HeroSection
