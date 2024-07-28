import axios from "axios"
// Determine the base URL based on the environment

const BASE_URL = process.env.NODE_ENV === 'development' 
  ? process.env.REACT_APP_BASE_URL_DEV 
  : process.env.REACT_APP_BASE_URL_PROD;

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})