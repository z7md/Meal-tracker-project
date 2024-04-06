// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteSub = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteSub = () => {
    setloading(true);
    axios
      .delete(`http://localhost:5555/subs/${id}`)
      .then(() => {
        setloading(false);
        navigate("/");
      })
      .catch((error) => {
        setloading(false);
        alert("error happend");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete sub</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-lg w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You Want To delete this Sub?</h3>
        <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteSub}>Yes,Delete it</button>
      </div>
    </div>
  );
};

export default DeleteSub;
