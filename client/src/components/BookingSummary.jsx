import { React, useContext } from "react"
import { removeBookingRoom } from "../functions/removeBookingRoom.js"
import RoomInfoContext from "../context/RoomInfoContext.jsx"

function BookingSummary({ roomInfo }) {
  const {
    capacity,
    roomPricePostDiscount,
    deal,
    roomId,
    title,
  
    setPrice,
  } = roomInfo
  const { setBookingSummaryComponent, bookingSummaryComponent } =
    useContext(RoomInfoContext)

  return (
    <>
      <section id={roomId} className="px-3   ">
        {/* room info */}
        <div className="my-6">
          <p className="flex justify-between ">
            {deal > 0 ? (
              <span>{`${deal}% ${title}`}</span>
            ) : (
              <span> {` ${title}`}</span>
            )}
            <button
              onClick={() =>
                removeBookingRoom(
                  roomId,
                  setBookingSummaryComponent,
                  bookingSummaryComponent
                )
              }>
              <i className="fa-solid fa-xmark text-my-bgColor1 cursor-pointer"></i>
            </button>
          </p>
          <p className="flex justify-between mt-2 normal-case">
            <span>
              {`${capacity.adult} adults, ${capacity.child} child, 1 room`}
            </span>
            <button>
              <i className="fa-regular fa-pen-to-square text-my-bgColor1"></i>
            </button>
          </p>

          <p className=" flex justify-end gap-1 ">
            <span>&#8377; </span>
            <span>{`${roomPricePostDiscount}`}</span>
          </p>
        </div>
      </section>
    </>
  )
}

export default BookingSummary
