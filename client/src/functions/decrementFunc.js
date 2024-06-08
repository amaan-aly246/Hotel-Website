import { removeRoom } from "../functions/removeRoom.js"
export const decrementFunc = (event, setNoOfRooms, noOfRooms, setRoomStatus, max, setIsRoomSelected, noOfAdults, noOfChild, setNoOfAdults, setNoOfChild, roomPricePreDiscount,
  roomPricePostDiscount,
  setRoomPricePreDiscount,
  setRoomPricePostDiscount,
  roomBasePrice1,
  roomBasePrice2,
  roomId,
  setBookingSummaryComponent,
  bookingSummaryComponent) => {

  const roomStatusElement =
    event.currentTarget.parentElement.previousElementSibling
  roomStatusElement.classList.add("text-green-500")
  roomStatusElement.classList.remove("text-my-bgColor1")



  setNoOfRooms((prevValue) => {
    if (prevValue > 1) {
      setRoomStatus(`Hurry ! ${max - (prevValue - 1)} rooms left`)
      setNoOfAdults(noOfAdults - 2)
      setNoOfChild(noOfChild - 1)
      const updatedRoomPricePreDiscount = parseFloat(roomPricePreDiscount) - parseFloat(roomBasePrice1.current)
      const updatedRoomPricePostDiscount = parseFloat(roomPricePostDiscount) - parseFloat(roomBasePrice2.current)
      setRoomPricePostDiscount(updatedRoomPricePostDiscount)
      setRoomPricePreDiscount(updatedRoomPricePreDiscount)
      setBookingSummaryComponent((prevComponents) => {
        const updatedComponents = prevComponents.map((component) => {
          if (component.id === roomId) {
            // console.log(component);
            return {
              ...component,
              content: {
                ...component.content,
                props: {
                  ...component.content.props,
                  roomInfo: {
                    ...component.content.props.roomInfo,
                    roomPricePostDiscount: updatedRoomPricePostDiscount,
                  },
                },
              },
            };
          }
          return component;
        });
        return updatedComponents;
      });
      return prevValue - 1

    } else {
      setIsRoomSelected(false)
      setNoOfRooms(1)
      setRoomStatus(`Hurry ! ${max} rooms left`)
      return prevValue
    }
  })
  removeRoom(event, noOfRooms, roomId,
    setBookingSummaryComponent,
    bookingSummaryComponent)



}