import './App.css'
import NavBar from './components/UI/NavBar'
import Feeds from './components/Homepage/Feeds'
import Footer from './components/UI/Footer'


// title, description, reviews, url, category
function App() {

  return (
    <>
      <NavBar />
      {/* <Featured /> */}
      {/* <Header /> */}
      <div className='flex justify-center'>
        {/* <div className='mx-5 lg:mx-[6rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-center gap-x-4'>

          {ITEMS.map(item => {
            return <Card key={item.title} {...item} />
          })}


        </div> */}
        <Feeds />
      </div>
      <Footer />
    </>
  )
}

export default App
