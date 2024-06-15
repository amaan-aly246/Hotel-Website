import React, { useState, useContext } from "react"
import { togglePasswordViewState } from "../functions/togglePasswordViewState.js"
import { handleSetDetails } from "../functions/handleSetDetails.js"
import { NavLink } from "react-router-dom"
import AuthContext from '../context/AuthProvider.jsx'
import axios from "../baseurl/axios.js"
function Login() {
  const { setAuth } = useContext(AuthContext)

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  })
  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(userDetails)
    try {
      const response = await axios.post('/login',
        JSON.stringify(userDetails),
        {
          headers: { 'Content-Type': "application/json"},
          withCredentials: true
        }
      )
      if(response){
        console.log(JSON.stringify(response.data));
        const {accessToken, username} = response.data
        setAuth({accessToken, username , email})
      }
    } catch (error) {
      if(!error.response){
        alert("No server response" );
        console.log(`error message : ${error.message} `);
      }
      else if (error.response.status === 401 ){
        alert(`Unauthorized`)
      }
      else{
        alert("login failed");
        console.log('error message: ' , error.message)
      }
    }
  }
  return (
    <>
      <div className="bg-[#c9184a]  h-screen ">
        <section className="  flex flex-col rounded border bg-my-bgColor3 p-3 sm:w-[30em]  sm:translate-x-[80%] sm:translate-y-[30%] mx-4 ">
          <header className="self-center text-4xl text-my-bgColor2">
            Login
          </header>
          <form className="flex flex-col j text-xl gap-3 text-center m-3 mx-10 text-my-bgColor2">
            <span className="border p-2 rounded focus-within:outline focus-within:outline-2">
              <i className="fa-regular fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
                onChange={(event) => handleSetDetails(event, setUserDetails)}
                className="bg-my-bgColor3 outline-none ml-2"
              />
            </span>
            <span className=" border p-2 rounded focus-within:outline focus-within:outline-2 relative">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                onChange={(event) => handleSetDetails(event, setUserDetails)}
                className="bg-my-bgColor3 outline-none ml-2"
              />
              <i
                className=" cursor-pointer  fa-regular fa-eye absolute right-4 top-3"
                onClick={(event) => togglePasswordViewState(event)}></i>
            </span>
            <button
              className="text-my-bgColor2  p-2 w-[8em] self-center bg-[#c9184a]  hover:border-slate-100 border rounded border-my-bgColor3 "
              type="submit"
              onClick={handleSubmit}>
              Login{" "}
            </button>
          </form>
          <p className=" normal-case self-center text-my-bgColor2 ">
            New User?{" "}
            <NavLink to="/register" className="">
              Register{" "}
            </NavLink>{" "}
            then.
          </p>
        </section>
      </div>
    </>
  )
}

export default Login
