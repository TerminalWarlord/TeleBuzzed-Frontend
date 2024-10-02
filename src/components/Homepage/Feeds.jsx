import Slider from '../UI/Slider'
import Card from '../UI/Card'
import { SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faRobot, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import Featured from './FeaturedPostSlider/Featured'
import useFetch from '../../hooks/useFetch'
import { fetchItems } from '../../utils/http'
import { POPULARBOTS } from '../../data/dummyData'

const Feeds = () => {
    const { data: bots, isFetching: isBotsFetching, error: botsFetchingError } = useFetch(fetchItems, []);
    const { data: channels, isFetching: isChannelsFetching, error: channelsFetchingError } = useFetch(fetchItems, []);
    const { data: groups, isFetching: isGroupsFetching, error: groupsFetchingError } = useFetch(fetchItems, []);
    const dummyData = POPULARBOTS.map((bot, index) => (
        <SwiperSlide key={index}>
            <Card {...bot} isFetching />
        </SwiperSlide>
    ));
    const popularBots = bots.map((bot, index) => (
        <SwiperSlide key={index}>
            <Card {...bot} />
        </SwiperSlide>
    ));
    const popularChannels = channels.map((bot, index) => (
        <SwiperSlide key={index}>
            <Card {...bot} />
        </SwiperSlide>
    ));
    const popularGroups = groups.map((bot, index) => (
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
                    {botsFetchingError && <h1 className='text-center my-10'>Failed to load!</h1>}
                    {(!botsFetchingError && isBotsFetching) && <Slider items={dummyData} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} spacing={20} />}
                    {(!botsFetchingError && !isBotsFetching) && <Slider items={popularBots} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} spacing={20} />}
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

                    {channelsFetchingError && <h1 className='text-center my-10'>Failed to load!</h1>}
                    {(!channelsFetchingError && isChannelsFetching) && <Slider items={dummyData} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} spacing={20} />}
                    {(!channelsFetchingError && !isChannelsFetching) && <Slider items={popularChannels} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} spacing={20} />}
                </div>

                <div className='my-8'>
                    <div className="flex justify-center items-center mx-10">
                        <div className="relative w-full my-4">
                            <div className="h-[1.5px] bg-base-200 rounded-lg" />
                            <h2 className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 bg-base-100 px-4 text-center uppercase font-semibold">
                                <FontAwesomeIcon icon={faUserGroup} className="mr-2" />
                                Popular Groups
                            </h2>
                        </div>
                    </div>
                    {groupsFetchingError && <h1 className='text-center my-10'>Failed to load!</h1>}
                    {(!groupsFetchingError && isGroupsFetching) && <Slider items={dummyData} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} spacing={20} />}
                    {(!groupsFetchingError && !isGroupsFetching) && <Slider items={popularGroups} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} spacing={20} />}
                </div>
            </div>
        </div>
    );
};

export default Feeds;
