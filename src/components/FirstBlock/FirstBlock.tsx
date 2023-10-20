"use client"

import Link from "next/link"
import { BackgroundRight } from "../BackgroundRight"
import { MotionTransition } from '../MotionTransition/MotionTransition';
import Image from "next/image";
import { Reveal } from "../Reveal";

export const FirstBlock = () => {
  return (
    <div className="relative p-4 md:py-40">
      <BackgroundRight />
      <div className="grid max-w-5xl mx-auto md:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="text-5xl font-semibold">
              The future is now
              <span className="block text-violet-600">
                it is with us
              </span>
            </h1>
          </Reveal>
          <Reveal>
            <p className="max-w-md mt-8">
              Embrace the power of Artificial Intelligence (AI) and unlock a world of endless possibilities. With AI, we're not just imagining the future; we're living it today. From intelligent virtual assistants to cutting-edge data analysis, AI is revolutionizing industries, improving efficiency, and making our lives better. Discover how AI can transform your world.
            </p>
          </Reveal>
          <Reveal>
            <div className="my-8">
              <Link href="#" className="px-4 py-3 rounded-md bg-violet-500">More Info</Link>
            </div>
          </Reveal>
        </div>

        <div>
          <MotionTransition className="flex items-center justify-center">
            <Image src="/assets/ai-group.png" width="450" height="450" className="h-auto w-72 md:w-full" alt="AI group" />
          </MotionTransition>
        </div>
      </div>
    </div>
  )
}


