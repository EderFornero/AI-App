"use client"
import 'swiper/css'
import { BackgroundRight } from '../BackgroundRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataTechAI } from './TechAI.data'
import Image from 'next/image'
export const TechAI = () => {
  return(
    <div className='relative py-20 md:py-60' id='techai'>
      <BackgroundRight />
      <div className='relative w-full overflow-hidden bg-violet-300'>
        <Swiper
        breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 15
          }
        }}
        autoplay={true}
        grabCursor={true}
        loop={true}
        speed={2000}
        >
          <div className='absolute flex'>
            {
              dataTechAI.map(({id, image}) => (
                <SwiperSlide key={id} className='flex-items-center slider-horizontal'>
                  <Image src={image} width="70" height="70" className='h-[60px] w-[120px] object-contain' alt='Tech AI' />
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
    </div>
  )
}