import './App.css'
import Card from './components/Card'
import Featured from './components/Homepage/FeaturedPostSlider/Featured'
import Header from './components/Header'
import NavBar from './components/UI/NavBar'
import Feeds from './components/Homepage/Feeds'


const ITEMS = [
  {
    title: "Skeddy",
    description: "Skeddy is a simple yet powerful reminder tool that can help you create and manage your reminders.",
    category: "Utilities",
    image: "https://telegramic.org/media/avatars/bots/179662323.jpg",
    url: "https://t.me/",
    reviews: "4/5"
  },
  {
    title: "Skeddy",
    description: "Skeddy is a simple yet powerful reminder tool that can help you create and manage your reminders.",
    category: "Utilities",
    image: "https://telegramic.org/media/avatars/bots/179662323.jpg",
    url: "https://t.me/",
    reviews: "4/5"
  },
  {
    title: "Skeddy",
    description: "Skeddy is a simple yet powerful reminder tool that can help you create and manage your reminders.",
    category: "Utilities",
    image: "https://telegramic.org/media/avatars/bots/179662323.jpg",
    url: "https://t.me/",
    reviews: "4/5"
  },
  {
    title: "Skeddy",
    description: "Skeddy is a simple yet powerful reminder tool that can help you create and manage your reminders.",
    category: "Utilities",
    image: "https://telegramic.org/media/avatars/bots/179662323.jpg",
    url: "https://t.me/",
    reviews: "4/5"
  },
  {
    title: "Skeddy",
    description: "Skeddy is a simple yet powerful reminder tool that can help you create and manage your reminders.",
    category: "Utilities",
    image: "https://telegramic.org/media/avatars/bots/179662323.jpg",
    url: "https://t.me/",
    reviews: "4/5"
  },
  {
    title: "Skeddy",
    description: "Skeddy is a simple yet powerful reminder tool that can help you create and manage your reminders.",
    category: "Utilities",
    image: "https://telegramic.org/media/avatars/bots/179662323.jpg",
    url: "https://t.me/",
    reviews: "4/5"
  }
]

// title, description, reviews, url, category
function App() {

  return (
    <>
      <NavBar />
      <Featured />
      <Header />
      <div className='flex justify-center'>
        {/* <div className='mx-5 lg:mx-[6rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-center gap-x-4'>

          {ITEMS.map(item => {
            return <Card key={item.title} {...item} />
          })}


        </div> */}
        <Feeds />
      </div>
    </>
  )
}

export default App
