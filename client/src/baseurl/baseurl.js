import axios from "axios";

export default axios.create({
    // baseURL: 'https://hotel-website-1-9mlw.onrender.com/rooms'
    baseURL: 'http://localhost:8000/api'
})