import React, { useContext } from 'react'
import Container from './Container'
import { ApiContext } from './ApiData'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Offer = () => {
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
        modules={[Autoplay, Pagination]}
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
            <div className="flex justify-between bg-primary px-5 pt-6 pb-1">
              <h3 className='text-3xl capitalize'>{item.title.slice(0,5)}...</h3>
              <div className="bg-primary ">
                <p className='text-xl text-blue-800'>${(item.price-((item.price * item.discountPercentage) / 100)).toFixed(2)}</p>
                <p className='line-through'>{item.price}</p>
            </div>
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

export default Offer
