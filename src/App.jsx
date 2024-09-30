import './App.css'
import NavBar from './components/UI/NavBar'
import Feeds from './components/Homepage/Feeds'
import MainDetailPage from './components/DetailPage/MainDetailPage'
import Register from './components/Authentication/SignUp'
import SignIn from './components/Authentication/Signin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/UserProfile/Profile'


import Lists from './components/List/Lists'
import AllReviews from './components/DetailPage/AllReviews'

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      {
        index: true, element: <Feeds />
      },
      {
        path: '/bots', element: <Lists dirType="bots" />,

      },
      {
        path: '/channels', element: <Lists dirType='channels' />,

      },
      {
        path: '/groups', element: <Lists dirType='groups' />,

      },

      {
        path: '/profile', element: <Profile />,

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
