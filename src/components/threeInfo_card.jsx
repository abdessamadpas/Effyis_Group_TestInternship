import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function ThreeInfoCard() {
  return (
    <div className="flex flex-col justify-between items-center px-[15px] py-[11px]  gap-8 w-full rounded-xl">
      <div className="flex flex-row justify-between gap-2 w-full">
        <div className="flex  items-center justify-center bg-[#FFCC9129] w-9 h-9 rounded-lg">
          <HiOutlineShoppingBag />
        </div>
        <div className=" flex gap-1 items-center">
          <p className=" text-xs text-[#BEC0CA]">This Week</p>
          <IoIosArrowDown size={16} color="#BEC0CA" />
        </div>
      </div>

      <div className="flex justify-start items-center gap-14 w-full">
        <div className="flex flex-col ">
          <p className="text-sm text-[#8B8D97] ">All Orders</p>
          <p className="flex text-[#45464E] items-center gap-1 text-xl font-medium leading-[30px]">
            0
          </p>
        </div>
        <div className="flex flex-col ">
          <p className="text-sm text-[#8B8D97]">Pending</p>
          <p className="flex text-[#45464E] items-center gap-1 text-xl font-medium leading-[30px]">
            0
          </p>
        </div>
        <div>
          <p className="text-sm text-[#8B8D97]">Completed</p>

          <p className="flex text-[#45464E] items-center gap-1 text-xl font-medium leading-[30px]">
            0
            <span className=" text-xs font-normal text-[#519C66] ">+0.00%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
