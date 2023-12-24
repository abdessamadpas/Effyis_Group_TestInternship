import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function ChartHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className=" flex gap-5 items-center ">
        <div className=" text-[16px] font-medium text-[#45464E] ">Summary</div>
        <div className=" flex gap-5 items-center bg-[#D2356514] rounded-lg px-3 py-2">
          <p className="text-[#D23565] text-sm font-normal ">Sales</p>
          <IoIosArrowDown size={20} color="#D23565" />
        </div>
      </div>
      <div className=" flex gap-5 items-center  rounded-lg p-2 ">
        <p className="text-xs font-normal ">Last 7 Days</p>
        <IoIosArrowDown size={16} />
      </div>
    </div>
  );
}
