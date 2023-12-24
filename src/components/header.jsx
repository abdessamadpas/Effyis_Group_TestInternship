import React from "react";
import avatar from "../assets/images/Avatar.png";
import { IoNotifications } from "react-icons/io5";
import Home from "../assets/images/Home.png";
export default function Header() {
  return (
    <div className="flex flex-col bg-white">
      <div className=" flex justify-between items-center px-[14px] py-[21px]  w-full h-full">
        <div className="text-[20px] font-medium  text-[#45464E]"> Dashboard</div>
        <div className=" flex justify-center items-center gap-2 md:gap-8 ">
          <div className=" flex justify-center w-8 h-8 items-center bg-[#D235651A] rounded-full relative">
            <div className="bg-[#D23565] w-3 h-3 absolute top-0 right-0  text-xs text-white rounded-full flex justify-center items-center">
              1
            </div>
            <IoNotifications size={18} color="#D23565" />
          </div>
          <div className="">
            <div className=" text-[14px] font-normal text-[#0D062D] ">
              Anima Agrawal
            </div>
            <div className="  text-[12px] font-normal text-[#787486]">
              Company LLC
            </div>
          </div>
          <div className="">
            <img src={avatar} alt="" width={31} height={31} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start px-5 py-1 border-t-2 border-[#F1F3F9] ">
        <img src={Home} alt="" width={15}/>
        <div className="gap-2">
          <span className=" text-[12px] font-normal ml-2">/ Page</span>
          <span className=" text-[12px] font-normal ml-2">/ Page</span>
          <span className=" text-[12px] font-normal ml-2">/ Page</span>
          <span className=" text-[12px] font-normal ml-2">/ Page</span>
        </div>
      </div>
    </div>
  );
}
