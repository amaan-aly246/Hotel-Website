import { React } from "react"
import Navigation from "../components/Navigation"
import CarouselSection from "../components/CarouselSection"
import Hero from "../components/Hero"
import { RoomInfoProvider } from "../context/RoomInfoContext"

function Main() {
  return (
    <>
      <Navigation />
      <CarouselSection />

      <RoomInfoProvider>
        <Hero />
      </RoomInfoProvider>
    </>
  )
}

export default Main
