// remove rooms from the booking summary area 
export const removeBookingRoom = (roomId,
    setBookingSummaryComponent,
    bookingSummaryComponent) => {
    if (bookingSummaryComponent.length != 0) {
        const updatedArray = bookingSummaryComponent.filter((item) => (
            item.id != roomId
        ))

        setBookingSummaryComponent(updatedArray);
    }

}