import axios from 'axios';
import baseurl from '../baseurl/baseurl';
export const fetchAllRoomsFunc = async () => {

    const response = await baseurl.get('/all');
  
    return response.data.room;
    
}