import React from "react";
import UsertabDetails from "../../Molecules/UserTabDetails";
import UserCalendar from "../../Molecules/UserCalendar";

export default function UserCard() {
  return (
    <div className="
    
    w-[12%] 
    flex
    flex-col
    max-sm:w-[59%]
    max-sm:h-[11%]
    max-sm:flex
    max-sm:flex-col">
      <UsertabDetails />
      <UserCalendar />
    </div>
  );
}
