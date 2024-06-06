import { addRoom } from "../functions/addRoom.js"
import BookingSummary from "../components/BookingSummary.jsx"

export const IncrementFunc = (event, noOfRooms, setNoOfRooms, totalNoOfRooms, setRoomStatus, noOfAdults, noOfChild, setNoOfAdults, setNoOfChild, roomPricePreDiscount,
    roomPricePostDiscount,
    setRoomPricePreDiscount,
    setRoomPricePostDiscount,
    roomBasePrice1,
    roomBasePrice2,
) => {

    const roomStatusElement =
        event.currentTarget.parentElement.previousElementSibling

    if (noOfRooms != totalNoOfRooms) {
        setNoOfRooms((prevValue) => {
            if (prevValue + 1 >= totalNoOfRooms) {
                roomStatusElement.classList.remove("text-green-500")
                roomStatusElement.classList.add("text-my-bgColor1")
                setRoomStatus("No room left")

                return prevValue + 1
            } else {
                setRoomStatus(`Hurry ! ${totalNoOfRooms - (prevValue + 1)} rooms left`)
                return prevValue + 1
            }

        })
        setNoOfAdults(noOfAdults + 2)
        setNoOfChild(noOfChild + 1)
        const updatedRoomPricePreDiscount = parseFloat(roomBasePrice1.current) + parseFloat(roomPricePreDiscount)
        const updatedRoomPricePostDiscount = parseFloat(roomBasePrice2.current) + parseFloat(roomPricePostDiscount)
        setRoomPricePostDiscount(updatedRoomPricePostDiscount)
        setRoomPricePreDiscount(updatedRoomPricePreDiscount)
        addRoom(event, noOfRooms)
       
    }
}