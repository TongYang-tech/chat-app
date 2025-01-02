import Login from './login/LoginComponent.jsx'

const Router = [
  {
    path: '/',
    element: <div>This is the  main page application!</div>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/messages',
    element: <div>This is the message page application!</div>
  }
]

export default Router
