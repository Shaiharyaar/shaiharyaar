import {
  SKILL_ANTD_ICON,
  SKILL_DEVICON_PATH,
  SKILL_SIMPLE_ICON_SLUG,
  deviconUrl,
  simpleIconCdnUrl,
} from './skillIcons'

const SkillCardIcon = ({ id, title }) => {
  const devPath = SKILL_DEVICON_PATH[id]
  if (devPath) {
    return (
      <div className='skills-card__icon skills-card__icon--brand' aria-hidden>
        <img
          className='skills-card__icon-img'
          src={deviconUrl(devPath)}
          alt=''
          loading='lazy'
          decoding='async'
          width={28}
          height={28}
        />
      </div>
    )
  }

  const slug = SKILL_SIMPLE_ICON_SLUG[id]
  if (slug) {
    return (
      <div className='skills-card__icon skills-card__icon--brand' aria-hidden>
        <img
          className='skills-card__icon-img'
          src={simpleIconCdnUrl(slug)}
          alt=''
          loading='lazy'
          decoding='async'
          width={28}
          height={28}
        />
      </div>
    )
  }

  const Icon = SKILL_ANTD_ICON[id]
  if (Icon) {
    return (
      <div className='skills-card__icon skills-card__icon--symbol' aria-hidden title={title}>
        <Icon />
      </div>
    )
  }

  return null
}

export default SkillCardIcon
