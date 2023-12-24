import React from "react";
import bag from "../assets/images/Bag.png";
import Heart from "../assets/images/Heart.png";

export default function OrderSection() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-5">
      <p className=" text-left text-[#45464E] text-base font-medium">
        Recent Orders
      </p>
      <div className="w-full h-full flex  items-center  py-5 px-20">
        <div className="flex flex-col items-center  justify-center w-full h-full py-5  gap-10">
          <div className="flex justify-center items-center rounded-full border border-[#E1E2E9] w-[140px] h-[140px] bg-[#F4F5FA] ">
            <img src={bag} alt="" />
          </div>
          <div className=" ">
            <p className="font-medium text-xl">No Orders Yet?</p>
            <p className=" font-normal text-sm text-[#8B8D97]">
              Add products to your store and start selling to see orders here.
            </p>
          </div>
          <div className="flex justify-center items-center gap-5 bg-[#D23565] rounded-xl px-[20px] py-[12px]  ">
            <img src={Heart} alt="" />
            <p className=" text-base font-normal  text-white">New Product</p>
          </div>
        </div>
      </div>
    </div>
  );
}
