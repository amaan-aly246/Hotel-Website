import { removeBookingRoom } from "./removeBookingRoom";

export const removeRoom = (event, noOfRooms, roomId,
    setBookingSummaryComponent,
    bookingSummaryComponent,
    ) => {
    const roomsContainer = event.currentTarget.closest('#roomsContainer')
    roomsContainer.lastChild.remove();
    if (noOfRooms == 1) {
        // remove  room from the Booking summary component on the right
        removeBookingRoom(roomId,
            setBookingSummaryComponent,
            bookingSummaryComponent);
    }
}
