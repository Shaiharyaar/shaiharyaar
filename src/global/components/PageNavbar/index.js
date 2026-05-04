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
          <p className='drawer-footer__label'>Appearance</p>
          <div className='drawer-theme-panel' role='radiogroup' aria-label='Color theme'>
            <button
              type='button'
              role='radio'
              aria-checked={theme === 'light'}
              className={`drawer-theme-panel__opt ${theme === 'light' ? 'is-active' : ''}`}
              onClick={() => setTheme('light')}
            >
              <span className='drawer-theme-panel__icon' aria-hidden>
                <IconSun />
              </span>
              <span className='drawer-theme-panel__text'>
                <span className='drawer-theme-panel__name'>Light</span>
                <span className='drawer-theme-panel__hint'>Bright surfaces</span>
              </span>
            </button>
            <button
              type='button'
              role='radio'
              aria-checked={theme === 'dark'}
              className={`drawer-theme-panel__opt ${theme === 'dark' ? 'is-active' : ''}`}
              onClick={() => setTheme('dark')}
            >
              <span className='drawer-theme-panel__icon' aria-hidden>
                <IconMoon />
              </span>
              <span className='drawer-theme-panel__text'>
                <span className='drawer-theme-panel__name'>Dark</span>
                <span className='drawer-theme-panel__hint'>Low glare</span>
              </span>
            </button>
          </div>
        </footer>
      </div>
    </Drawer>
  )
}

export default PageNavbar
