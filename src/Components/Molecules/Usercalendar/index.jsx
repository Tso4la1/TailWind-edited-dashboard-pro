import React from 'react'
import Text from '../../Atoms/Text'

export default function UserCalendar() {
  return (
    <div className='
    
    bg-userCalendar
    w-[12%]
    h-[20%]
    z-0
    rounded-[10px]
    pt-[28px]
    pr-0
    pb-[8px]
    pl-[15px]
    absolute
    top-[59.5%]
    flex
    flex-col
    justify-center
    gap-[13px]
    text-[0.75rem]
    font-normal
    text-slateblue
    max-sm:bg-userCalendar
    max-sm:w-[59%]
    max-sm:h-[9%]
    max-sm:z-0
    max-sm:rounded-[10px]
    max-sm:pt-[10px]
    max-sm:pr-[16px]
    max-sm:pb-0
    max-sm:pl-[16px]
    max-sm:top-[10%]
    max-sm:flex
    max-sm:flex-row
    max-sm:items-center
    max-sm:justify-between
    max-sm:gap-0
    max-sm:text-[0.54rem]
    max-sm:font-normal
    max-sm:text-slateblue
    '>
      <Text type="p" text="Daily" />
      <Text type="p" text="Weekly" />
      <Text type="p" text="Monthly" />
    </div>
  )
}
