import { SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules

import FeaturedCard from './FeaturedCard'
import Slider from "../../UI/Slider";
import useFetch from '../../../hooks/useFetch';
import { useCallback } from "react";
import { getAllPosts } from "../../../utils/posts";


// TODO: HANDLE ERRORS
const Featured = () => {
    const fetchFn = useCallback(async () => {
        return await getAllPosts(20, 1, 'post');
    }, [])
    const { data: allPosts, isFetching } = useFetch(fetchFn, {
        result: []
    })
    const featuredPosts = allPosts?.result?.map(post => (
        <SwiperSlide key={post._id}>
            <FeaturedCard
                title={post.title}
                longDescription={post.content}
                image={post.featured_image}
                postSlug={post.slug}
            />
        </SwiperSlide>
    ));
    return (
        <div className="flex items-center px-8">
            <Slider items={featuredPosts} defaultSlides={1} smSlides={1} mdSlides={2} lgSlides={3} xlSlides={5} isFetching={isFetching} />
        </div>
    )
}

export default Featured