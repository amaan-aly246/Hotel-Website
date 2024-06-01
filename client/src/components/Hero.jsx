import React from "react"
import RoomsContainer from "./RoomsContainer"
import BookingSummary from "./BookingSummary"
import SearchFilter from "./SearchFilter"

function Hero() {
  return (
    <>
      <main className="  mt-5 mx-3 sm:mx-14 w-[95%]  grid lg:grid-cols-[70%_29%] lg:grid-rows-[3em_auto] gap-x-3 gap-y-3">
        <nav className=" gap-2  ">
          <SearchFilter />
        </nav>
        <section className="bg-slate-200  p-4 h-fit mb-10 ">
          <RoomsContainer />
          <RoomsContainer />
          <RoomsContainer />
        </section>

        {/* Booking summary for small scree size  */}
        <section className="bg-[#222] text-white h-20  flex justify-between sm:hidden fixed bottom-0 right-0 left-0">
          <div className="ml-4 flex gap-2 text-sm">
            <i class="fa-solid fa-info pt-7"></i>
            <span>
              <p className="text-my-bgColor1 font-bold text-xl"> Rs 2,600</p>
              <p className="text-green-400">1 Room Added</p>
              <p>
                <span>31/05/2024 - </span> <span>01/06/2024</span>
              </p>
            </span>
          </div>
          <button className="bg-my-bgColor1 text-xl w-[7em]">Book</button>
        </section>
        {/* Booking summary for large screen size  */}
        <aside className="  row-start-1 row-end-3 col-start-2 border-[#f8f0f0] border-2  text-[0.98em] font-serif mr-12 divide-y-2   hidden lg:block     sticky top-16 h-[35em] overflow-y-scroll overflow-x-hidden">
          <h1 className="bg-my-bgColor2  py-2 text-center  ">
            Booking Summary
          </h1>
          <BookingSummary />
            
        </aside>
      </main>
    </>
  )
}

export default Hero
