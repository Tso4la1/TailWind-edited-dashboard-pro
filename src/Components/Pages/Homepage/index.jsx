import React from "react";
import UserCard from "../../Organisms/UserCard";
import ActivitiesGrid from "../../Organisms/ActivitiesGrid";



export default function Homepage() {
  return (
    <div className=" 
    flex 
    justify-center 
    gap-10px 
    h-screen 
    flex-row 
    items-center 
    homepage 
    max-sm: w-100% 
    max-sm: items-center
    max-sm:h-screen 
    max-sm:flex 
    max-sm:flex-col
    max-sm:justify-normal
    
    ">
      <UserCard />
      <ActivitiesGrid />
    </div>
  );
}
