import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import DoughnutChart from "./doughnutChart";
export default function Marketing() {
  return (
    <div className="flex flex-col justify-between items-center gap-3 ">
      <div className="flex justify-between w-full">
        <p className=" font-medium text-base text-[#45464E]">Marketing</p>
        <div className=" flex gap-1 items-center">
          <p className=" text-xs text-[#BEC0CA]">This Week</p>
          <IoIosArrowDown size={16} color="#BEC0CA" />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-1">
          <GoDotFill color="#D23565" />
          <p className="text-[#A6A8B1] " >Acquisition</p>
        </div>
        <div className="flex items-center gap-1">
          <GoDotFill color="#97A5EB" />
          <p className="text-[#A6A8B1] ">Purchase</p>
        </div>
        <div className="flex items-center gap-1">
          <GoDotFill color="#FFCC91" />
          <p className="text-[#A6A8B1] ">Retention</p>
        </div>
      </div>
      <div className="mt-5">
        <DoughnutChart />
      </div>
    </div>
  );
}
