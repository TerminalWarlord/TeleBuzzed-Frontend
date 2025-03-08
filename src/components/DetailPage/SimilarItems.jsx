import { SwiperSlide } from 'swiper/react'
import { faEquals } from '@fortawesome/free-solid-svg-icons';

import Card from '../UI/Card'
import Slider from '../UI/Slider';
import LineBreak from '../UI/LineBreak';
import useFetch from '../../hooks/useFetch';
import { fetchItems } from '../../utils/tgData';
import { useCallback } from 'react';



const SimilarItems = ({ category, itemType, currentItemUsername }) => {
    const fetchFn = useCallback(async () => {
        return await fetchItems(1, 10, null, itemType, null, category)
    }, [category, itemType])
    const { data } = useFetch(fetchFn, {
        result: []
    })
    const results = data?.result?.filter(res => {
        return res.username !== currentItemUsername;
    })
    const popularBots = results.map((bot, index) => (
        <SwiperSlide key={index}>
            <Card {...bot} />
        </SwiperSlide>
    ));
    return (
        <div className='my-8 flex flex-col w-full  items-center md:mx-2'>
            <LineBreak icon={faEquals} text={"Similar Bots"} />
            <Slider items={popularBots} defaultSlides={1} smSlides={1} mdSlides={1} lgSlides={3} xlSlides={4} spacing={20} styles=' px-0 px-0 mr-0' />
        </div>
    )
}

export default SimilarItems