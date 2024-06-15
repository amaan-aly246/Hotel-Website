import { React, useRef, useState } from "react"
import { NavLink, Outlet  } from "react-router-dom"
function Navigation() {
  const [hidden, setHidden] = useState(true)

  return (
    <>
      <section
        className=" flex w-full justify-between bg-my-bgColor1 text-white  font-roboto-condensed
      cursor-pointer sticky top-0 z-50
    ">
        <span className="ml-3 mt-4 text-3xl">BEST HOTELS </span>
        <nav>
          <ul className="mr-3 list-none flex gap-2 my-2 list capitalize   ">
            <li className="hover:text-red-100 hidden sm:block ">
              <p>
                <NavLink to={"/"}>
                  <i className="fa-solid fa-house px-6 underline "></i>
                </NavLink>
              </p>{" "}
              hotel Info
            </li>
            <li className="hover:text-red-100 px-4 hidden sm:block">
              <NavLink to="/login">
                <p>
                  <i className="fa-solid fa-lock px-8 "></i>
                </p>
                Login/SignUp
              </NavLink>
            </li>

            <li
              className=" py-1 text-2xl sm:hidden"
              onClick={() => {
                setHidden(!hidden)
              }}>
              {hidden == true ? (
                <i className="fa-solid fa-bars"></i>
              ) : (
                <i class="fa-solid fa-xmark"></i>

              )}
            </li>
          </ul>
        </nav>
      </section>
      {!hidden && <aside className="absolute  bg-my-bgColor3 text-white right-0  z-30 w-[15em] h-[10em] flex flex-col top-[3.6em] gap-2 border rounded-sm " onClick={()=> setHidden(!hidden)}>
        <NavLink to="/" className="text-2xl  hover:outline hover:outline-2 w-full text-center">
          Home{" "}
        </NavLink>
        <NavLink to="/login" className="text-2xl  hover:outline hover:outline-2 w-full text-center">
          Login/Signup
        </NavLink>
      </aside>}
      <Outlet />
    </>
  )
}

export default Navigation
{
  /* <li className="hover:text-red-700 hidden sm:block">
            <p>
              <i className="fa-regular fa-user px-2  "></i>
            </p>{" "}
            User
          </li> */
}
{
  /* <li className="hover:text-red-700 hidden sm:block">
            <p>
            <i className="fa-solid fa-database px-4"></i>
            </p>
            Admin
          </li> */
}
