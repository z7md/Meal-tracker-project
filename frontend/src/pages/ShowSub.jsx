// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
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
    <div className="p-4 justify-center items-center w-full flex flex-col">
    <Header sub={id}/>
      <div className="flex w-full justify-center items-center">
        <BackButton className="left-0" />
      </div>
      <h1 className="text-3xl my-4">Show Sub</h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 reounded-xl justify-center p-4">
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
        </div>
      )}
      <div className="flex flex-col  reounded-xl justify-center p-4 w-[600px]">
        <span className="text-xl mr-4 text-gray-500 flex justify-center">
          Meals time
        </span>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">التاريخ</th>
              <th className="border border-slate-600 rounded-md">
                عدد الوجبات
              </th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((meal) => (
              <tr key={meal.key} className="text-center">
                <td
                  key={meal.key}
                  className="border border-slate-600 rounded-md"
                >
                  {meal.time}
                </td>
                <td
                  key={meal.key}
                  className="border border-slate-600 rounded-md"
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
