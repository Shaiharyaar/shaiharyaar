import {
  PhoneFilled,
  MailFilled,
  LinkedinFilled,
  InstagramFilled,
  GithubFilled,
  FacebookFilled,
} from '@ant-design/icons'
import { Tooltip } from 'antd'

const StackOverflowFilled = () => (
  <span>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 169.61 200' width='21' height='25'>
      <path d='M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z' fill='#bcbbbb' />
      <path
        d='M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z'
        fill='#f48024'
      />
    </svg>
  </span>
)

const contactInfo = [
  {
    label: 'phone',
    icon: <PhoneFilled />,
    tooltipText: 'Phone: +358442485210',
    value: '+358442485210',
  },
  {
    label: 'linkedIn',
    icon: <LinkedinFilled />,
    tooltipText: 'LinkedIn Profile',
    value: 'https://www.linkedin.com/in/shaiharyaar-ahmad-973a60195/',
  },
  {
    label: 'github',
    icon: <GithubFilled />,
    tooltipText: 'Github: Shaiharyaar',
    value: 'https://github.com/Shaiharyaar',
  },
  {
    label: 'stackoverflow',
    icon: <StackOverflowFilled />,
    tooltipText: 'Stack Overflow Profile',
    value: 'https://stackoverflow.com/users/11503851/shaiharyaar-ahmad',
  },
  {
    label: 'gmail',
    icon: <MailFilled />,
    tooltipText: 'Email: shaiharyaar1998@gmail.com',
    value: 'shaiharyaar1998@gmail.com',
  },
  {
    label: 'instagram',
    icon: <InstagramFilled />,
    tooltipText: 'Instagram: @salad_sherr',
    value: 'https://www.instagram.com/salad_sherr/',
  },
  {
    label: 'facebook',
    icon: <FacebookFilled />,
    tooltipText: 'Facebook Profile',
    value: 'https://www.facebook.com/shaiharyaarahmad.ahmad/',
  },
]

const PageFooter = () => {
  const handlePhoneClick = (val) => window.open(`tel:${val}`)
  const handleGmailClick = () => {
    const email = 'mailto:shaiharyaar1998@gmail.com?subject=SendMail&body=Description'
    window.open(email, '_blank')
  }
  const handleOtherMedia = (val) => {
    window.open(val, '_blank')
  }

  const handleMethod = (media, value) => {
    switch (media) {
      case 'phone':
        handlePhoneClick(value)
        break
      case 'gmail':
        handleGmailClick()
        break
      default:
        handleOtherMedia(value)
        break
    }
  }

  return (
    <footer className='page-footer'>
      {contactInfo.map((value, index) => (
        <SocialMediaItem key={index} {...value} handleMethod={handleMethod} />
      ))}
    </footer>
  )
}

const SocialMediaItem = ({ label, tooltipText, icon, handleMethod, value }) => {
  return (
    <Tooltip placement={'top'} color={mediaColors[label]} title={tooltipText}>
      <div className={`media-item ${label}`} onClick={() => handleMethod(label, value)}>
        {icon}
        <div
          className={'item-hover-circle'}
          style={{
            backgroundColor: mediaColors[label],
          }}
        />
      </div>
    </Tooltip>
  )
}

const mediaColors = {
  phone: '#19a7a4',
  facebook: '#316FF6',
  instagram: '#fbad50',
  gmail: '#c71610',
  github: '#6e5494',
  linkedIn: '#0077b5',
  stackoverflow: '#f48024',
}

export default PageFooter
