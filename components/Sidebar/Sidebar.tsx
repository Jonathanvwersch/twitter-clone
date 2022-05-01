import React from 'react'
import Twitter from '../../assets/icons/Twitter.svg'
import ComposeTweet from '../../assets/icons/ComposeTweet.svg'
import SidebarLink from './SidebarLink'

import { HomeIcon } from '@heroicons/react/solid'

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from '@heroicons/react/outline'
import Button from '../Button/Button'
import SidebarProfile from './SidebarProfile'

const links = [
  { label: 'Home', icon: <HomeIcon />, isActive: true },
  { label: 'Explore', icon: <HashtagIcon /> },
  { label: 'Notifications', icon: <BellIcon /> },
  { label: 'Messages', icon: <InboxIcon /> },
  { label: 'Bookmarks', icon: <BookmarkIcon /> },
  { label: 'Lists', icon: <ClipboardListIcon /> },
  { label: 'Profile', icon: <UserIcon /> },
  { label: 'More', icon: <DotsCircleHorizontalIcon /> },
]

const Sidebar = () => {
  return (
    <div className="fixed top-0 flex h-full min-w-[88px] flex-col items-center justify-between p-2 text-[#00D9DB]  xl:min-w-[275px] xl:items-start">
      <div className="flex w-full flex-col items-center xl:items-start">
        <div className="hoverAnimation ml=[2px] flex h-[50px] w-[50px] items-center justify-center p-0">
          <Twitter className="h-[40px]" />
        </div>
        <nav className="mb-8 flex flex-col">
          <ul className="w-full space-y-2.5">
            <li>
              {links.map((props) => (
                <SidebarLink key={props.label} {...props} />
              ))}
            </li>
          </ul>
        </nav>
        <Button width="hidden xl:inline w-[90%]">Tweet</Button>
        <Button width="xl:hidden">
          <ComposeTweet className="h-6" />
        </Button>
      </div>
      <div className="my-[12px] max-w-full">
        <SidebarProfile />
      </div>
    </div>
  )
}

export default Sidebar
