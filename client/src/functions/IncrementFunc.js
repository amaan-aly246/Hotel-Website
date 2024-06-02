import { addRoom } from "../functions/addRoom.js"


export const IncrementFunc = (event, noOfRooms, setNoOfRooms, max, setRoomStatus, noOfAdults, noOfChild, setNoOfAdults, setNoOfChild, roomPricePreDiscount,
    roomPricePostDiscount,
    setRoomPricePreDiscount,
    setRoomPricePostDiscount,
    roomBasePrice1,
    roomBasePrice2
) => {

    const roomStatusElement =
        event.currentTarget.parentElement.previousElementSibling

    if (noOfRooms != max) {
        setNoOfRooms((prevValue) => {
            if (prevValue + 1 >= max) {
                roomStatusElement.classList.remove("text-green-500")
                roomStatusElement.classList.add("text-my-bgColor1")
                setRoomStatus("No room left")

                return prevValue + 1
            } else {
                setRoomStatus(`Hurry ! ${max - (prevValue + 1)} rooms left`)
                return prevValue + 1
            }

        })
        addRoom(event, noOfRooms)

        setNoOfAdults(noOfAdults + 2)
        setNoOfChild(noOfChild + 1)
        setRoomPricePreDiscount(parseFloat(roomBasePrice1.current) + parseFloat(roomPricePreDiscount))
        setRoomPricePostDiscount(parseFloat(roomBasePrice2.current) + parseFloat(roomPricePostDiscount))
    }
}