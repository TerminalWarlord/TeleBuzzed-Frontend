import './App.css'
import NavBar from './components/UI/NavBar'
import Feeds from './components/Homepage/Feeds'
import Footer from './components/UI/Footer'
import MainDetailPage from './components/DetailPage/MainDetailPage'


// title, description, reviews, url, category
function App() {

  return (
    <>
      <NavBar />
      <MainDetailPage />
      <Footer />
    </>
  )
}

export default App
