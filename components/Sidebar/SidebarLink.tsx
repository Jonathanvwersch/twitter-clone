import React, { ReactElement } from 'react'

export type SidebarLinkProps = {
  label: string
  icon: ReactElement
  isActive?: boolean
}

const SidebarLink = ({ label, icon, isActive }: SidebarLinkProps) => {
  return (
    <a>
      <div className="hoverAnimation flex items-center py-3 px-[12px]">
        <div className="h-7 w-7">{icon}</div>
        <span
          className={`ml-[20px] text-xl ${
            isActive ? 'font-bold' : ''
          } hidden xl:inline`}
        >
          {label}
        </span>
      </div>
    </a>
  )
}

export default SidebarLink
