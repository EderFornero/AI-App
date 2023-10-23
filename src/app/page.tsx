import { BestBusiness } from "@/components/BestBusiness"
import { CounterData } from "@/components/CounterData"
import { FirstBlock } from "@/components/FirstBlock"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { MultipleAI } from "@/components/MultipleAI"
import { StatisticsAI } from "@/components/StatisticsAI"
import { TechAI } from "@/components/TechAI"
import { Testimonials } from "@/components/Testimonials"

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <MultipleAI />
      <StatisticsAI />
      <Testimonials />
      <TechAI />
      <Footer />
    </>
  )
}
