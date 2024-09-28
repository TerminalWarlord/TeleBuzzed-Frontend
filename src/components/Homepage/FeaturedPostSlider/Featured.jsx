import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import FeaturedCard from './FeaturedCard'
const Featured = () => {
    return (
        <div className="mx-5 lg:mx-[6rem]">
            <Swiper
                slidesPerView={1}
                spaceBetween={7}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1480: {
                        slidesPerView: 5,
                    },
                }}
                className="mySwiper pt-4 pb-10"
            >
                <SwiperSlide><FeaturedCard /></SwiperSlide>
                <SwiperSlide><FeaturedCard /></SwiperSlide>
                <SwiperSlide><FeaturedCard /></SwiperSlide>
                <SwiperSlide><FeaturedCard /></SwiperSlide>
                <SwiperSlide><FeaturedCard /></SwiperSlide>
                <SwiperSlide><FeaturedCard /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Featured