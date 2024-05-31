import React from "react"

function RoomsContainer() {
  return (
    <>
      <div className=" flex gap-4 justify-between ">
        <img
          src="/assets/images/img1.jpg"
          alt="img1"
          className="w-[250px] h-[200px] hidden sm:block"
        />
        <div className="grow divide-y-2 divide-red-400 rounded-sm border-[1.3px] p-2   myBoxShadow-1 ">
          <div className="flex justify-between">
            <h1 className="text-my-bgColor1 text-[1.3rem] ">
              60% Discount-Deluxe Double/Twin Room Only
            </h1>
            <p className="bg-my-bgColor1 w-20 h-7 text-white font-bold pl-2 ">
              <i class="fa-solid fa-tag mr-2"></i>
              Deal
            </p>
          </div>

          <div className="flex justify-between py-4 b">
            {/* left */}
            <div className=" text-sm ">
              <p>
                <span>Room capacity :</span>
                <span>3 </span>
                <i class="fa-solid fa-person text-2xl mr-2"></i>
                <span>2</span>
                <i class="fa-solid fa-baby text-xl ml-1"></i>
              </p>
              <p>Room rates exclusive of tax</p>
              <p className="text-green-600">Rate includes : 60% discount !</p>
              <p className="font-light text-sm">Extra adult rate : 400</p>
              <p className="font-light text-sm">extra child rate : 400</p>
            </div>
            {/* right */}
            <div>
              <span className="font-bold">&#8377; </span>
              <s>5,479.00</s>
              <p className="text-my-bgColor1 text-3xl  font-bold">
                <span className=" ">&#8377; </span>
                <span>2,191.60</span>
              </p>
              <p className="font-light text-sm ">price for 1 night</p>
              <p className="font-light text-sm ">2 adults, 1 child, 1 room</p>
            </div>
          </div>

          {/* part 3 */}
          <div className="flex justify-between ">
            <div className=" mt-3 cursor-pointer">
              <span>
                <i class="fa fa-info"></i>
              </span>
              <span className="text-my-bgColor1 ml-2">Room info </span>
            </div>
            <div className="">
              <span className="text-my-bgColor1 mr-3">only 1 room left</span>
              <button className=" myBtn-1">
                <i class="fa-solid fa-minus "></i>
              </button>
              <p className="myBtn-1 inline-block font-normal m-2">1</p>
              <button className="myBtn-1">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          {/* room  */}
          <div className="flex gap-2 py-4">
            <h5 className="text-sm font-thin mt-3 mr-2">
              Room
              <span> 1 </span>
            </h5>
            <div>
              <label>Adult </label>
              <select name="adult" id="adult">
                <option value="1">1</option>
                <option value="2" selected>
                  2
                </option>
              </select>
              <span className="block text-sm font-thin">(12+years)</span>
            </div>
            <div>
              <label>child </label>
              <select name="child" id="child">
                <option value="1">1</option>
                <option value="2" selected>
                  2
                </option>
              </select>
              <span className="block text-sm font-thin">(0-12 years)</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default RoomsContainer
