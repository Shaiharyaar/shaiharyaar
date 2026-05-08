import {
  ContactSection,
  // EPrimeDataSection,
  // GrowthSection,
  HeroSection,
  // LearnMoreSection,
  // PlanSection,
  SkillsMarqueeSection,
  SolutionsSection,
  // TestimonialsSection,
  // TrustedSection,
} from './components'
import { PageIntroProvider } from './PageIntroGate'
import './styles.scss'
import useHome from './useHome'

const Home = () => {
  const { handleInView } = useHome()

  return (
    <PageIntroProvider>
      <HeroSection onInView={handleInView} />
      {/* <LearnMoreSection onInView={handleInView} /> */}
      {/* <PlanSection onInView={handleInView} /> */}
      <SolutionsSection onInView={handleInView} />
      <SkillsMarqueeSection onInView={handleInView} />
      {/* <GrowthSection onInView={handleInView} /> */}
      {/* <TestimonialsSection onInView={handleInView} /> */}
      {/* <EPrimeDataSection onInView={handleInView} /> */}
      {/* <TrustedSection onInView={handleInView} /> */}
      <ContactSection onInView={handleInView} />
    </PageIntroProvider>
  )
}

export default Home
