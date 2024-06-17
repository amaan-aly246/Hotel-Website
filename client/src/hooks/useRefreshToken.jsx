
import axios from "../config/axios.js"
import useAuth from "./useAuth.jsx"
function useRefreshToken() {
    const {setAuth } = useAuth();
    const refresh = async ( )=>{
        try {
            const response = await axios.get('/refresh',{
                withCredentials: true
            })
    
            setAuth((prev )=>{
                return {...prev, accessToken: response.data.accessToken}
            })
            return response.data.accessToken;
        } catch (error) {
            console.log(error.message);
        }
    }
  return refresh;
}

export default useRefreshToken;
