import React from 'react'
import { FaHouse } from "react-icons/fa6"
import { FaRightToBracket } from "react-icons/fa6"
import { FaBuilding } from "react-icons/fa6";

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
export default function Sidebar() {
  let x=""
  let y=""
  return (
    <div className='min-h-screen w-[250px] bg-[#2F4050] min-w-[150px] fixed max-sm:w-[150px] max-md:w-[200px]'>
      <ul className="w-full h-auto list-none">
      {SidebarData.map((val,key)=>{
        {if(window.location.pathname == val.link){
           x="bg-[#273039]"
        }else{
          x=null
        }}
        {if(val.title=="Logout"){
           y="bottom-0"
        }else{
          y=null
        }}
        return (
            <li  className={`w-full h-[80px]  flex text-white justify-center items-center hover:cursor-pointer hover:bg-[#293846] ${x} ${y}`}   key={key} onClick={()=>{window.location.pathname = val.link}}  >
              <div className="flex-[30%] grid place-items-center bo">{val.icon}</div>
              <div className="flex-[70%]">{val.title}</div>
            </li>
        )
      })}
      </ul>
    </div>
  )
}