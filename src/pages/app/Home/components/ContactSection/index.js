import { CheckOutlined, CopyOutlined, MailOutlined, SendOutlined } from '@ant-design/icons'
import { gsap, useGSAP } from 'animations/registerGsap'
import { Button, Col, Row } from 'antd'
import { usePrefersReducedMotion } from 'hooks'
import { useInView } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const EMAIL = 'shaiharyaar1998@gmail.com'
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent('Hello from your portfolio')}&body=${encodeURIComponent('Hi Shaiharyaar,\n\n')}`

const ContactSection = ({ onInView }) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    onInView(isInView, '#contact-section')
  }, [isInView, onInView])

  useGSAP(
    () => {
      if (reducedMotion) return undefined
      const root = containerRef.current
      if (!root) return undefined
      const ctx = gsap.context(() => {
        gsap.from(root.querySelectorAll('.contact-animate-item'), {
          y: 36,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: root,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })
      }, root)
      return () => ctx.revert()
    },
    { dependencies: [reducedMotion] }
  )

  return (
    <section className='contact-section container' id='contact-section' ref={containerRef}>
      <Row gutter={[20, 20]}>
        <ContactLeft />
        <Col
          xs={{
            order: 1,
            span: 24,
          }}
          md={{
            order: 2,
            span: 8,
          }}
          className='contact-right'
        >
          <div className='contact-animate-item contact-visual' aria-hidden>
            <div className='contact-visual__bloom contact-visual__bloom--a' />
            <div className='contact-visual__bloom contact-visual__bloom--b' />
            <div className='contact-visual__panel'>
              <div className='contact-visual__orbit-ring'>
                <span className='contact-visual__pulse-ring' />
                <span className='contact-visual__pulse-ring contact-visual__pulse-ring--delay' />
                <span className='contact-visual__orbit' />
                <span className='contact-visual__bubble contact-visual__bubble--1' />
                <span className='contact-visual__bubble contact-visual__bubble--2' />
                <span className='contact-visual__bubble contact-visual__bubble--3' />
                <span className='contact-visual__bubble contact-visual__bubble--4' />
                <span className='contact-visual__bubble contact-visual__bubble--5' />
                <span className='contact-visual__bubble contact-visual__bubble--6' />
                <span className='contact-visual__bubble contact-visual__bubble--7' />
              </div>
              <MailOutlined className='contact-visual__glyph' />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  )
}

const ContactLeft = () => {
  return (
    <Col
      xs={{
        order: 2,
        span: 24,
      }}
      md={{
        order: 1,
        span: 16,
      }}
      className='contact-left'
    >
      <h1 className='text-xlarge contact-animate-item'>Contact Me</h1>
      <p className='line-height-25 contact-animate-item contact-intro'>
        Feel free to reach out! Whether you have questions, collaboration ideas, or just want to connect, I'm here. Your feedback and inquiries are
        always welcome.
      </p>
      <div className='contact-animate-item'>
        <EmailTransmission />
      </div>
    </Col>
  )
}

const EmailTransmission = () => {
  const [revealed, setRevealed] = useState(false)
  const [copied, setCopied] = useState(false)
  const stripRef = useRef(null)
  const burstRef = useRef(null)
  const reducedMotion = usePrefersReducedMotion()

  const playReveal = useCallback(() => {
    setRevealed(true)
    if (reducedMotion) return
    requestAnimationFrame(() => {
      const strip = stripRef.current
      if (!strip) return
      gsap.fromTo(
        strip,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0.4 },
        { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.65, ease: 'power3.inOut' }
      )
      gsap.fromTo(
        strip.querySelectorAll('.email-char-row'),
        { x: -12, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.04, duration: 0.45, ease: 'power2.out', delay: 0.15 }
      )
    })
  }, [reducedMotion])

  const playCopyBurst = useCallback(() => {
    if (!burstRef.current) return
    gsap.fromTo(burstRef.current, { scale: 0.4, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)' })
    gsap.to(burstRef.current, { opacity: 0, y: -12, duration: 0.5, delay: 0.9, ease: 'power2.in' })
  }, [])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    window.setTimeout(() => playCopyBurst(), 0)
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <div className='email-transmission-outer'>
      <div className='email-transmission'>
        <div className='email-transmission__chrome'>
          <span className='email-transmission__dot' />
          <span className='email-transmission__dot' />
          <span className='email-transmission__dot' />
          <span className='email-transmission__label'>
            <MailOutlined /> Outbound · encrypted curiosity
          </span>
        </div>
        <div className='email-transmission__body'>
          {!revealed ? (
            <div className='email-transmission__locked'>
              <p className='email-transmission__teaser'>Signal masked for bots. Unlock to open a direct line.</p>
              <Button type='primary' size='large' className='custom-btn btn-shadow' icon={<SendOutlined />} onClick={playReveal}>
                Reveal address
              </Button>
            </div>
          ) : (
            <div className='email-transmission__revealed' ref={stripRef}>
              <div className='email-char-row email-row-primary'>
                <a className='email-link' href={MAILTO}>
                  {EMAIL}
                </a>
              </div>
              <div className='email-char-row email-row-actions'>
                <Button type='primary' icon={<MailOutlined />} href={MAILTO} className='custom-btn'>
                  Compose
                </Button>
                <Button icon={copied ? <CheckOutlined /> : <CopyOutlined />} onClick={handleCopy} className='custom-btn email-copy-btn'>
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              </div>
              {copied && (
                <div ref={burstRef} className='email-copy-burst' aria-live='polite'>
                  Copied to clipboard
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactSection
