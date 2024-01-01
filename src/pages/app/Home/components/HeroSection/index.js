import { Button, Col, Row } from 'antd'
import { PROFILE_IMAGE } from 'assets'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const HeroSection = ({ onInView }) => {
  const containerRef = useRef()
  const isInView = useInView(containerRef)

  useEffect(() => {
    onInView(isInView, '#')
  }, [isInView, onInView])

  return (
    <section className='hero-section container' id='#' ref={containerRef}>
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
            <h1 className='hero-heading primary-text-color text-huge'>Shaiharyaar Ahmad</h1>
            <h3 className='hero-sub-heading secondary-text-color text-medium'>
              Software developer
            </h3>
            <p className='hero-paragraph line-height-30 text-18'>
              Welcome to my digital space! I'm Shaiharyaar Ahmad, a passionate Software Developer
              with a knack for crafting seamless web experiences. Explore my journey through
              innovative projects, where I blend creativity with technical prowess. From
              international collaborations to cutting-edge technologies like React, JavaScript, and
              TypeScript, join me on a journey of code, design, and endless possibilities. Let's
              build something extraordinary together.
            </p>
            <Button
              type='primary'
              className='custom-btn btn-shadow'
              onClick={() =>
                window.open('https://www.linkedin.com/in/shaiharyaar-ahmad-973a60195/', '_blank')
              }
            >
              View LinkedIn Profile
            </Button>
            <Button
              type='default'
              className='custom-btn ml-10'
              onClick={() => {
                window.open(
                  'https://www.canva.com/design/DAF4lf5-H_0/0-j2OjXL603mKJNahdeE4Q/edit?utm_content=DAF4lf5-H_0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
                  '_blank'
                )
              }}
            >
              Look at CV
            </Button>
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
          <div className={'image-container'}>
            <img src={PROFILE_IMAGE} alt={'profile '} />
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default HeroSection
