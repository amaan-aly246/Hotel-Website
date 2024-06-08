import api from '../axios/api.js'
export const fetchAllRoomsFunc = async () => {
    const response = await api.get('/all');
  
    return response.data.room;
    
}