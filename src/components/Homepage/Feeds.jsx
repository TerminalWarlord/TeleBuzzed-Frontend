import Slider from '../UI/Slider'
import Card from '../UI/Card'
import { SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faRobot, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons'
import Featured from './FeaturedPostSlider/Featured'

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
        <div className='overflow-x-hidden'>
            <Featured />

            <div className='flex flex-col my-8 px-4 sm:px-6 md:px-10 lg:px-20  w-full'>
                <div className=''>
                    <div className="flex justify-center items-center mx-10">
                        <div className="relative w-full my-4">
                            <div className="h-[1.5px] bg-base-200 rounded-lg" />
                            <h2 className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-base-100 px-4 text-center uppercase font-semibold">
                                <FontAwesomeIcon icon={faRobot} className="mr-2" />
                                Popular Bots
                            </h2>
                        </div>
                    </div>

                    <Slider items={popularBots} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} spacing={20} />
                </div>

                <div className='my-8'>
                    <div className="flex justify-center items-center mx-10">
                        <div className="relative w-full my-4">
                            <div className="h-[1.5px] bg-base-200 rounded-lg" />
                            <h2 className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-base-100 px-4 text-center uppercase font-semibold">
                                <FontAwesomeIcon icon={faBullhorn} className="mr-2" />
                                Popular Channels
                            </h2>
                        </div>
                    </div>

                    <Slider items={popularBots} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={4} spacing={20} />
                </div>

                <div className='my-8'>
                    <div className="flex justify-center items-center mx-10">
                        <div className="relative w-full my-4">
                            <div className="h-[1.5px] bg-base-200 rounded-lg" />
                            <h2 className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-base-100 px-4 text-center uppercase font-semibold">
                                <FontAwesomeIcon icon={faUsersBetweenLines} className="mr-2" />
                                Popular Groups
                            </h2>
                        </div>
                    </div>

                    <Slider items={popularBots} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={4} spacing={20} />
                </div>
            </div>
        </div>
    );
};

export default Feeds;
