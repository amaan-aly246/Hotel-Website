export const removeRoom = (event) => {
    const roomsContainer = event.target.closest('#roomsContainer')
    roomsContainer.lastChild.remove();

}