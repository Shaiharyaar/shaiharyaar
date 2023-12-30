import { WithAntdTheme } from 'global/hoc'
import RouterConfig from 'navigation'

const App = () => {
  return (
    <WithAntdTheme>
      <RouterConfig />
    </WithAntdTheme>
  )
}

export default App
