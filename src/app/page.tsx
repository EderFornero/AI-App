import { BestBusiness } from "@/components/BestBusiness"
import { CounterData } from "@/components/CounterData"
import { FirstBlock } from "@/components/FirstBlock"
import { Header } from "@/components/Header"
import { MultipleAI } from "@/components/MultipleAI"
import { StatisticsAI } from "@/components/StatisticsAI"

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <BestBusiness />
      <MultipleAI />
      <StatisticsAI />
    </>
  )
}
