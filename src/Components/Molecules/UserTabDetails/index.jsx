import React from "react";
import profilePic from "../../../assets/image-jeremy.png"
import Text from "../../Atoms/Text";
import Images from "../../Atoms/Images"


export default function UserTabDetails() {
  return (

    <div className="bg-userTabDetails 
    w-100% 
    h-100% 
    rounded-[10px] 
    pt-[25px] 
    pr-[0px] 
    pl-[15px] 
    pb-[35px] 
    mb-[60px]
    z-10
    relative
    max-sm:bg-[hsl(246, 80%, 60%)]
    max-sm:flex
    max-sm:w-100%
    max-sm:flex-row
    max-sm:items-center
    max-sm:justify-center
    max-sm:rounded-[10px]
    max-sm:p-0
    max-sm:mt-[12px]
    max-sm:z-10
    max-sm:relative
    max-sm:gap-[8px]">


      <div className="
      h-[55px]
      w-[54px] 
      rounded-[28px]
      border-white 
      border-solid
      border-2 
      max-sm:h-[35px]
      max-sm:w-[34px]
      max-sm:rounded-[28px]
      max-sm:border-white
      max-sm:border-solid
      max-sm:border-2">
        <Images className="w-[50px] max-sm:w-[30px]" src={profilePic} alt="profilePicture" height="40px" />
      </div>
      <div>
        <div className="
        pt-[26px]
        text-[0.6rem]
        font-light
        text-lightgray     
        max-sm:pt-[6px]
        max-sm:text-[0.5rem]
        max-sm:font-light
        max-sm:text-lightgray">
          <Text type="p" text="Report for" />
        </div>

        <div className="
        pt-[5px]
        pb-[5px]
        text-[25px]
        font-light
        max-sm:pt-[2px]
        max-sm:pb-[25px]
        max-sm:text-[12px]
        max-sm:font-light
        max-sm:flex
        max-sm:flex-row
        max-sm:gap-[5px]
        ">
          <Text type="p" text="Jeremy" />
          <Text type="p" text="Robson" />
        </div>
      </div>
    </div>
  );
}
