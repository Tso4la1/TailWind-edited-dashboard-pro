import React from "react";
import Icons from "../../Atoms/Icons";
import Text from "../../Atoms/Text"
import UserTimerList from "../../Molecules/UserTimerList";



export default function Activitiesgrid() {
    const active =
        [
            {
                id: 1,
                duty: <Text type="p" text="Work" />,
                icon: "ellipsis",
                time: <Text type="p" text="32hrs" className="
                text-[35px] 
                font-light
                pt-0
                pr-0 
                pb-[2px]
                pl-[20px]
                max-sm:text-[16px]
                max-sm:font-light
                max-sm:p-0" />,
                text: <Text type="p" text="Last Week - 36hrs" className="
                text-[0.6rem]
                font-light
                text-smallLetters
                pt-0
                pr-0
                pb-0
                pl-[20px]
                max-sm:text-[0.5rem]
                max-sm:font-light
                max-sm:text-smallLetters
                p-0
                " />,
                backgroundImg: <Icons type="work" className="h-[50px] w-[50px]" />,
            },
            {
                id: 2,
                duty: <Text type="p" text="Play" />,
                icon: "ellipsis",
                time: <Text type="p" text="10hrs" className="
                text-[35px] 
                font-light
                pt-0
                pr-0 
                pb-[2px]
                pl-[20px]
                max-sm:text-[16px]
                max-sm:font-light
                max-sm:p-0" />,
                text: <Text type="p" text="Last Week - 8hrs" className="
                text-[0.6rem]
                font-light
                text-smallLetters
                pt-0
                pr-0
                pb-0
                pl-[20px]
                max-sm:text-[0.5rem]
                max-sm:font-light
                max-sm:text-smallLetters
                p-0
                " />,
                backgroundImg: <Icons type="play" className="h-[50px] w-[50px]" />,
            },
            {
                id: 3,
                duty: <Text type="p" text="Study" />,
                icon: "ellipsis",
                time: <Text type="p" text="4hrs" className="
                text-[35px] 
                font-light
                pt-0
                pr-0 
                pb-[2px]
                pl-[20px]
                max-sm:text-[16px]
                max-sm:font-light
                max-sm:p-0" />,
                text: <Text type="p" text="Last Week - 7hrs" className="
                text-[0.6rem]
                font-light
                text-smallLetters
                pt-0
                pr-0
                pb-0
                pl-[20px]
                max-sm:text-[0.5rem]
                max-sm:font-light
                max-sm:text-smallLetters
                p-0
                " />,
                backgroundImg: <Icons type="study" className="h-[50px] w-[50px]" />,
            },
            {
                id: 4,
                duty: <Text type="p" text="Exercise" />,
                icon: "ellipsis",
                time: <Text type="p" text="4hrs" className="
                text-[35px] 
                font-light
                pt-0
                pr-0 
                pb-[2px]
                pl-[20px]
                max-sm:text-[16px]
                max-sm:font-light
                max-sm:p-0" />,
                text: <Text type="p" text="Last Week - 5hrs" className="
                text-[0.6rem]
                font-light
                text-smallLetters
                pt-0
                pr-0
                pb-0
                pl-[20px]
                max-sm:text-[0.5rem]
                max-sm:font-light
                max-sm:text-smallLetters
                p-0
                " />,
                backgroundImg: <Icons type="exercise" className="h-[50px] w-[50px]" />,
            },
            {
                id: 5,
                duty: <Text type="p" text="Social" />,
                icon: "ellipsis",
                time: <Text type="p" text="5hrs" className="
                text-[35px] 
                font-light
                pt-0
                pr-0 
                pb-[2px]
                pl-[20px]
                max-sm:text-[16px]
                max-sm:font-light
                max-sm:p-0" />,
                text: <Text type="p" text="Last Week - 10hrs" className="
                text-[0.6rem]
                font-light
                text-smallLetters
                pt-0
                pr-0
                pb-0
                pl-[20px]
                max-sm:text-[0.5rem]
                max-sm:font-light
                max-sm:text-smallLetters
                p-0
                " />,
                backgroundImg: <Icons type="social" className="h-[50px] w-[50px]" />,
            },
            {
                id: 6,
                duty: <Text type="p" text="Self Care" />,
                icon: "ellipsis",
                time: <Text type="p" text="2hrs" className="
                text-[35px] 
                font-light
                pt-0
                pr-0 
                pb-[2px]
                pl-[20px]
                max-sm:text-[16px]
                max-sm:font-light
                max-sm:p-0" />,
                text: <Text type="p" text="Last Week - 2hrs" className="
                text-[0.6rem]
                font-light
                text-smallLetters
                pt-0
                pr-0
                pb-0
                pl-[20px]
                max-sm:text-[0.5rem]
                max-sm:font-light
                max-sm:text-smallLetters
                p-0
                " />,
                backgroundImg: <Icons type="self-care" className="h-[50px] w-[50px]" />,
            }
        ];
    return (
        <div className="activitiesGrid">
            <UserTimerList active={active} />
        </div>)
        ;
}
