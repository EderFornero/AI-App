"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from '../Reveal/Reveal';

export const StatisticsAI = () => {
  return(
    <div className="p-4 py-20 md:py-60" id="marketai">
      <div className="flex flex-col-reverse max-w-5xl md:flex-row place-content-evenly">
        <MotionTransition className="flex-1 p-6 md:p-8">
          <Image src="/assets/AI-Market.jpg" width="580" height="411" className="w-full h-auto" alt="Statistics" />
        </MotionTransition>
        <div className="flex-1 p-6 md:p-8">
            <Reveal>
              <h2 className="text-5xl font-semibold">
                It's time to <br />
                start
              </h2>
            </Reveal>
            <Reveal>
              <p className="max-w-md mt-10">AI's revenue potential is soaring. As industries adopt AI technologies, profitability is set to skyrocket. This disruptive force promises lucrative opportunities.</p>
            </Reveal>
        </div>
      </div>
    </div>
  )
}