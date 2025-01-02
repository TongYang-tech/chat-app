import Router from './Router.jsx'
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(Router)

  return (
    <RouterProvider router={router} />
  )
}

export default App
