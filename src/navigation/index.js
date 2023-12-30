import { RouterProvider } from 'react-router-dom'
import getRoutes from './routes'

const RouterConfig = () => {
  return <RouterProvider router={getRoutes()} />
}

export default RouterConfig
