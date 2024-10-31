import './App.css'
import RootElement from './components/Layouts/RootElement'
import Feeds from './components/Homepage/Feeds'
import MainDetailPage from './components/DetailPage/MainDetailPage'
import Register from './components/Authentication/SignUp'
import SignIn from './components/Authentication/SignIn'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/UserProfile/Profile'
import Menu from './components/Admin/Menu';

import Lists from './components/List/Lists'
import authLoader, { dashboardAuthLoader } from './utils/authLoader'
import AddItem from './components/AddItems/AddItem'
import ArticleDetails from './components/Blog/ArticleDetails'
import ErrorPage from './components/UI/ErrorPage'
import BlogPosts from './components/Blog/BlogPosts'
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: <ErrorPage />,
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
        path: 'channels', children: [
          { index: true, element: <Lists dirType="channel" /> },
          { path: ':categorySlug', element: <Lists dirType="channel" /> },
        ],
      },
      {
        path: 'groups', children: [
          { index: true, element: <Lists dirType="group" /> },
          { path: ':categorySlug', element: <Lists dirType="group" /> },
        ],
      },

      {
        path: 'profile', children: [
          { index: true, element: <Profile />, loader: authLoader },
          { path: ':username', element: <Profile /> },
        ]

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
          { index: true, element: <SignIn /> },
          { path: 'login', element: <SignIn /> },
          { path: 'register', element: <Register /> },
        ]
      },
      {
        path: 'dashboard',
        loader: dashboardAuthLoader,
        children: [
          { index: true, element: <Menu />, },
          { path: ':menu', element: <Menu />, },
          { path: 'posts/:pageNo', element: <Menu />, },
          { path: 'edit/:postSlug', element: <Menu />, },
        ]
      },
      {
        path: 'article/:postSlug', element: <ArticleDetails />
      },
      {
        path: 'page/:postSlug', element: <ArticleDetails />
      },
      {
        path: 'blog', children: [
          { index: true, element: <BlogPosts /> },
          { path: ':pageNo', element: <BlogPosts /> }
        ]
      }
    ]
  }
])

function App() {

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
