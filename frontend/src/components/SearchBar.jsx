// eslint-disable-next-line no-unused-vars
import React, { useState,useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";


export default function SearchBar(props) {
  let nave=useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  user=user._id;
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch(`http://localhost:5555/${user}`)
      .then((response) => response.json())
      .then((json) => {
        const result = json.data.filter((user) => {
          return (
            user &&
            user.subname &&
            user.subname.toLowerCase().includes(value) +
              user.phone.includes(value)
          );
        });
        props.setResult(result);
      });
  };
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  function handleLogOut(){
    localStorage.removeItem("user");
    nave("/");
  }
  return (
    <div className="flex">
      <div className="w-[40%] m-auto flex flex-col items-center min-w-[200px]">
        <div className="bg-white w-full rounded-[10px] h-[2.5rem] flex items-center shadow-[0_0_8px_rgba(0,0,0,0.3)] p-2">
          <FaSearch className="" />
          <input
            placeholder="Type to search..."
            className="transparent border-none w-full h-full ml-[5px] font-[1.25rem] focus:outline-none"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-6">
      
      <Link to={`/subs/create/${user}`}>
        <MdOutlineAddBox className="text-sky-800 text-4xl" />
      </Link>
      <button onClick={handleLogOut}><AiOutlineLogout className="text-red-500 text-4xl mr-5" /></button>
    </div>
    </div>
  );
}
