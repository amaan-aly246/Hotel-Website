import React, { Children } from "react"
import Navigation from "../components/Navigation"
import CarouselSection from "../components/CarouselSection"
import Hero from "../components/Hero"

function Main() {
  return (
    <>
      <Navigation />
      <CarouselSection />
      <Hero/>
    </>
  )
}

export default Main
