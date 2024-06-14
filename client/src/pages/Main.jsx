import { React } from "react"
import CarouselSection from "../components/CarouselSection"
import Hero from "../components/Hero"
import { RoomInfoProvider } from "../context/RoomInfoContext"

function Main() {
  return (
    <>
   
      <CarouselSection />

      <RoomInfoProvider>
        <Hero />
      </RoomInfoProvider>
    </>
  )
}

export default Main
