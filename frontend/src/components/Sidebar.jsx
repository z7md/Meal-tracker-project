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
  return (
    <div className='h-[100%] w-[250px] bg-[#2F4050] fixed'>
      <ul className="w-[100%] h-auto list-none">
      {SidebarData.map((val,key)=>{
        {if(window.location.pathname == val.link){
           x="bg-[#273039]"
        }else{
          x=null
        }}
        return (
            <li  className={`w-full h-[50px]  flex text-white justify-center items-center hover:cursor-pointer hover:bg-[#293846] ${x}`}   key={key} onClick={()=>{window.location.pathname = val.link}}  >
              {console.log(x)}
              <div className="flex-[30%] grid place-items-center">{val.icon}</div>
              <div className="flex-[70%]">{val.title}</div>
            </li>
        )
      })}
      </ul>
    </div>
  )
}
