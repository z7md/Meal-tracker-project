// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import Header from "../components/Header";

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
    <div className="p-4 justify-center items-center w-full flex flex-col bg-gray-200 h-screen  text-gray-500 ">
      
      <div className="flex w-full justify-center items-center"></div>
      <h1 className="text-[32px] my-4">Subscriper Profile</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col w-[600px] bg-white justify-center rounded-lg text-2xl">
          <div className="flex p-4  rounded-full">
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
            <span>Protein : {}</span>
            <span>{sub.expirationDate}</span>
          </div>
          
        </div>
      )}
      <Header sub={id}/>
      <div className="flex flex-col  reounded-xl justify-center p-4 w-[600px]">
        <span className="text-xl mr-4 text-white flex justify-center">
          Meals time
        </span>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-white rounded-md">التاريخ</th>
              <th className="border border-white rounded-md">
                عدد الوجبات
              </th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((meal) => (
              <tr key={meal.key} className="text-center">
                <td
                  key={meal.key}
                  className="border border-white rounded-md"
                >
                  {meal.time}
                </td>
                <td
                  key={meal.key}
                  className="border border-white rounded-md"
                >
                  {meal.meal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowSub;

{
  /* <div className="flex flex-col border-2 border-sky-400 reounded-xl justify-center p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{sub.id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Phone</span>
            <span>{sub.phone}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Meals</span>
            <span>{sub.meals}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Carb</span>
            <span>{sub.carb}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">protein</span>
            <span>{sub.protein}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Meals left:</span>
            <span>{sub.mealsLeft}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create time</span>
            <span>{new Date(sub.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Expiration Date </span>
            <span>{sub.expirationDate}</span>
          </div>
        </div> */
}
