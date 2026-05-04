import { ConfigProvider } from 'antd'
import React from 'react'
import { useTheme } from 'theme/ThemeProvider'
import { getAntdThemeConfig } from 'theme/tokens'

const WithAntdTheme = ({ children }) => {
  const { theme } = useTheme()
  const themeConfig = getAntdThemeConfig(theme)

  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
}

export default WithAntdTheme
