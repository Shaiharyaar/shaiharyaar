import { ArrowRightOutlined, LinkOutlined } from '@ant-design/icons'
import { gsap, useGSAP } from 'animations/registerGsap'
import { Button, Modal, Space, Tag } from 'antd'
import { SectionHeading } from 'global/components'
import { usePrefersReducedMotion } from 'hooks'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

import solutions from './data.json'

const VISIBLE_TAGS = 3

const SolutionsSection = ({ onInView }) => {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef)
  const reducedMotion = usePrefersReducedMotion()
  const [activeSolution, setActiveSolution] = useState(null)

  const closeModal = useCallback(() => setActiveSolution(null), [])

  useEffect(() => {
    onInView(isInView, '#my-projects')
  }, [isInView, onInView])

  useGSAP(
    () => {
      if (reducedMotion) return undefined
      const root = containerRef.current
      if (!root) return undefined
      const ctx = gsap.context(() => {
        root.querySelectorAll('.project-card').forEach((card) => {
          gsap.from(card, {
            y: 56,
            opacity: 0,
            duration: 0.75,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          })
        })
      }, root)
      return () => ctx.revert()
    },
    { dependencies: [reducedMotion] }
  )

  return (
    <section className='projects-section container pt-100' id='my-projects' ref={containerRef}>
      <SectionHeading
        heading='My Projects'
        subHeading='Explore my diverse portfolio showcasing innovative solutions and cutting-edge software development'
      />

      <div className='projects-grid' role='list'>
        {solutions.map((solution, index) => (
          <div key={solution.heading} className='projects-grid__cell' role='listitem'>
            <ProjectCard solution={solution} index={index} onOpenDetails={setActiveSolution} />
          </div>
        ))}
      </div>

      <ProjectDetailModal solution={activeSolution} onClose={closeModal} />
    </section>
  )
}

const ProjectCard = ({ solution, index, onOpenDetails }) => {
  const { heading, summary, img, role, year, stack } = solution
  const imgSrc = require(`../../../../../assets/directory/images/${img}`)
  const stackList = stack || []
  const visibleStack = stackList.slice(0, VISIBLE_TAGS)
  const extraCount = stackList.length - visibleStack.length

  const open = () => onOpenDetails(solution)

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  }

  return (
    <article
      className='project-card project-card--compact'
      style={{ animationDelay: `${index * 0.05}s` }}
      role='button'
      tabIndex={0}
      aria-label={`${heading}: view full project details`}
      onClick={open}
      onKeyDown={onKeyDown}
    >
      <div className='project-card__media' role='presentation'>
        <img src={imgSrc} alt='' />
        <div className='project-card__media-overlay'>
          <span>View details</span>
          <ArrowRightOutlined />
        </div>
      </div>
      <div className='project-card__body'>
        <div className='project-card__meta'>
          {year && <span className='project-card__year'>{year}</span>}
          {role && <span className='project-card__role'>{role}</span>}
        </div>
        <h2 className='project-card__title'>{heading}</h2>
        <Space size={[4, 4]} wrap className='project-card__tags'>
          {visibleStack.map((tech) => (
            <Tag key={tech} className='project-tech-tag'>
              {tech}
            </Tag>
          ))}
          {extraCount > 0 && (
            <Tag className='project-tech-tag project-tech-tag--more'>{`+${extraCount}`}</Tag>
          )}
        </Space>
        <p className='project-card__summary'>{summary}</p>
        <span className='project-card__hint'>Click for full write-up and link</span>
      </div>
    </article>
  )
}

const ProjectDetailModal = ({ solution, onClose }) => {
  const open = Boolean(solution)
  const imgSrc = solution ? require(`../../../../../assets/directory/images/${solution.img}`) : ''

  return (
    <Modal
      title={solution?.heading}
      open={open}
      onCancel={onClose}
      destroyOnClose
      centered
      width='min(720px, 94vw)'
      zIndex={105000}
      className='project-detail-modal'
      wrapClassName='project-detail-modal-wrap'
      footer={
        solution ? (
          <>
            <Button type='default' className='project-detail-modal__btn' onClick={onClose}>
              Close
            </Button>
            <Button
              type='primary'
              className='custom-btn btn-shadow project-detail-modal__btn project-detail-modal__btn--primary'
              icon={<LinkOutlined />}
              href={solution.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              Visit website
            </Button>
          </>
        ) : null
      }
    >
      {solution && (
        <div className='project-detail-modal__body-inner'>
          <div className='project-detail-modal__hero'>
            <img src={imgSrc} alt='' />
          </div>
          <div className='project-detail-modal__meta'>
            {solution.year && <span className='project-detail-modal__year'>{solution.year}</span>}
            {solution.role && <span className='project-detail-modal__role'>{solution.role}</span>}
          </div>
          <Space size={[6, 6]} wrap align='start' className='project-detail-modal__tags'>
            {(solution.stack || []).map((tech) => (
              <Tag key={tech} className='project-tech-tag'>
                {tech}
              </Tag>
            ))}
          </Space>
          {solution.highlights?.length > 0 && (
            <ul className='project-detail-modal__highlights'>
              {solution.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          <p className='project-detail-modal__description'>{solution.description}</p>
        </div>
      )}
    </Modal>
  )
}

export default SolutionsSection
