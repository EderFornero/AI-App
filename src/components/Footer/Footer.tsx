"use client"

import Image from "next/image"
import { Reveal } from "../Reveal"
import { dataFooter } from "./Footer.data"
import Link from "next/link"

export const Footer = () => {
  return(
    <div className="max-w-5xl p-6 mx-auto mt-10 md:mt-40">
      <div className="justify-between md:flex">
        <div>
          <Image src="/assets/purple-logo-footer.png" width="200" height="40" alt="Footer Logo"/>
          <Reveal>
            <p className="mt-5 text-violet-200 max-w-[250px]">Continue discovering everything about the world of AI</p>
          </Reveal>
        </div>
        {
          dataFooter.map(({id, title, links}) => (
            <div key={id}>
              <h4 className="mt-8 text-lg md:mt-0">
                <Reveal>
                  {title}
                </Reveal>
              </h4>
              {links.map(({id, name, link}) => (
                <Link key={id} href={link} className="block mt-4 text-violet-200 hover:text-white">
                  <Reveal>
                  {name}
                  </Reveal>
                </Link>
              ))}
            </div>
          ))
        }
      </div>

      <div className="border-[#3F3E45] border-[1px] my-7"></div>

      <div className="items-center justify-between md:flex">
        <div className="my-3">
          <Reveal>
            2023 AI App. All Rights Reserved. 
          </Reveal>
        </div>
        {/* <div className="flex gap-5">
          {footerSocialMedia.map(({id, icon, link}) => (
            <Link key={id} href={link} className="text-5xl">
              <Reveal>
                {icon}
              </Reveal>
            </Link>
          ))}
        </div> */}
      </div>

      </div>
  )
}