import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { dataTestimonials } from '../Testimonials.data'
import { Reveal } from '@/components/Reveal'
import Image from 'next/image'

export const Slide = () => {
  return (
    <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      678: {
        slidesPerView: 3, 
        spaceBetween: 15
      }
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[ Navigation, Pagination, Mousewheel ]}
    className='h-[250]px w-full md:max-w-5xl'
    >
      {
        dataTestimonials.map(({id, name, work, testimonial, image}) => (
          <SwiperSlide key={id} className='my-5 cursor-pointer md:px-10'>
            <Reveal>
              <Image src="/assets/testimonial-icon.png" width="50" height="50" className='w-auto h-auto'  alt='Testimonials' />
              <div className='my-5'>{testimonial}</div>
              <div className='flex'>
                <Image src={image} alt={name} width="50" height="50" className='mr-5 rounded-t-full rounded-b-full'/>
                 <div>
                  <h4 className='text-center'>{name}</h4>
                  <p className='text-violet-300'>{work}</p>
                </div>   
              </div>
            </Reveal>
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}