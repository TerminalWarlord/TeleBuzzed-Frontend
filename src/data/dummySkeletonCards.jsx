import { SwiperSlide } from "swiper/react";
import { POPULARBOTS } from "./dummyData";
import Card from "../components/UI/Card";

export const dummyData = POPULARBOTS.map((bot, index) => (
    <SwiperSlide key={index}>
        <Card {...bot} isFetching />
    </SwiperSlide>
));