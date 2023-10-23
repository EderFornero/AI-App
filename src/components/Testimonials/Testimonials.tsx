"use client"

import { BackgroundLeft } from "../BackgroundLeft"
import { Reveal } from "../Reveal"
import { Slide } from "./Slide"

export const Testimonials = () => {
  return(
    <div className="relative p-8 md:py-60" id="testimonials">
      <BackgroundLeft />
      <div className="grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2">
        <Reveal>
            <h2 className="text-5xl mb-5 font-semibold">
              Testimonials
            </h2>
        </Reveal>
        <Reveal>
          <div className="self-center">
            <p className="text-violet-200">
            Discover what thought leaders and experts have to say about the incredible world of Artificial Intelligence.
            </p>
          </div>
        </Reveal>
      </div>
      <Slide />
    </div>
  )
}