import Slider from '../UI/Slider'
import Card from '../Card'
import { SwiperSlide } from 'swiper/react'


const POPULARBOTS = [
    {
        title: "MEGA Uploader X⚡",
        description: "Remotely uploads files to MEGA.nz",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1824117532.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
    {
        title: "Drive Uploader X⚡",
        description: "Remotely uploads files to Drive",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/948320744.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
    {
        title: "URL Uploader X⚡",
        description: "Remotely upload files to Telegram",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1101028676.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
    {
        title: "Torrent X⚡",
        description: "Upload torrents to your Google drive & Team drive",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1238408449.jpg",
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

const Feeds = () => {
    const popularBots = POPULARBOTS.map((bot, index) => (
        <SwiperSlide key={index}>
            <Card {...bot} />
        </SwiperSlide>
    ));
    return (
        <div>
            {/* popularbots */}
            <div>
                <h2 className='text-center'>Popular Bots</h2>
                { }
                <Slider items={popularBots} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={4} />
            </div>
        </div>
    )
}

export default Feeds