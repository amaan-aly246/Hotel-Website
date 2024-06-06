import { React, useState, useRef, useContext, useEffect } from "react"
import { IncrementFunc } from "../functions/IncrementFunc.js"
import { decrementFunc } from "../functions/decrementFunc.js"
import { formatPrice } from "../functions/formatPrice.js"
import { addRoom } from "../functions/addRoom.js"
import BookingSummary from "../components/BookingSummary.jsx"
import RoomInfoContext from "../context/RoomInfoContext.jsx"

function RoomsContainer({ index }) {
  const { setBookingSummaryComponent, bookingSummaryComponent, roomsData } =
    useContext(RoomInfoContext)
  const [noOfRooms, setNoOfRooms] = useState(1)

  const {
    capacity,
    _id: roomId,
    price,
    title,
    deal,
    totalNoOfRooms,
  } = roomsData[index]

  const [isRoomSelected, setIsRoomSelected] = useState(false)
  const [roomStatus, setRoomStatus] = useState(
    `Hurry ! ${totalNoOfRooms} rooms left`
  )
  const [roomPricePreDiscount, setRoomPricePreDiscount] = useState(price)
  const [noOfAdults, setNoOfAdults] = useState(capacity.adult)
  const [noOfChild, setNoOfChild] = useState(capacity.child)
  const [roomPricePostDiscount, setRoomPricePostDiscount] = useState(
    price - price * (deal / 100)
  )
  const roomBasePrice1 = useRef(roomPricePreDiscount)
  const roomBasePrice2 = useRef(roomPricePostDiscount)
  const handleAddRoom = (event) => {
    setIsRoomSelected(true)
    setRoomStatus("Hurry ! 2 rooms left")
    addRoom(event, noOfRooms)

    setBookingSummaryComponent((prevComponents) => [
      ...prevComponents,
      {
        id: roomId,
        content: (
          <BookingSummary
            key={roomId}
            roomInfo={{
              capacity,
              totalNoOfRooms,
              deal,
              roomPricePostDiscount,
              roomId,
              title,
            }}
          />
        ),
      },
    ])
  }

  return (
    <>
      <div id={roomId} className=" flex gap-4 justify-between mb-6">
        <img
          src="/assets/images/img1.jpg"
          alt="img1"
          className="w-[250px] h-[200px] hidden sm:block"
        />
        <div
          id="roomsContainer"
          className="grow divide-y-2 divide-red-400 rounded-sm border-[1.3px] p-2   myBoxShadow-1 ">
          <div className="flex justify-between">
            <h1 className="text-my-bgColor1 text-[1.3rem] ">{title}</h1>
            {deal > 0 ? (
              <div className="flex justify-start gap-2 items-center p-2 bg-my-bgColor1 w-20 h-7 text-white font-bold   normal-case ">
                <i className="fa-solid fa-tag "></i>

                <span>Deal</span>
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="flex justify-between py-4 b">
            {/* left */}
            <div className=" text-sm ">
              <p>
                <span>Room capacity :</span>
                <span>{capacity.adult} </span>
                <i className="fa-solid fa-person text-2xl mr-2"></i>
                <span>{capacity.child}</span>
                <i className="fa-solid fa-baby text-xl ml-1"></i>
              </p>
              <p>Room rates exclusive of tax</p>
              {deal > 0 ? (
                <p className="text-green-600">{`Rate includes : ${deal}% discount !`}</p>
              ) : (
                <p className="text-green-600">{`Rate includes :`}</p>
              )}

              <p className="font-light text-sm">Extra adult rate : 400</p>
              <p className="font-light text-sm">extra child rate : 400</p>
            </div>

            {/* right */}
            <div className="text-right">
              {deal > 0 ? (
                <s className="font-bold text-right">
                  &#8377; {formatPrice(roomPricePreDiscount)}
                </s>
              ) : (
                <></>
              )}

              <p className="text-my-bgColor1 text-2xl sm:text-3xl  font-bold">
                &#8377; {formatPrice(roomPricePostDiscount)}
              </p>
              <p className="font-light text-sm ">price for 1 night</p>
              <p className="font-light text-sm ">{`${noOfAdults} adults, ${noOfChild} child, ${noOfRooms} room`}</p>
            </div>
          </div>

          {/* room info */}
          <section className="flex justify-between  py-3">
            <div className="  cursor-pointer ">
              <span>
                <i className="fa fa-info"></i>
              </span>
              <span className="text-my-bgColor1 mx-2">Room info </span>
            </div>

            <div className=" text-sm flex ">
              <span className="text-green-500 mx-2  ">{roomStatus}</span>
              {isRoomSelected && (
                <div className="flex myBtn-1 gap-x-1 ">
                  <button
                    className=" "
                    onClick={(event) => {
                      decrementFunc(
                        event,
                        setNoOfRooms,
                        noOfRooms,
                        setRoomStatus,
                        totalNoOfRooms,
                        setIsRoomSelected,
                        noOfAdults,
                        noOfChild,
                        setNoOfAdults,
                        setNoOfChild,
                        roomPricePreDiscount,
                        roomPricePostDiscount,
                        setRoomPricePreDiscount,
                        setRoomPricePostDiscount,
                        roomBasePrice1,
                        roomBasePrice2,
                        roomId,
                        setBookingSummaryComponent,
                        bookingSummaryComponent
                      )
                    }}>
                    <i className="fa-solid fa-minus "></i>
                  </button>
                  <span className="  font-normal mx-2 ">{noOfRooms}</span>
                  <button
                    className=""
                    onClick={(event) => {
                      IncrementFunc(
                        event,
                        noOfRooms,
                        setNoOfRooms,
                        totalNoOfRooms,
                        setRoomStatus,
                        noOfAdults,
                        noOfChild,
                        setNoOfAdults,
                        setNoOfChild,
                        roomPricePreDiscount,
                        roomPricePostDiscount,
                        setRoomPricePreDiscount,
                        setRoomPricePostDiscount,
                        roomBasePrice1,
                        roomBasePrice2,
                      )
                      // handleClick()
                    }}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              )}

              {!isRoomSelected && (
                <button
                  className=" bg-red-600 myBtn-2  mx-2 "
                  onClick={(event) => {
                    handleAddRoom(event)
                  }}>
                  Add Room
                </button>
              )}
            </div>
          </section>

          {/* room  */}
        </div>
      </div>
    </>
  )
}

export default RoomsContainer
