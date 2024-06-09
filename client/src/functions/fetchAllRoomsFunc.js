import axios from 'axios';
import baseurl from '../baseurl/baseurl';
export const fetchAllRoomsFunc = async () => {

    const response = await baseurl.get('rooms/all');
    // const response = await axios.get('https://hotel-website-1-9mlw.onrender.com/rooms/all')
    
  
    return response.data.room;
    
}