/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const EditSub = () => 
{
  let user = JSON.parse(localStorage.getItem("user"));
  const userId=user._id;
    const [subname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [meals, setmeals] = useState("");
  const [meals1, setmeals1] = useState("");
  const [carb, setCarb] = useState("");
  const [protein, setProtein] = useState("");
  const [loading, setLoading] = useState(false);
  const [PastmealsLeft, setPastmealsLeft] = useState("");
  const [PastmealTime, setPastmealTime] = useState("");
  const location = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/subs/${id}`)
      .then((response) => {
        setName(response.data.subname);
        setPhone(response.data.phone);
        setCarb(response.data.carb);
        setmeals(response.data.meals);
        setProtein(response.data.protein);
        setPastmealsLeft(response.data.mealsLeft);
        setPastmealTime(response.data.mealTime);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        alert("An Error happend");
        setLoading(false);
      });
  }, []);
  const handleEditSub = () => {
    // mealTime.push(Date.now());
    let mealsLeft = PastmealsLeft - meals1;
    let mealTime = PastmealTime;
    mealTime.push({
      meal: meals1,
      time: moment().format("MMMM Do YYYY, h:mm:ss a"),
    });
    const data = {
      userId,
      meals1:Number(meals1),
      mealsLeft,
      mealTime,
    };
    
    console.log(typeof(Number(meals1)));
    // alert("Please Choose selection for meals, carb and protein ");\
    setLoading(true);
    axios
      .put(`http://localhost:5555/subs/${id}`, data)
      .then(() => {
        setLoading(false);
        location("/home");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happend during putting");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <h1 className="text-3xl my-4">Edit Sub</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-8">Enter how many meals got taken</h1>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Meals</label>
            <select name="meals" onChange={(e) => setmeals1(e.target.value)}>
              <option value="0">Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleEditSub}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSub;
