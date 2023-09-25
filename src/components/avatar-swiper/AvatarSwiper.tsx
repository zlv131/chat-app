import React from 'react';
import {Box} from "@chakra-ui/react";
import '../../../swiper/swiper.min.css';
import {Swiper, SwiperSlide} from "swiper/react";

const AvatarSwiper: React.FC = () => {
    return (
        <Box>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>

        </Box>
    );
};

export default AvatarSwiper;