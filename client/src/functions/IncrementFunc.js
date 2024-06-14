import { addRoom } from "../functions/addRoom.js"

export const IncrementFunc = (event, noOfRooms, setNoOfRooms, totalNoOfRooms, setRoomStatus, noOfAdults, noOfChild, setNoOfAdults, setNoOfChild, roomPricePreDiscount,
  roomPricePostDiscount,
  setRoomPricePreDiscount,
  setRoomPricePostDiscount,
  roomBasePrice1,
  roomBasePrice2,
  setBookingSummaryComponent,
  roomId
) => {

  const roomStatusElement =
    event.currentTarget.parentElement.previousElementSibling

  if (noOfRooms != totalNoOfRooms) {
    setNoOfRooms((prevValue) => {

      if (prevValue + 1 >= totalNoOfRooms) {
        roomStatusElement.classList.remove("text-green-500")
        roomStatusElement.classList.add("text-my-bgColor1")
        setRoomStatus("No room left")
        console.log(prevValue);

      } else {
        setRoomStatus(`Hurry ! ${totalNoOfRooms - (prevValue + 1)} rooms left`)

      }

      return prevValue + 1

    })
    setNoOfAdults(noOfAdults + 2)
    setNoOfChild(noOfChild + 1)
    const updatedRoomPricePreDiscount = parseFloat(roomBasePrice1.current) + parseFloat(roomPricePreDiscount)
    const updatedRoomPricePostDiscount = parseFloat(roomBasePrice2.current) + parseFloat(roomPricePostDiscount)
    setRoomPricePostDiscount(updatedRoomPricePostDiscount)
    setRoomPricePreDiscount(updatedRoomPricePreDiscount)

    addRoom(event, noOfRooms + 1)

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

  }
}


