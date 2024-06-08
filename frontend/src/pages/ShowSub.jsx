// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const ShowSub = () => {
  let currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  console.log(currentDate);
  const [sub, setSub] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/subs/${id}`)
      .then((response) => {
        setSub(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  let arr = sub.mealTime;
  return (
  <div className="flex">
  <Sidebar/>
    <div className="p-4 w-full flex flex-col bg-white  text-black justify-center items-center">
      
      <div className="flex w-full justify-center items-center"></div>
      <h1 className="text-[32px] my-4">Subscriper Profile</h1>

      {loading ? (
        <Spinner />
      ) : (
        
        <div className="flex flex-col w-[600px] bg-[#293846] justify-center rounded-lg text-2xl text-white">
          <div className="flex p-4  rounded-full  max-xl:items-end">
            <span>Name :  { }</span>
            <span>{sub.subname}</span>
          </div>
          <div className="flex p-4">
            <span>  Phone number : { }</span>
            <span>{sub.phone}</span>
          </div>
          <div className="flex p-4">
            <span>Meals : {}</span>
            <span>{sub.meals}</span>
          </div>
          <div className="flex p-4">
            <span>Carb : {}</span>
            <span>{sub.carb}</span>
          </div>
          <div className="flex p-4">
            <span>Protein : {}</span>
            <span>{sub.protein}</span>
          </div>
          <div className="flex p-4">
            <span>Meals Left : {}</span>
            <span>{sub.mealsLeft}</span>
          </div>
          <div className="flex p-4">
            <span>Expires :</span>
            <span>{sub.expirationDate}</span>
          </div>
          
        </div>
      )}
      <Header sub={id}/>
      <div className="flex flex-col  reounded-xl justify-center p-4 w-[600px]">
        <span className="text-4xl mr-4 text-white flex justify-center">
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
          <tbody className="text-3xl">
            {arr?.map((meal) => (
              <tr key={meal.key} className="text-center">
                <td
                  key={meal.key}
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
    </div>
  );
};

export default ShowSub;

