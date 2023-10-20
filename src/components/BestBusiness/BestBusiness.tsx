"use client"
import Link from "next/link"
import { Reveal } from "../Reveal"
import { dataBusiness } from "./BestBusiness.data"
import Image from "next/image"
import { BackgroundLeft } from "../BackgroundLeft"

export const BestBusiness = () => {
  return (
    <div className="relative px-6 py-20 md:py-60" id="details">
      <BackgroundLeft />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
        <Reveal>
          <h2 className="text-5xl font-semibold">
            It is time to
            <span className="block text-violet-600">create</span>
            a new AI
          </h2>
        </Reveal>
        <Reveal>
          <p className="max-w-md mt-10">
          The era of innovation beckons, and it's the perfect moment to embark on the journey of creating a new Artificial Intelligence. Unlock the boundless potential of AI to revolutionize industries, solve complex problems, and make our world smarter and more efficient. Join us in shaping the future with cutting-edge AI technologies and make a lasting impact.
          </p>
        </Reveal>
        <Reveal>
          <div className="my-8">
            <Link href="#" className="px-4 py-3 rounded-md bg-violet-500">Let's start</Link>
          </div>
        </Reveal>
        </div>

        <div className="grid items-center py-5 md:p-8">
          {dataBusiness.map(({id, icon, title, description}) => (
            <Reveal key={id}>
              <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-gradient-to-l from-violet-400 to-violet-50 duration-700">
                <Image src={`/assets/${icon}.png`} width="40" height="40" alt="Icons" /> 
                <div>
                  <h4 className="text-violet-500">{title}</h4>
                  <p className="text-violet-700">{description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}


