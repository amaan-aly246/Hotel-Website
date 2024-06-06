
export const addRoom = (event , noOfRooms) => {
    const roomsContainer = event.target.closest('#roomsContainer')
    const roomId = roomsContainer.parentElement.id;

    const section = document.createElement('section');
    section.classList = "flex gap-2 py-4"
    section.innerHTML = `
              <h5 className="text-sm font-thin mt-3 mr-2">
            Room
            <span> ${noOfRooms} </span>
          </h5>
          <div>
            <label>Adult </label>
            <select name="adult" id="adult">
              <option value="1">1</option>
              <option value="2" defaultValue={2}>
                2
              </option>
            </select>
            <span className="block text-sm font-thin">(12+years)</span>
          </div>
          <div>
            <label>child </label>
            <select name="child" id="child">
              <option value="1">1</option>
              <option value="2" defaultValue={2}>
                2
              </option>
            </select>
            <span className="block text-sm font-thin">(0-12 years)</span>
          </div>
    `

    roomsContainer.appendChild(section);
}


