const SectionHeading = ({ heading = '', subHeading = '' }) => {
  return (
    <div className='section-heading-wrapper'>
      <h2 className={'primary-text-color'}>{heading}</h2>
      <p className='secondary-text-lighten-10 sub-heading'>{subHeading}</p>
    </div>
  )
}

export default SectionHeading
