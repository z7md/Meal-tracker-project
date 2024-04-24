// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link,useNavigate } from "react-router-dom";
import moment from "moment";
import SearchBar from "../components/SearchBar";

export const Context = React.createContext();

export default function Home() {
  let navigate=useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
    if (user==null){
      console.log("Hello")
     navigate("/")   
    }


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
    <Context.Provider value={user._id}>
      <div className="p-4 ">
        <SearchBar setResult={setResult} userId={user._id} />
        <h1 className="text-3xl my-8 flex justify-center w-full">
          قائمة المشتركين
        </h1>
        <div className="flex items-center w-full">
          {loading ? (
            <Spinner />
          ) : (
            <div className="flex flex-col justify-around items-center w-full">
              <div className="flex w-full justify-around text-2xl">
                <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                  No
                </span>
                <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                  Phone Number
                </span>
                <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                  Name
                </span>
                <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                  Meals
                </span>
                <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                  Carb
                </span>
                <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                  Protein
                </span>
              </div>
              {result.map((sub, index) => (
                <Link
                  key={sub.key}
                  to={`/subs/details/${sub._id}`}
                  className={`${
                    isExperied(sub) ? "bg-gray-500" : ""
                  } flex-1 hover:opacity-70 hover:bg-gray-200 w-full rounded-md`}
                >
                  <div
                    key={sub.key}
                    className="flex w-full justify-around text-2xl mt-2"
                  >
                    <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                      {index + 1}
                    </span>
                    <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                      {sub.phone}
                    </span>
                    <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                      {sub.subname}
                    </span>
                    <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                      {sub.meals}
                    </span>
                    <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                      {sub.carb}
                    </span>
                    <span className="border border-slate-700 rounded-md text-center w-[275px] p-2">
                      {sub.protein}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </Context.Provider>
  );
}
