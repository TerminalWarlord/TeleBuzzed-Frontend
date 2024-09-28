import { SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules

import FeaturedCard from './FeaturedCard'
import Slider from "../../UI/Slider";



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
        title: "MEGA Uploader X⚡",
        description: "Remotely uploads files to MEGA.nz",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1824117532.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
    {
        title: "MEGA Uploader X⚡",
        description: "Remotely uploads files to MEGA.nz",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1824117532.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
    {
        title: "MEGA Uploader X⚡",
        description: "Remotely uploads files to MEGA.nz",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1824117532.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
    {
        title: "MEGA Uploader X⚡",
        description: "Remotely uploads files to MEGA.nz",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1824117532.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
    {
        title: "MEGA Uploader X⚡",
        description: "Remotely uploads files to MEGA.nz",
        category: "Utilities",
        image: "https://telegramic.org/media/avatars/bots/1824117532.jpg",
        url: "https://t.me/",
        reviews: "4/5"
    },
]

const Featured = () => {
    const popularBots = POPULARBOTS.map((bot, index) => (
        <SwiperSlide key={index}>
            <FeaturedCard />
        </SwiperSlide>
    ));
    return (
        <div className="flex items-center px-8">
            <Slider items={popularBots} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} />
        </div>
    )
}

export default Featured