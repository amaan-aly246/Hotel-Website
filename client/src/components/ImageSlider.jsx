import { React } from "react"
import { images } from "../constants/constants"

function ImageSlider() {
  return (
    <>
      <section className="   h-72 w-[140em] whitespace-nowrap group overflow-clip ">
        <div
          className={` slide h-full max-w-fit  inline-block  group-hover:pause-animation  `} >
          {images.map((img) => {
            return (
              <img
                src={img.src}
                alt={img.id}
                key={img.id}
                className="h-full  inline-block"
              />
            )
          })}
        </div>
        {/* slide class */}
        <div
          className={` slide h-full max-w-fit  inline-block  group-hover:pause-animation `}>
          {images.map((img) => {
            return (
              <img
                src={img.src}
                alt={img.id}
                key={img.id}
                className="h-full  inline-block"
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ImageSlider
