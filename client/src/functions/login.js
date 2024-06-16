import axios from "../baseurl/axios.js"

export const login = async (userDetails , setAuth,navigate) => {
    // console.log(userDetails)
    try {
        const response = await axios.post('/login',
            JSON.stringify(userDetails),
            {
                headers: { 'Content-Type': "application/json" },
                withCredentials: true
            }
        )

        if (response?.status === 200) {
            const { accessToken, username , email } = response.data
            setAuth({ accessToken, username, email })
            alert("Login  successful!! ")
            navigate('/' , {replace: true})
        }
    } catch (error) {
        if (!error.response) {
            alert("No server response");
            console.log(`error message : ${error.message} `);
        }
        else if (error.response.status === 404) {
            alert("Credentials missing.")
        }
        else if (error.response.status === 401) {
            alert(`Unauthorized`)
        }
        else {
            alert("login failed");
            console.log('error message: ', error.message)
        }
    }
}