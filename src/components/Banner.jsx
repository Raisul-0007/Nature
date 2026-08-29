import Container from './Container'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation } from 'swiper/modules';
import one from "../assets/one.jpg"
import two from "../assets/two.jpg"
import three from "../assets/three.jpg"
const Banner = () => {
  return (
    <div>
            <Swiper  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img className='w-full h-180' src={one} alt="one" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-180' src={two} alt="two" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-180' src={three} alt="three" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner