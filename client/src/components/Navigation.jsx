import React from "react"

function Navigation() {
  return (
    <section
      className=" flex w-full justify-between bg-my-bgColor1 text-white  font-roboto-condensed
      cursor-pointer sticky top-0 z-50
    ">
      <span className="ml-3 mt-4 text-3xl">BEST HOTELS </span>
      <nav>
        <ul className="mr-3 list-none flex gap-2 my-2 list capitalize   ">
          <li className="hover:text-red-100 hidden sm:block ">
            <p>
              <i className="fa-solid fa-house px-6 underline "></i>
            </p>{" "}
            hotel Info
          </li>
          <li className="hover:text-red-100 px-4 hidden sm:block">
            <p>
              <i className="fa-solid fa-lock px-8 "></i>
            </p>
            Login/SignUp
          </li>
          {/* <li className="hover:text-red-700 hidden sm:block">
            <p>
              <i className="fa-regular fa-user px-2  "></i>
            </p>{" "}
            User
          </li> */}
          {/* <li className="hover:text-red-700 hidden sm:block">
            <p>
            <i className="fa-solid fa-database px-4"></i>
            </p>
            Admin
          </li> */}
          <li className="hover:text-red-700 py-1 text-2xl sm:hidden">
            <i className="fa-solid fa-bars"></i>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navigation
