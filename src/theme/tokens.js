import { theme as antdTheme } from 'antd'

/** Central palette — dark purple base, violet accents */
export const palette = {
  light: {
    bg: '#f5f0ff',
    bgElevated: '#ffffff',
    surface: '#ebe4ff',
    surface2: '#ddd6fe',
    text: '#1e1033',
    textMuted: '#5c4d7a',
    textSubtle: '#7c6a9e',
    border: 'rgba(76, 29, 149, 0.14)',
    borderStrong: 'rgba(76, 29, 149, 0.22)',
    primary: '#7c3aed',
    accent: '#a855f7',
    accent2: '#c026d3',
    glow: 'rgba(124, 58, 237, 0.35)',
    navbarBg: 'rgba(245, 240, 255, 0.72)',
    footerBg: '#1a0d2e',
    footerText: '#e9d5ff',
    heroBlob1: '#7c3aed',
    heroBlob2: '#c026d3',
    shadow: 'rgba(49, 10, 87, 0.12)',
    shadowLift: 'rgba(49, 10, 87, 0.2)',
  },
  dark: {
    bg: '#0f0618',
    bgElevated: '#1a0d2e',
    surface: '#241538',
    surface2: '#2d1b42',
    text: '#f3e8ff',
    textMuted: '#c4b5dc',
    textSubtle: '#9d8ab8',
    border: 'rgba(196, 181, 220, 0.12)',
    borderStrong: 'rgba(196, 181, 220, 0.2)',
    primary: '#a855f7',
    accent: '#c084fc',
    accent2: '#e879f9',
    glow: 'rgba(168, 85, 247, 0.45)',
    navbarBg: 'rgba(15, 6, 24, 0.75)',
    footerBg: '#0a0410',
    footerText: '#ddd6fe',
    heroBlob1: '#6d28d9',
    heroBlob2: '#a21caf',
    shadow: 'rgba(0, 0, 0, 0.45)',
    shadowLift: 'rgba(0, 0, 0, 0.55)',
  },
}

export function getAntdThemeConfig(mode) {
  const isDark = mode === 'dark'
  const p = isDark ? palette.dark : palette.light
  return {
    algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: p.primary,
      colorInfo: p.accent,
      colorSuccess: '#22c55e',
      colorWarning: '#fbbf24',
      colorError: '#f43f5e',
      colorBgBase: p.bg,
      colorBgLayout: p.bg,
      colorBgContainer: p.bgElevated,
      colorText: p.text,
      colorTextSecondary: p.textMuted,
      colorTextTertiary: p.textSubtle,
      colorBorder: p.border,
      colorBorderSecondary: p.borderStrong,
      borderRadius: 10,
      wireframe: false,
    },
    components: {
      Button: {
        primaryShadow: `0 6px 20px ${p.glow}`,
      },
      Drawer: {
        colorBgElevated: p.bgElevated,
      },
    },
  }
}
