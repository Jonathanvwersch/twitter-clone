import { DotsHorizontalIcon } from '@heroicons/react/solid'
import React from 'react'

function SidebarProfile() {
  return (
    <div className="hoverAnimation flex items-center p-[12px]">
      <img src="" alt="" className="h-10 w-10 rounded-full xl:mr-4" />
      <div className="overflow hidden flex-col leading-5 xl:flex">
        <span className="overflow max-w-full font-bold text-[#E7E9EA]">
          Jonathan van Wersch
        </span>
        <span className="overflow text-[#71767B]">@jonathan-van-wetsch</span>
      </div>
      <DotsHorizontalIcon className="ml-4 hidden h-5 xl:inline" />
    </div>
  )
}

export default SidebarProfile
