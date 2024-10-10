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
        path: 'bots', children: [
          { index: true, element: <Lists dirType="bot" /> },
          { path: ':categorySlug', element: <Lists dirType="bot" /> },
        ],
      },
      {
        path: '/dashboard', element: <Dashboard />,

      },
      {
        path: '/channels', element: <Lists dirType='channel' />,

      },
      {
        path: 'groups', children: [
          { index: true, element: <Lists dirType="group" /> },
          { path: ':categorySlug', element: <Lists dirType="group" /> },
        ],
      },

      {
        path: '/profile', element: <Profile />, loader: authLoader

      },
      {
        path: '/bot/:username', element: <MainDetailPage />
      },
      {
        path: '/channel/:username', element: <MainDetailPage />
      },
      {
        path: '/group/:username', element: <MainDetailPage />
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
