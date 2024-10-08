import { Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";

const Slider = ({ defaultSlides = 1, smSlides = 1, mdSlides = 2, lgSlides = 3, xlSlides = 5, styles = "", spacing = 7, items }) => {
    if (items?.length == 0) {
        return <div className={`${styles} w-full h-full flex flex-col items-center justify-center space-y-4 my-4`}>
            <FontAwesomeIcon icon={faFaceFrown} className="text-5xl" />
            <h2 className="text-lg">Nothing to show!</h2>
        </div>
    }
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
