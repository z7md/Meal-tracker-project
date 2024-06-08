import React, { useState,useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

export default function Logout() {
    let nave =useNavigate();
    useEffect(()=>{
        localStorage.removeItem("user");
        nave("/");
        window.location.reload();
    })

}
