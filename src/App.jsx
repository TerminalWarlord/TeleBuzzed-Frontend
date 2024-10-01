import './App.css'
import NavBar from './components/UI/NavBar'
import Feeds from './components/Homepage/Feeds'
import MainDetailPage from './components/DetailPage/MainDetailPage'
import Register from './components/Authentication/SignUp'
import SignIn from './components/Authentication/SignIn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/UserProfile/Profile'
import Dashboard from './components/Admin/Dashboard';

import Lists from './components/List/Lists'
import authLoader from './utils/authLoader'
import AddItem from './components/AddItems/AddItem'

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
        path: '/admin', element: <Dashboard />,

      },
      {
        path: '/channels', element: <Lists dirType='channels' />,

      },
      {
        path: '/groups', element: <Lists dirType='groups' />,

      },

      {
        path: '/profile', element: <Profile />, loader: authLoader

      },
      {
        path: '/bot/:botId', element: <MainDetailPage />
      },

      {
        path: '/add',
        loader: authLoader,
        children: [
          {
            index: true, element: <AddItem />,
          },
          {
            path: ':type', element: <AddItem />,
          }
        ]
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
