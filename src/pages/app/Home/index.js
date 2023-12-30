import {
  ContactSection,
  // EPrimeDataSection,
  // GrowthSection,
  HeroSection,
  // LearnMoreSection,
  // PlanSection,
  SolutionsSection,
  // TestimonialsSection,
  // TrustedSection,
} from './components'
import './styles.scss'
import useHome from './useHome'

const Home = () => {
  const { handleInView } = useHome()

  return (
    <>
      <HeroSection onInView={handleInView} />
      {/* <LearnMoreSection onInView={handleInView} /> */}
      {/* <PlanSection onInView={handleInView} /> */}
      <SolutionsSection onInView={handleInView} />
      {/* <GrowthSection onInView={handleInView} /> */}
      {/* <TestimonialsSection onInView={handleInView} /> */}
      {/* <EPrimeDataSection onInView={handleInView} /> */}
      {/* <TrustedSection onInView={handleInView} /> */}
      <ContactSection onInView={handleInView} />
      <div className={'home-block-design-right'} />
      <div className={'home-block-design-left'} />
    </>
  )
}

export default Home
