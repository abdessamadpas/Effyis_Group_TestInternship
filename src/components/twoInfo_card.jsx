import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function TwoInfoCard({
  bgCard,
  bgIcon,
  Icon,
  thisWeek,
  firstKey,
  firstKeyColorWarn,
  firstValue,
  firstCurrency,
  firstPercent,
  secondKey,
  secondValue,
  secondPercent,
}) {
  return (
    <div
      className={` flex flex-col justify-between items-center py-[11px] px-[15px]  gap-8  rounded-xl   w-full h-full bg-[${
        bgCard ? bgCard : ""
      }] `}
    >
      <div className="flex flex-row justify-between gap-2 w-full">
        <div
          className={`flex  items-center justify-center bg-[${
            bgIcon ? bgIcon : null
          }] w-9 h-9 rounded-lg`}
        >
          {Icon && <img src={Icon} width={"16px"} alt=""/>}
        </div>
        {thisWeek ? (
          <div className=" flex gap-1 items-center">
            <p className=" text-xs text-[#BEC0CA]">This Week </p>
            <IoIosArrowDown size={16} color="#BEC0CA" />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="flex justify-start items-center gap-16 w-full text-start">
        <div className="flex flex-col  ">
          <p className={`text-sm ${bgCard  ? "text-white" :( firstKeyColorWarn?  `text-[#CC5F5F]` : "text-[#8B8D97]")} `}>
            {firstKey ? firstKey : null}
          </p>
          <p
            className={`flex  items-center gap-1 text-xl font-medium leading-[30px] ${
              bgCard ? "text-white" : "text-[#45464E]"
            }`}
          >
            {firstCurrency ? firstCurrency : null}
            {firstValue ? firstValue : null}
            <span
              className={`text-xs font-normal ${
                bgCard ? "text-[#DBDEEE]" : "text-[#519C66]"
              }`}
            >
              +{firstPercent ? firstPercent : null}%
            </span>
          </p>
        </div>
        <div>
          <p className={`text-sm ${bgCard ? "text-white" : "text-[#8B8D97]"} `}>
            {secondKey ? secondKey : null}
          </p>

          <p
            className={`flex items-center gap-1 text-xl font-medium leading-[30px] ${
              bgCard ? "text-white" : "text-[#45464E]"
            } `}
          >
            {secondValue ? secondValue : null}
            {secondPercent ? (
              <span
                className={`text-xs font-normal ${
                  bgCard ? "text-[#DBDEEE]" : "text-[#519C66]"
                }`}
              >
                +{firstPercent ? firstPercent : null}%
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </div>
  );
}
