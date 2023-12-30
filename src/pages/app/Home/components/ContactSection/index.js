import { Button, Col, Row, Typography } from 'antd'
import { CONTACT_US_IMAGE } from 'assets'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

const ContactSection = ({ onInView }) => {
  const containerRef = useRef()
  const isInView = useInView(containerRef)

  useEffect(() => {
    onInView(isInView, '#contact-section')
  }, [isInView, onInView])
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
          <img src={CONTACT_US_IMAGE} alt='' />
        </Col>
      </Row>
    </section>
  )
}

const ContactLeft = () => {
  const openEmail = () => {
    const email = 'mailto:shaiharyaar1998@gmail.com?subject=SendMail&body=Description'
    window.open(email, '_blank')
  }
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
      <h1 className='text-xlarge'>Contact Me</h1>
      <p className='line-height-25'>
        Feel free to reach out! Whether you have questions, collaboration ideas, or just want to
        connect, I'm here. Your feedback and inquiries are always welcome. Drop me a message, and
        let's start a conversation. I look forward to hearing from you!
      </p>
      <Row>
        <Button className='custom-btn' type='primary' onClick={openEmail}>
          shaiharyaar1998@gmail.com
        </Button>
        <Typography.Paragraph
          className={'copy-button'}
          copyable={{
            text: 'shaiharyaar1998@gmail.com',
            tooltips: ['Copy Email', 'Email copied!'],
          }}
        />
      </Row>
    </Col>
  )
}

export default ContactSection
