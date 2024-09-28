import { Swiper } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';





const Slider = ({ defaultSlides = 1, smSlides = 1, mdSlides = 2, lgSlides = 3, xlSlides = 5, items }) => {
    return (
        <div className="mx-5 lg:mx-[6rem] w-[80vw] h-20">
            <Swiper
                slidesPerView={defaultSlides}
                spaceBetween={7}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: smSlides,
                    },
                    768: {
                        slidesPerView: mdSlides,
                    },
                    1024: {
                        slidesPerView: lgSlides,
                    },
                    1480: {
                        slidesPerView: xlSlides,
                    },
                }}
                className="mySwiper pt-4 pb-10"
            >
                {items}
            </Swiper>
        </div>
    )
}

export default Slider

// <SwiperSlide key={index}>
//                         <Card {...bot} />
//                     </SwiperSlide>