import React from 'react'
import { FaHouse } from "react-icons/fa6"
import { FaRightToBracket } from "react-icons/fa6"
import { FaBuilding } from "react-icons/fa6";

const SidebarData=[
    {
        title:"Dash Board",
        icon:<FaBuilding />,
        link:"/dashboard"
    },
    {
        title:"Home",
        icon:<FaHouse />,
        link:"/home"
    },
    {
        title:"Log out",
        icon:<FaRightToBracket />,
        link:"/Logout"
    },
]
export default function Sidebar() {
  return (
    <div className='h-[100%] w-[250px] bg-[#2F4050] fixed'>Sidebar</div>
  )
}
