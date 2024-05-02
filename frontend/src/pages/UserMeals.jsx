import React, { useEffect, useState } from "react";
import Sidebar from '../components/Sidebar';
import axios from "axios";

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
           console.log(result)
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);

  return (
    <div>
        <Sidebar/>
        <div className="flex flex-col  reounded-xl justify-center p-4 w-[full] ml-[250px]">
        <span className="text-xl mr-4 text-white flex justify-center">
          Meals time
        </span>
        <table className="w-full">
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
    </div>
  )
}
