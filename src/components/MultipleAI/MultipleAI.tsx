"use client"

import 'swiper/css'
import 'swiper/css/effect-cards'
import { Swiper, SwiperSlide } from "swiper/react"
import { BackgroundRight } from "../BackgroundRight"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"
import { EffectCards } from "swiper/modules"
import Image from "next/image"
import { dataMultipleAI } from "./MultipleAI.data"


export const MultipleAI = () => {
  return (
    <div className="relative px-6 py-20 md:py-60" id="multiple">
      <BackgroundRight />
      <div className="block max-w-5xl mx-auto md:grid md:grid-cols-2">
        <Reveal>
          <h2 className="text-5xl font-semibold">Choose your
            <span className="block text-5xl text-violet-500">favorite</span>
          </h2>
        </Reveal>
        <div className="px-5">
          <MotionTransition>
              <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              >
                {dataMultipleAI.map(({id, image}) => (
                  <SwiperSlide key={id}>
                    <Image src={image} width="400" height="300" className='mt-5' alt="AI Image" />
                  </SwiperSlide>
                ))}
              </Swiper>
          </MotionTransition>
        </div>
      </div>
    </div>
  )
}

