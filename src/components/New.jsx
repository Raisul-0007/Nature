import React, { useContext } from 'react'
import { ApiContext } from './ApiData';
import Container from './Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
const New = () => {
    let {data} = useContext(ApiContext)
  return (
    <div>
      <Container clasName="py-10">
        <div className=" py-10">
          <h2 className='text-5xl font-semibold text-center text-primary'>New Collection</h2>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={10}
        modules={[ Pagination]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <div className="flex flex-wrap gap-5">
      {data.map((item)=>(
        <SwiperSlide className="w-1/4">
          <div className="bg-[rgba(0,253,0,0.11)] py-8 rounded-t-4xl">
            <img src={item.thumbnail} alt="" />
          </div>
          <div className=" rounded-b-4xl">
            <div className="flex justify-between bg-primary items-end px-5 pt-6 pb-1">
              <h3 className='text-3xl capitalize'>{item.title.slice(0,10)}...</h3>
            <p className='text-xl text-blue-800'>${(item.price-((item.price * item.discountPercentage) / 100)).toFixed(2)}</p>
            </div>
            <div className="bg-primary flex justify-between items-center px-6 pb-4">
              <h3 className='capitalize text-xl text-secondary font-bold'>{item.category}</h3>
              <p className='line-through'>{item.price}</p>
            </div>
            <div className="rounded-b-4xl text-center py-4 cursor-pointer hover:bg-[rgba(0,253,0,0.46)] hover:text-secondary bg-white border border-primary">
              Add To cart
            </div>
            </div> 
        </SwiperSlide>
      ))}
      </div>
      </Swiper>
      </Container>
    </div>
  )
}

export default New
