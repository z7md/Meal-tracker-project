import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export default function Dashboard() {
  let nave = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  const [totalSub,setTotalSubs]=useState();
  const [lastElement,setLastElement]=useState();
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5555/${user._id}`)
      .then((response) => {
        setTotalSubs(response.data.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/user/${user._id}`)
      .then((response) => {
        setResult(response.data.data);
        setLastElement(response.data.data.mealTime[response.data.data.mealTime.length - 1 ].meal);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  // let lastElement = result.mealTime.slice(-1);
  let x =result.mealTime;
  
   

  return (
    <div className="flex">
      <Sidebar />
      
      <div className="w-full">
      <span className="flex items-center justify-center text-3xl p-12">مرحبا</span>
        <div className="w-full flex gap-[40px] justify-around max-md:flex-col max-md:justify-center max-md:items-center">
          <Link
            to={"/home"}
            className="size-[300px] border-[2px] border-black  rounded-lg"
          >
            <div  className="text-center flex flex-col text-3xl w-full">
              <span className="mt-[70px]">مجموع المشتركين</span>
              <span>{totalSub}</span>
            </div>
          </Link>
          <Link
            to={"/meals"}
            className="size-[300px] rounded-lg border-[2px] border-black"
          >
            <div className="flex flex-col justify-start items-center text-3xl gap-4">
              <span className="mt-6"> مجموع الوجبات</span>
              <span>{result.totalMeals}</span>
              <span>وجبات اليوم</span>
              <span>{lastElement}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

