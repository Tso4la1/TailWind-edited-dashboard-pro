import React from "react";
import Icons from "../../Atoms/Icons";

export default function UserTimerList({ active }) {
  return (
    <div className="
    
    grid
    grid-cols-3
    w-[100%]
    mt-[40px]
    mr-[180px]
    mb-0
    ml-[8px]
    max-sm:flex
    max-sm:flex-col
    max-sm:w-[100%]
    max-sm:mt-0
    max-sm:mr-[12px]
    max-sm:mb-0
    max-sm:ml-[2px]
    max-sm:gap-[12px]

    ">
      {active.map((item) => (
        <div className="firstActiveTimer
        rounded-[13px]
        m-[10px]
        max-sm:rounded-[13px]
        max-sm:m-0
        " key={item.id}>

          <div className="
          
          flex
          justify-end
          pr-[8px]
          z-0
          ">{item.backgroundImg}</div>
          <div key={item.id} className="userTimerListDetails">
            <div className="userTimerTitle">
              {item.duty}
              <Icons type={item.icon} />
            </div>
            <div className="userTimer">
              {item.time}
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

