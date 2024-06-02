import { React } from "react"
import { images } from "../constants/constants"

function ImageSlider() {
  return (
    <>
      <section className=" h-60  sm:h-72 w-full whitespace-nowrap group  overflow-x-hidden ">
        <div
          className={` slide h-full  inline-block  group-hover:pause-animation  `}>
          {images.map((img) => {
            return (
              <img
                src={img.src}
                alt={img.id}
                key={img.id}
                className="h-full  inline-block w-[16em]"
              />
            )
          })}
        </div>

        <div
          className={` slide h-full max-w-fit  inline-block  group-hover:pause-animation `}>
          {images.map((img) => {
            return (
              <img
                src={img.src}
                alt={img.id}
                key={img.id}
                className="h-full  inline-block w-[16em]"
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ImageSlider
