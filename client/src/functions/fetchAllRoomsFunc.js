import api from '../axios/api.js'
import axios from 'axios';
export const fetchAllRoomsFunc = async () => {
    // const response = await api.get('/all');
    const response = await axios.get('http://localhost:8000/rooms/all');
  
    return response.data.room;
    
}