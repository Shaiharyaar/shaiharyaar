import { Drawer } from 'antd'
import { HAMBURGER_ICON } from 'assets'
import { ReactSVG } from 'react-svg'

// import { NavLink } from "react-router-dom";
import data from './data.json'
import usePageNavbar from './usePageNavbar'

const PageNavbar = () => {
  const {
    isPageTop,
    handleLogoClick,
    hash,
    screens,
    handlePageNavbarToggle,
    isPageNavbarDrawerOpen,
  } = usePageNavbar()

  return (
    <>
      <nav className={`page-navbar  ${isPageTop ? 'page_top' : ''}`}>
        <div className={'navbar_wrapper'}>
          <div className={'app-logo'} onClick={handleLogoClick}></div>
          {screens.lg && (
            <div className={`navlinks_wrapper`}>
              {data.menuItems.map(({ id, title, href }) => (
                <a
                  key={id}
                  className={hash === href || hash + '#' === href ? 'active' : ''}
                  href={href}
                >
                  {title}
                </a>
              ))}
            </div>
          )}
          <div className='navbar-right'>
            {!screens.lg && (
              <ReactSVG
                src={HAMBURGER_ICON}
                className='humburger'
                onClick={handlePageNavbarToggle}
              />
            )}
          </div>
        </div>
      </nav>
      <SmallScreenPageNavbar
        hash={hash}
        handlePageNavbarToggle={handlePageNavbarToggle}
        isPageNavbarDrawerOpen={isPageNavbarDrawerOpen}
      />
    </>
  )
}

const SmallScreenPageNavbar = ({ hash, handlePageNavbarToggle, isPageNavbarDrawerOpen }) => {
  return (
    <Drawer
      zIndex={9999999}
      headerStyle={{ display: 'none' }}
      open={isPageNavbarDrawerOpen}
      className='page-navbar-drawer'
      onClose={handlePageNavbarToggle}
    >
      <h1>Shaiharyaar Ahmad</h1>
      <div className='navlinks_wrapper small-screen'>
        {data.menuItems.map(({ id, title, href }) => (
          <a key={id} className={hash === href || hash + '#' === href ? 'active' : ''} href={href}>
            {title}
          </a>
        ))}
      </div>
    </Drawer>
  )
}

export default PageNavbar
