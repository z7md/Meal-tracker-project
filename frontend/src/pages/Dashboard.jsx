import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function Dashboard() {
    let nave=useNavigate();
    let user = JSON.parse(localStorage.getItem("user"));


    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      axios
        .get(`http://localhost:5555/user/${user._id}`)
        .then((response) => {
           setResult(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);

  return (
    <div>
    <Sidebar />
    
<div className='w-full flex'>

<Link to={"/home"} className='size-[300px] rounded-lg border-[2px] border-black ml-[300px]'>
<div className='flex gap-6'>
<span>المشتركين الحاليين</span>
<span>13</span>

</div>
</Link>
<Link to={"/meals"} className='size-[300px] rounded-lg border-[2px] border-black ml-[300px]'>
<div className='flex gap-6'>
<span>المشتركين الحاليين</span>
<span>13</span>

</div>
</Link>

</div>
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