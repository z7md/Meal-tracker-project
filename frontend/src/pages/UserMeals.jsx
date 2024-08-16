import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import axios from "axios";
import Spinner from "../components/Spinner";
import Hamburger1 from "../components/Hamburger1";

export default function UserMeals() {
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
    <div className="flex">
    <Hamburger1/>
        <Sidebar/>
        <div className="w-full">
        <div className="flex flex-col  reounded-xl justify-center p-4 w-[full] md:ml-[250px]">
        { loading ? (

         <Spinner/>
          )  
        
      : ( <div>
      <span className="text-4xl mr-4 text-black flex justify-center p-6">
          اوقات الوجبات
        </span>
        <table className="w-full text-2xl">
          <thead>
            <tr>
              <th className="border border-black rounded-md">التاريخ</th>
              <th className="border border-black rounded-md">
                عدد الوجبات
              </th>
            </tr>
          </thead>
          <tbody>
            {result.mealTime?.map((meal,key) => (
              <tr key={key} className="text-center">
                <td
                  key={key}
                  className="border border-black rounded-md"
                >
                  {meal.time}
                </td>
                <td
                  key={meal.key}
                  className="border border-black rounded-md"
                >
                  {meal.meal}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}
      </div>
    </div>
    </div>
  )
}
