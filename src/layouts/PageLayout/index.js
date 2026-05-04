import { PageNavbar } from 'global/components'
import { Outlet } from 'react-router-dom'

import AmbientDecor from './AmbientDecor'
import PageFooter from './Footer'

const PageLayout = () => {
  return (
    <div className='page-layout-wrapper'>
      <PageNavbar />
      <main className='page-inner'>
        <div className='page-inner__bg' aria-hidden>
          <AmbientDecor />
        </div>
        <div className='page-inner__content'>
          <Outlet />
        </div>
      </main>
      <PageFooter />
    </div>
  )
}

export default PageLayout
