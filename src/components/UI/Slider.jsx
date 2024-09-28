import { Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Slider = ({ defaultSlides = 1, smSlides = 1, mdSlides = 2, lgSlides = 3, xlSlides = 5, styles = "", spacing = 7, items }) => {
    return (
        <div className={`${styles} w-full h-full`}>
            <Swiper
                slidesPerView={defaultSlides}
                spaceBetween={spacing}
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
    );
};

export default Slider;
