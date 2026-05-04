import { WithAntdTheme } from 'global/hoc'
import RouterConfig from 'navigation'
import { ThemeProvider } from 'theme/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <WithAntdTheme>
        <RouterConfig />
      </WithAntdTheme>
    </ThemeProvider>
  )
}

export default App
