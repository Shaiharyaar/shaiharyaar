import { PageLayout } from 'layouts'
import { Home } from 'pages/app'

import { Navigate, createBrowserRouter } from 'react-router-dom'

const getRoutes = () =>
  createBrowserRouter([
    {
      path: '',
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to='/app' replace />,
    },
  ])

export default getRoutes
