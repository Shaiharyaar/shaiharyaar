import { gsap, ScrollTrigger, useGSAP } from 'animations/registerGsap'
import { SectionHeading } from 'global/components'
import { usePrefersReducedMotion } from 'hooks'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

import data from './data.json'
import SkillCardIcon from './SkillCardIcon'

const SCROLL_FACTOR_DESKTOP = 1.35
const SCROLL_FACTOR_MOBILE = 1.82

function splitSkillsIntoRows(skills) {
  const even = skills.length % 2 === 0 ? skills : skills.slice(0, -1)
  const mid = even.length / 2
  return [
    { id: 'marquee-a', items: even.slice(0, mid) },
    { id: 'marquee-b', items: even.slice(mid) },
  ]
}

function measureTrackDx(trackEl) {
  if (!trackEl) return 0
  const strip = trackEl.closest('.skills-marquee__strip')
  if (!strip) return 0
  return Math.max(0, trackEl.scrollWidth - strip.clientWidth)
}

const SkillsMarqueeSection = ({ onInView }) => {
  const sectionRef = useRef(null)
  const stageRef = useRef(null)
  const trackRefs = useRef([])
  const isInView = useInView(sectionRef, { margin: '-12% 0px' })
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    onInView(isInView, '#skills')
  }, [isInView, onInView])

  useGSAP(
    () => {
      if (reducedMotion) return undefined
      const stage = stageRef.current
      const t0 = trackRefs.current[0]
      const t1 = trackRefs.current[1]
      if (!stage || !t0 || !t1) return undefined

      const mm = gsap.matchMedia()

      const ctx = gsap.context(() => {
        const scrollDistance = (factor) =>
          Math.round(Math.max(measureTrackDx(t0), measureTrackDx(t1), 8) * factor)

        const buildPinnedMarquee = (scrollFactor) =>
          gsap
            .timeline({
              scrollTrigger: {
                trigger: stage,
                start: 'center center',
                end: () => `+=${scrollDistance(scrollFactor)}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
              },
            })
            .fromTo(t0, { x: 0 }, { x: () => -measureTrackDx(t0), ease: 'none', duration: 1 }, 0)
            .fromTo(
              t1,
              { x: () => -measureTrackDx(t1) },
              { x: 0, ease: 'none', duration: 1 },
              0
            )

        mm.add('(min-width: 769px)', () => {
          buildPinnedMarquee(SCROLL_FACTOR_DESKTOP)
        })

        mm.add('(max-width: 768px)', () => {
          buildPinnedMarquee(SCROLL_FACTOR_MOBILE)
        })

        requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })
      }, sectionRef)

      return () => {
        mm.revert()
        ctx.revert()
      }
    },
    { dependencies: [reducedMotion] }
  )

  const setTrackRef = (index) => (el) => {
    trackRefs.current[index] = el
  }

  const rows = splitSkillsIntoRows(data.skills)

  return (
    <section
      ref={sectionRef}
      id='skills'
      className={`skills-marquee ${reducedMotion ? 'skills-marquee--static' : ''}`}
    >
      <div className='skills-marquee__intro container'>
        <SectionHeading heading={data.sectionTitle} subHeading={data.sectionSub} />
      </div>

      <div ref={stageRef} className='skills-marquee__stage'>
        {rows.map((row, rowIndex) => (
          <div key={row.id} className={`skills-marquee__row skills-marquee__row--${row.id}`}>
            <div className='skills-marquee__strip'>
              <div
                ref={setTrackRef(rowIndex)}
                className='skills-marquee__track'
                aria-label={`Skills, row ${rowIndex + 1} of 2`}
              >
                {row.items.map((item) => (
                  <article
                    key={item.id}
                    className={`skills-card${item.core ? ' skills-card--core' : ''}`}
                    data-skill-tier={item.core ? 'core' : undefined}
                  >
                    <div className='skills-card__top'>
                      <SkillCardIcon id={item.id} title={item.title} />
                    </div>
                    <h3 className='skills-card__title'>{item.title}</h3>
                    <p className='skills-card__description'>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsMarqueeSection
