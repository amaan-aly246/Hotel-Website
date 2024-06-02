import { removeRoom } from "../functions/removeRoom.js"
export const decrementFunc = (event, setNoOfRooms, noOfRooms, setRoomStatus, max, setIsRoomSelected, noOfAdults, noOfChild, setNoOfAdults, setNoOfChild, roomPricePreDiscount,
  roomPricePostDiscount,
  setRoomPricePreDiscount,
  setRoomPricePostDiscount,
  roomBasePrice1,
  roomBasePrice2) => {
  const roomStatusElement =
    event.currentTarget.parentElement.previousElementSibling
  roomStatusElement.classList.add("text-green-500")
  roomStatusElement.classList.remove("text-my-bgColor1")



  setNoOfRooms((prevValue) => {
    if (prevValue > 1) {
      setRoomStatus(`Hurry ! ${max - (prevValue - 1)} rooms left`)
      setNoOfAdults(noOfAdults - 2)
      setNoOfChild(noOfChild - 1)
      setRoomPricePreDiscount(parseFloat(roomPricePreDiscount) - parseFloat(roomBasePrice1.current))
      setRoomPricePostDiscount(parseFloat(roomPricePostDiscount) - parseFloat(roomBasePrice2.current))
      return prevValue - 1

    } else {
      setIsRoomSelected(false)
      setNoOfRooms(1)
      setRoomStatus(`Hurry ! ${max} rooms left`)
      return prevValue
    }
  })
  removeRoom(event)

}