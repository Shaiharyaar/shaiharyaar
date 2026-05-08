import { ArrowRightOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Drawer } from 'antd'
import { IconMoon, IconSun } from 'theme/ThemeModeIcons'
import { useTheme } from 'theme/ThemeProvider'

import data from './data.json'
import usePageNavbar from './usePageNavbar'

const logoSrc = (theme) =>
  `${process.env.PUBLIC_URL}/image/sa-logo-${theme === 'dark' ? 'dark' : 'light'}.png`

const PageNavbar = () => {
  const {
    isPageTop,
    isNavbarHidden,
    handleLogoClick,
    hash,
    screens,
    handlePageNavbarToggle,
    isPageNavbarDrawerOpen,
    handleNavClick,
  } = usePageNavbar()

  const { theme, toggleTheme } = useTheme()
  const scrolled = !isPageTop

  return (
    <>
      <nav
        className={`page-navbar ${isPageTop ? 'page_top' : ''} ${scrolled ? 'page-navbar--scrolled' : ''} ${
          isNavbarHidden ? 'page-navbar--hidden' : ''
        }`}
      >
        <div className={'navbar_wrapper'}>
          <div
            className='navbar-brand'
            onClick={handleLogoClick}
            role='button'
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleLogoClick()}
            aria-label='Home'
          >
            <img
              className='app-logo'
              src={logoSrc(theme)}
              alt='Shaiharyaar Ahmad'
              width={240}
              height={80}
              draggable={false}
            />
          </div>
          {screens.lg && (
            <nav className='nav-rail' aria-label='Primary'>
              {data.menuItems.map(({ id, title, href }) => (
                <a
                  key={id}
                  className={`nav-rail__link ${hash === href ? 'active' : ''}`}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {title}
                </a>
              ))}
            </nav>
          )}
          <div className='navbar-right'>
            <button
              type='button'
              className={`navbar-theme${theme === 'dark' ? ' navbar-theme--dark' : ''}`}
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              <span className='navbar-theme__highlight' aria-hidden />
              <span className='navbar-theme__cell navbar-theme__cell--sun' aria-hidden>
                <IconSun />
              </span>
              <span className='navbar-theme__cell navbar-theme__cell--moon' aria-hidden>
                <IconMoon />
              </span>
            </button>
            {!screens.lg && (
              <button
                type='button'
                className='nav-icon-btn nav-icon-btn--menu'
                aria-label='Open menu'
                aria-expanded={isPageNavbarDrawerOpen}
                onClick={handlePageNavbarToggle}
              >
                <span className='nav-menu-icon' aria-hidden>
                  <span className='nav-menu-icon__bar' />
                  <span className='nav-menu-icon__bar' />
                  <span className='nav-menu-icon__bar' />
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>
      <SmallScreenPageNavbar
        hash={hash}
        handleNavClick={handleNavClick}
        handlePageNavbarToggle={handlePageNavbarToggle}
        isPageNavbarDrawerOpen={isPageNavbarDrawerOpen}
      />
    </>
  )
}

const SmallScreenPageNavbar = ({ hash, handleNavClick, handlePageNavbarToggle, isPageNavbarDrawerOpen }) => {
  const { theme, setTheme } = useTheme()

  return (
    <Drawer
      zIndex={9999999}
      closable={false}
      placement='right'
      width='min(100%, 380px)'
      open={isPageNavbarDrawerOpen}
      className='page-navbar-drawer page-navbar-drawer--modern'
      onClose={handlePageNavbarToggle}
      styles={{
        body: {
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          maxHeight: '100dvh',
          overflow: 'hidden',
        },
      }}
    >
      <div className='drawer-shell'>
        <header className='drawer-nav-header'>
          <div className='drawer-header-top'>
            <Button
              type='text'
              className='drawer-close-btn'
              icon={<CloseOutlined />}
              aria-label='Close menu'
              onClick={handlePageNavbarToggle}
            />
          </div>
          <div className='drawer-nav-header__brand'>
            <div className='drawer-brand-avatar' aria-hidden>SA</div>
            <div className='drawer-nav-header__text'>
              <h2 className='drawer-nav-title'>Shaiharyaar Ahmad</h2>
              <p className='drawer-nav-sub'>Software developer · Portfolio</p>
            </div>
          </div>
        </header>

        <p className='drawer-nav-section-label'>Navigate</p>
        <nav className='drawer-nav-body' aria-label='Primary'>
          {data.menuItems.map(({ id, title, href }, index) => (
            <a
              key={id}
              className={`drawer-nav-link ${hash === href ? 'active' : ''}`}
              href={href}
              data-index={String(index + 1).padStart(2, '0')}
              onClick={(e) => handleNavClick(e, href)}
            >
              <span className='drawer-nav-link__label'>{title}</span>
              <span className='drawer-nav-link__chevron' aria-hidden>
                <ArrowRightOutlined />
              </span>
            </a>
          ))}
        </nav>

        <footer className='drawer-footer'>
          <div className='drawer-theme-seg' role='radiogroup' aria-label='Color theme'>
            <span className='drawer-theme-seg__label'>Theme</span>
            <div className='drawer-theme-seg__track'>
              <button
                type='button'
                role='radio'
                aria-checked={theme === 'light'}
                className={`drawer-theme-seg__btn ${theme === 'light' ? 'is-active' : ''}`}
                onClick={() => setTheme('light')}
                aria-label='Light theme'
              >
                <IconSun />
              </button>
              <button
                type='button'
                role='radio'
                aria-checked={theme === 'dark'}
                className={`drawer-theme-seg__btn ${theme === 'dark' ? 'is-active' : ''}`}
                onClick={() => setTheme('dark')}
                aria-label='Dark theme'
              >
                <IconMoon />
              </button>
            </div>
          </div>
        </footer>
      </div>
    </Drawer>
  )
}

export default PageNavbar
