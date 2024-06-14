import { React, useContext, useEffect, useState } from "react"
import RoomsContainer from "./RoomsContainer"
import SearchFilter from "./SearchFilter"
import RoomInfoContext from "../context/RoomInfoContext"
import { removeBookingRoom } from "../functions/removeBookingRoom"
import { removeRoom } from "../functions/removeRoom"

function Hero() {
  const {
    bookingSummaryComponent,
    isLoading,
    roomsData,
    totalAmount,
    setTotalAmount,
    setBookingSummaryComponent,
    noOfAdults,
    noOfChild,
    noOfRooms,
  } = useContext(RoomInfoContext)

  useEffect(() => {
    const sum = bookingSummaryComponent.reduce((sum, item) => {
      const price = item.content.props.roomInfo.roomPricePostDiscount
      return sum + price
    }, 0)
    setTotalAmount(sum)
  }, [bookingSummaryComponent])

  const handleOpen = (event) => {
    const element = event.target.parentElement.parentElement.previousSibling
    element.classList.toggle("hidden")
  }
  return (
    <>
      <main className="  mt-5 mx-3 sm:mx-14 w-[95%]  grid lg:grid-cols-[70%_29%] lg:grid-rows-[3em_auto] gap-x-3 gap-y-3">
        <nav className=" gap-2  ">
          <SearchFilter />
        </nav>

        <section className="bg-slate-200  p-4 h-fit mb-10 ">
          {isLoading ? (
            <h1>Loading</h1>
          ) : (
            roomsData.map((item, index) => {
              return <RoomsContainer key={index} index={index} />
            })
          )}
        </section>

        {/* Booking summary for small scree size  */}
        {bookingSummaryComponent.length > 0 ? (
          <>
            <section className="hidden fixed bottom-20 left-0 right-0 bg-[#222] text-[whitesmoke]   p-2 sm:hidden">
              {bookingSummaryComponent.map((item) => {
                const {
                  title,
                
                  roomId,
                  roomPricePostDiscount,
                  totalNoOfRooms,
                } = item.content.props.roomInfo
                
                return (
                  <div id={roomId} className="flex justify-between  ">
                    <div className=" basis-[14em] normal-case ">
                      <p className="capitalize">{title} </p>
                      <p>
                        {noOfAdults} adults,{noOfChild} child, 1 room
                      </p>
                    </div>

                    <div className=" basis-[8em] flex justify-between gap-2  items-center">
                      <span className="font-bold">
                        
                        &#8377; {roomPricePostDiscount}
                      </span>
                      {/* <span
                        onClick={(event) => {
                          removeBookingRoom(
                            roomId,
                            setBookingSummaryComponent,
                            bookingSummaryComponent
                          )
                          removeRoom(
                            event,
                            totalNoOfRooms,
                            roomId,
                            setBookingSummaryComponent,
                            bookingSummaryComponent
                          )
                        }}>
                        <i className="fa-solid fa-trash text-my-bgColor1"></i>
                      </span> */}
                    </div>
                  </div>
                )
              })}
            </section>

            <section className="bg-[#222] text-white h-20  flex justify-between sm:hidden fixed bottom-0 right-0 left-0">
              <div className="ml-4 flex gap-2 text-sm">
                <i className="fa-solid fa-info pt-7" onClick={handleOpen}></i>
                <span>
                  <p className="text-my-bgColor1 font-bold text-xl">
                  &#8377; {totalAmount}
                  </p>
                  <p className="text-green-400">
                    {`${bookingSummaryComponent.length}  Room Added`}
                  </p>
                  <p>
                    <span>31/05/2024 - </span> <span>01/06/2024</span>
                  </p>
                </span>
              </div>
              <button className="bg-my-bgColor1 text-xl w-[7em]">Book</button>
            </section>
          </>
        ) : (
          <></>
        )}

        {/* Booking summary for large screen size  */}
        <aside
          id="bookingSummaryContainer"
          className="  row-start-1 row-end-3 col-start-2 border-black border-[1px]  text-[0.98em] font-serif mr-12   hidden lg:block     sticky top-16 h-[35em] overflow-y-scroll overflow-x-hidden">
          <h1 className="bg-my-bgColor2  py-2 text-center  ">
            Booking Summary
          </h1>

          {bookingSummaryComponent.length > 0 ? (
            <>
              {/* date */}
              <p className=" flex  justify-start gap-2 flex-wrap ml-3">
                <span className=" font-bold">Dates </span>
                <span> 30/05/2024 -</span>
                <span>31/05/2024</span>
              </p>
              {/* rooms added  */}
              {bookingSummaryComponent.map((item) => {
                return item.content
              })}

              {/*  total amount area */}
              <p className="flex justify-between font-bold text-xl m-2">
                <span className="font-thin">Total </span>
                <span>&#8377;{totalAmount}</span>
              </p>
              <button className="bg-my-bgColor1 text-[#fcf6f6] mt-4 mx-6 w-[15em] h-[2.5em]">
                Book
              </button>
            </>
          ) : (
            <>
              <h1>No Room Selected </h1>
            </>
          )}
        </aside>
      </main>
    </>
  )
}

export default Hero
