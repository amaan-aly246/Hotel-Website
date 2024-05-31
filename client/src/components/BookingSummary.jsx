import React from "react"

function BookingSummary() {
  return (
    <>
      <section className="p-3 divide-y-[1px] divide-my-bgColor2 sticky top-[6.6em]  ">
        {/* date */}
        <p className=" flex  justify-start gap-5 ">
          <span className=" font-bold">Dates </span>
          <span> 30/05/2024 </span>
          <span>-</span>
          <span>31/05/2024</span>
        </p>

        {/* room info */}
        <div className="my-6">
          <p className="flex justify-between ">
            <span>60% Discount- Double/ Twin</span>
            <i class="fa-solid fa-xmark text-my-bgColor1 cursor-pointer"></i>
          </p>
          <p className="flex justify-between mt-2">
            <span> 2 adults, 1 child, 1 room </span>
            <i class="fa-regular fa-pen-to-square text-my-bgColor1"></i>
          </p>

          <p className=" text-right">
            <span>&#8377; </span>
            <span>1,431.60</span>
          </p>
        </div>
        <div className="my-6">
          <p className="flex justify-between ">
            <span>60% Discount- Double/ Twin</span>
            <i class="fa-solid fa-xmark text-my-bgColor1 cursor-pointer"></i>
          </p>
          <p className="flex justify-between mt-2">
            <span> 2 adults, 1 child, 1 room </span>
            <i class="fa-regular fa-pen-to-square text-my-bgColor1"></i>
          </p>

          <p className=" text-right">
            <span>&#8377; </span>
            <span>1,431.60</span>
          </p>
        </div>

        

        {/*  total amount area */}
        <p className="flex justify-between font-bold text-xl mt-2">
          <span className="font-thin">Total </span>
          <span>&#8377; 3,431.60</span>
        </p>
        <button className="bg-my-bgColor1 text-[#fcf6f6] mt-4 mx-6 w-[15em] h-[2.5em]">
          Book
        </button>
      </section>
    </>
  )
}

export default BookingSummary
