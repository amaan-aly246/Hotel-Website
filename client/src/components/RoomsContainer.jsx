import { React, useState, useRef } from "react"
import { IncrementFunc } from "../functions/IncrementFunc.js"
import { decrementFunc } from "../functions/decrementFunc.js"
import { formatPrice } from "../functions/formatPrice.js"
import { addRoom } from "../functions/addRoom.js"
function RoomsContainer({ id }) {
  const max = 3

  const [isRoomSelected, setIsRoomSelected] = useState(false)
  const [noOfRooms, setNoOfRooms] = useState(1)
  const [roomStatus, setRoomStatus] = useState(`Hurry ! ${max} rooms left`)
  const [roomPricePreDiscount, setRoomPricePreDiscount] = useState(4579.03)
  const [roomPricePostDiscount, setRoomPricePostDiscount] = useState(1831.6)
  const [noOfAdults, setNoOfAdults] = useState(2)
  const [noOfChild, setNoOfChild] = useState(1)
  const roomBasePrice1 = useRef(roomPricePreDiscount)

  const roomBasePrice2 = useRef(roomPricePostDiscount)

  return (
    <>
      <div id={id} className=" flex gap-4 justify-between mb-6">
        <img
          src="/assets/images/img1.jpg"
          alt="img1"
          className="w-[250px] h-[200px] hidden sm:block"
        />
        <div
          id="roomsContainer"
          className="grow divide-y-2 divide-red-400 rounded-sm border-[1.3px] p-2   myBoxShadow-1 ">
          <div className="flex justify-between">
            <h1 className="text-my-bgColor1 text-[1.3rem] ">
              60% Discount-Deluxe Double/Twin Room Only random words here
            </h1>
            <div className="flex justify-start gap-2 items-center p-2 bg-my-bgColor1 w-20 h-7 text-white font-bold   normal-case ">
              <i className="fa-solid fa-tag "></i>

              <span>Deal</span>
            </div>
          </div>

          <div className="flex justify-between py-4 b">
            {/* left */}
            <div className=" text-sm ">
              <p>
                <span>Room capacity :</span>
                <span>3 </span>
                <i className="fa-solid fa-person text-2xl mr-2"></i>
                <span>2</span>
                <i className="fa-solid fa-baby text-xl ml-1"></i>
              </p>
              <p>Room rates exclusive of tax</p>
              <p className="text-green-600">Rate includes : 60% discount !</p>
              <p className="font-light text-sm">Extra adult rate : 400</p>
              <p className="font-light text-sm">extra child rate : 400</p>
            </div>

            {/* right */}
            <div className="text-right">
              <s className="font-bold text-right">
                &#8377; {formatPrice(roomPricePreDiscount)}
              </s>

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
              <span className="text-green-500 mx-2 ">{roomStatus}</span>
              {isRoomSelected && (
                <div>
                  <button
                    className=" myBtn-1"
                    onClick={(event) => {
                      decrementFunc(
                        event,
                        setNoOfRooms,
                        noOfRooms,
                        setRoomStatus,
                        max,
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
                        roomBasePrice2
                      )
                     
                    }}>
                    <i className="fa-solid fa-minus "></i>
                  </button>
                  <span className="myBtn-1  font-normal mx-2 ">
                    {noOfRooms}
                  </span>
                  <button
                    className="myBtn-1"
                    onClick={(event) => {
                      IncrementFunc(
                        event,
                        noOfRooms,
                        setNoOfRooms,
                        max,
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
                        roomBasePrice2
                      )
                    }}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              )}

              {!isRoomSelected && (
                <button
                  className=" bg-red-600 myBtn-2  mx-2 "
                  onClick={(event) => {
                    setIsRoomSelected(true)
                    setRoomStatus("Hurry ! 2 rooms left")
                    addRoom(event, noOfRooms)
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

