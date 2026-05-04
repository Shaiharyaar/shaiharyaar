const SectionHeading = ({ heading = '', subHeading = '' }) => {
  return (
    <div className='section-heading-wrapper section-heading-wrapper--interactive'>
      <h1 className={'primary-text-color'}>{heading}</h1>
      <p className='secondary-text-lighten-10 sub-heading'>{subHeading}</p>
    </div>
  )
}

export default SectionHeading
