import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import NavBar from './components/UI/NavBar'


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
  }
]

// title, description, reviews, url, category
function App() {

  return (
    <>
      <NavBar />
      <Header />
      <div className='flex items-center justify-center'>

        {ITEMS.map(item => {
          return <Card key={item.title} {...item} />
        })}


      </div>
    </>
  )
}

export default App
