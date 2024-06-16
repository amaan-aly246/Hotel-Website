import axios from "../config/axios.js";

export const logout = async (auth, setAuth) => {
    try {
        const response = await axios.post('/logout', {}, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true
        });

        if (response.status === 204) {
            const { accessToken, ...updateAuth } = auth;
            setAuth(updateAuth);
            alert("Logged-out");
        }
    } catch (error) {
        console.log('error', error);
    }
};
