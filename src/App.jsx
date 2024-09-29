import './App.css'
import NavBar from './components/UI/NavBar'
import Feeds from './components/Homepage/Feeds'
import Footer from './components/UI/Footer'
import MainDetailPage from './components/DetailPage/MainDetailPage'
import Bots from './components/List/Bots'
import Register from './components/Authentication/SignUp'
import SignIn from './components/Authentication/Signin'


// title, description, reviews, url, category
function App() {

  return (
    <>
      <NavBar />
      {/* <MainDetailPage /> */}
      {/* <Feeds /> */}
      {/* <Bots /> */}
      {/* <Register /> */}
      <SignIn />
      <Footer />
    </>
  )
}

export default App
