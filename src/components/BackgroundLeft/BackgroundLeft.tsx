import Image from "next/image"

export const BackgroundLeft = () => {
  return (
    <div className="left-0 absolute -z-50 top-0">
      <Image src="/assets/background-radial-right.png" width="850" height="650" alt="Background Left" />
    </div>
  )
}


