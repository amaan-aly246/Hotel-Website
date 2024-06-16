import axios from "../config/axios.js"
export const register = async (userDetails, navigate) => {
    try {
        const response = await axios.post(
            "/register",
            JSON.stringify(userDetails),
            {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            }
        )

        if (response.status === 201) {
            alert(`${userDetails.username} is successfully created`)
            navigate('/login')
        }
        console.log(response.data)
    } catch (error) {
        if (!error?.response) {
            alert("No server Response")
        } else if (error.response?.status === 409) {
            alert(
                `User with mail "${userDetails.email}" already exist. Use different mail for registration`
            )
        } else {
            alert("registration failed")
        }
    }
}