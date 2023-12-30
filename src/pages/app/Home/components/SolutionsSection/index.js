import { Col, Row, Grid, Space, Button } from 'antd'
import { SectionHeading } from 'global/components'
import solutions from './data.json'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

const { useBreakpoint } = Grid
const SolutionsSection = ({ onInView }) => {
  const screens = useBreakpoint()
  const containerRef = useRef()
  const isInView = useInView(containerRef)

  useEffect(() => {
    onInView(isInView, '#my-projects')
  }, [isInView, onInView])

  return (
    <section className='projects-section container pt-100' id='my-projects' ref={containerRef}>
      <SectionHeading
        heading='My Projects'
        subHeading='Explore my diverse portfolio showcasing innovative solutions and cutting-edge software development'
      />

      <Row className='solutions-listing' gutter={[0, 60]}>
        {solutions.map((solution, index) => (
          <Col key={index} span={24} className={'mt-40'}>
            {<SolutionSection {...solution} key={solution?.heading} isMdBreakpoint={screens.md} />}
          </Col>
        ))}
      </Row>
    </section>
  )
}

const SolutionSection = (props) => (
  <Row gutter={[30, 10]}>
    <SolutionLeft {...props} />
    <SolutionRight {...props} />
  </Row>
)

const SolutionLeft = ({ heading, description, link, isImageFirst }) => (
  <Col xs={24} md={10} order={isImageFirst ? 1 : 0} className={'information-container'}>
    <h2>{heading}</h2>
    <Space direction='vertical'>
      <div className='feature-text'>
        <p className='m-0'>{description}</p>
      </div>
      <Space direction='vertical'>
        <Button type={'primary btn-shadow'} onClick={() => window.open(link, '_blank').focus()}>
          {'Visit Website'}
        </Button>
      </Space>
    </Space>
  </Col>
)

const SolutionRight = ({ isMdBreakpoint, img, link, isImageFirst }) => (
  <Col
    xs={24}
    md={14}
    className={`feature-image-wrapper ${isImageFirst ? '' : 'odd'} ${
      isMdBreakpoint ? 'isMd' : ''
    } `}
    order={isImageFirst ? 0 : 1}
  >
    <img
      src={require(`../../../../../assets/directory/images/${img}`)}
      onClick={() => window.open(link, '_blank').focus()}
      alt='feature'
    />
  </Col>
)

export default SolutionsSection
