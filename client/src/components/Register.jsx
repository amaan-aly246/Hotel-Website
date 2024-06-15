import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { togglePasswordViewState } from "../functions/togglePasswordViewState.js"
import { handleSetDetails } from "../functions/handleSetDetails.js"
import { NavLink } from "react-router-dom"
import axios from "../baseurl/axios.js"

function Register() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault()
    // console.log(userDetails)
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
        setTimeout(() => {
          navigate('/login')
        }, 2000);
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
  return (
    <>
      <div className="bg-[#c9184a]  h-screen ">
        <section className="  flex flex-col rounded border bg-my-bgColor3 p-3 sm:w-[30em]  sm:translate-x-[80%] sm:translate-y-[30%] mx-4 ">
          <header className="self-center text-4xl text-my-bgColor2">
            Register
          </header>
          <form className="flex flex-col j text-xl gap-3 text-center m-3 mx-10 text-my-bgColor2">
            <span className=" border p-2 rounded focus-within:outline focus-within:outline-2">
              <i className="fa-regular fa-user"></i>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
                autoCapitalize="true"
                autoFocus
                onChange={(event) => handleSetDetails(event, setUserDetails)}
                className=" outline-none ml-2 bg-my-bgColor3"
              />
            </span>
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
            <span className="border p-2 rounded focus-within:outline focus-within:outline-2 relative">
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
              Register{" "}
            </button>
          </form>
          <p className=" normal-case self-center text-my-bgColor2 ">
            Already registered?{" "}
            <NavLink to={"/login"} className="">
              Login{" "}
            </NavLink>{" "}
            then.
          </p>
        </section>
      </div>
    </>
  )
}

export default Register
