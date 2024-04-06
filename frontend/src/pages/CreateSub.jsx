/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateSub = () => {
  const [subname, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [meals, setmeals] = useState("");
  const [carb, setCarb] = useState("");
  const [protein, setProtein] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveSub = () => {
    const data = {
      subname,
      phone,
      meals,
      carb,
      protein,
    };
    if (data.carb == 0 || data.protein == 0 || data.meals == 0) {
      // alert("Please Choose selection for meals, carb and protein ");\
      let warning = document.getElementById("warning1");
      warning.classList.remove("hidden");
    } else {
      setLoading(true);
      axios
        .post("http://localhost:5555/subs", data)
        .then(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setLoading(false);
          alert("An error happend");
          console.log(error);
        });
    }
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Sub</h1>
      {loading ? <Spinner /> : ""}
      <div className="justify-center items-center text-red-900 text-3xl mb-9 hidden flex" id="warning1">
        تاكد من انك قمت بادخال جميع البيانات المطلوبة
      </div>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name</label>
          <input
            type="text"
            value={subname}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Meals</label>
          <select name="meals" onChange={(e) => setmeals(e.target.value)}>
            <option value="0">Please Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Carb</label>
          <select name="carb" onChange={(e) => setCarb(e.target.value)}>
            <option value="0">Please Select</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
          </select>
        </div>

        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Protein</label>
          <select name="protein" onChange={(e) => setProtein(e.target.value)}>
            <option value="0">Please Select</option>
            <option value="100">100</option>
            <option value="150">150</option>
            <option value="200">200</option>
            <option value="250">250</option>
          </select>
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveSub}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateSub;
