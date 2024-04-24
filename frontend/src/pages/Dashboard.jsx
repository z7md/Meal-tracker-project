import React from 'react'
import Sidebar from '../components/Sidebar';
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
    let nave=useNavigate();
    let user = JSON.parse(localStorage.getItem("user"));
    function handleLogOut(){
        localStorage.removeItem("user");
        nave("/");
      }
  return (
    <div>
    <Sidebar />
 

        </div>
  )
}


{/* <div className='w-screen flex justify-center item-center text-center p-4 text-[36px]'>
<span>مرحبا {user.username}</span>
<button onClick={handleLogOut}><AiOutlineLogout className="text-red-500 text-4xl mr-5 right-2 " /></button>
</div>
<div className='w-full flex'>

<Link to={"/home"} className='size-[300px] rounded-lg border-[2px] border-black ml-16'>
<div className='flex gap-6'>
<span>المشتركين الحاليين</span>
<span>13</span>

</div>
</Link>

</div> */}