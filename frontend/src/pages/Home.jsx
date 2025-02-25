// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import Hamburger1 from "../components/Hamburger1";

export const Context = React.createContext();
const catagories = ["No", "Phone Number", "Name", "Meals", "Carb", "Protein"];

export default function Home() {
  let user = JSON.parse(localStorage.getItem("user"));
  
  function isExperied(sub) {
    let date = sub.expirationDate;
    var now = moment().format("L");

    if (now > date || sub.mealsLeft < 1) return true;
    else return false;
  }
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/${user._id}`)
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
    <div className="flex">
    <Hamburger1/>
      <Sidebar />
      <div className="p-4 w-full">
      <div className="flex flex-col">
      <div>
        <SearchBar setResult={setResult} />
        </div>
        <div className="w-auto md:ml-[250px]">   
        <h1 className="text-4xl my-8 flex justify-center w-full">
          قائمة المشتركين
        </h1>
        <div className="flex items-center">
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col justify-around items-center w-full">
              <div className="flex w-full justify-around text-2xl bg-black">
                {catagories.forEach((cat) => {
                  <span className="border border-slate-700 text-center text-black w-[150px] p-2">
                    {cat}
                  </span>;
                })}
              </div>
              {result.map((sub, index) => (
                <Link
                  key={sub.key}
                  to={`/subs/details/${sub._id}`}
                  className={`${
                    isExperied(sub) ? "bg-gray-500" : ""
                  } flex-1 hover:opacity-70 hover:bg-gray-200 w-full`}
                >
                  <div
                    key={sub.key}
                    className="flex w-full justify-around text-2xl mt-2 "
                  >
                    <span className="border-2 border-slate-700  text-center w-[275px] p-2 max-md:hidden max-h-[50px]">
                      {index + 1}
                    </span>
                    <span className="border-2 border-slate-700 text-center w-[275px] p-2 max-h-[50px]">
                      {sub.phone}
                    </span>
                    <span className="border-2 border-slate-700 text-center w-[275px] p-2 max-h-[50px] min-w-[150px]">
                      {sub.subname}
                    </span>
                    <span className="border-2 border-slate-700  text-center w-[275px] p-2 max-md:hidden max-h-[50px]">
                      {sub.meals}
                    </span>
                    <span className="border-2 border-slate-700  text-center w-[275px] p-2 max-md:hidden max-h-[50px]">
                      {sub.carb}
                    </span>
                    <span className="border-2 border-slate-700  text-center w-[275px] p-2 max-md:hidden max-h-[50px]">
                      {sub.protein}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
