import './App.css'
import NavBar from './components/UI/NavBar'
import Feeds from './components/Homepage/Feeds'
import Footer from './components/UI/Footer'
import MainDetailPage from './components/DetailPage/MainDetailPage'
import Bots from './components/List/Bots'
import Register from './components/Authentication/SignUp'
import SignIn from './components/Authentication/Signin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        path: '/', element: <Feeds />
      },
      {
        path: '/bot/:botId', element: <MainDetailPage />
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <SignIn />,
          },
          {
            path: 'register', element: <Register />
          },
        ]
      },

      // {
      //   path: '/reviews/:botId/', element: <MainDetailPage />
      // }
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
