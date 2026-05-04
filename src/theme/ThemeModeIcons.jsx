/** Sun / moon glyphs for theme toggle (uses currentColor for light & dark UI). */

const svgBase = 'theme-mode-icon-svg'

export function IconSun({ className, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden
      className={className ? `${svgBase} ${className}` : svgBase}
      {...props}
    >
      <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='2' />
      <path
        d='M12 2v2M12 20v2M2 12h2M20 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M19.8 4.2l-1.4 1.4M5.8 18.4l-1.4 1.4'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export function IconMoon({ className, ...props }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={20}
      height={20}
      viewBox='0 0 24 24'
      fill='none'
      aria-hidden
      className={className ? `${svgBase} ${className}` : svgBase}
      {...props}
    >
      <path
        d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />
    </svg>
  )
}
