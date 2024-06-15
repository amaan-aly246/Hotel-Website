import axios from '../baseurl/axios.js';
export const fetchAllRoomsFunc = async () => {

    const response = await axios.get('rooms/all');
    // const response = await axios.get('https://hotel-website-1-9mlw.onrender.com/rooms/all')
    
  
    return response.data.room;
    
}