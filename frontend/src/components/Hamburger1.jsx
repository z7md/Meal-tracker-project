import React from 'react'
import Hamburger from "hamburger-react";
import { useState } from "react"
import { FaHouse } from "react-icons/fa6"
import { FaRightToBracket } from "react-icons/fa6"
import { FaBuilding } from "react-icons/fa6";

export default function Hamburger1() {
  const SidebarData=[
    {
      title:"Home",
      icon:<FaHouse />,
      link:"/home"
  },
      {
          title:"DashBoard",
          icon:<FaBuilding />,
          link:"/dashboard"
      },
  
      {
          title:"Logout",
          icon:<FaRightToBracket />,
          link:"/Logout"
      },
  ]
    const [isOpen, setOpen] = useState(false)
  return (
    <div className='left-0 top-0 md:hidden '>
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {
          isOpen?(
            <div className='h-screen bg-[#2F4050] w-screen opacity-90 transition-opacity duration-500 text-white'>

            {SidebarData.map((val,key)=>{
        return (
            <li  className={`w-full h-[150px]  flex text-white justify-center items-center hover:cursor-pointer hover:bg-[#293846]`}   key={key} onClick={()=>{window.location.pathname = val.link}}  >
              <div className="grid place-items-center p-6 text-2xl">{val.icon}</div>
              <div className="text-2xl">{val.title}</div>
            </li>
        )
      })}

            </div>
          ):
          (
            null
          )
        }
    </div>
  )
}
