// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CreateSub from "./pages/CreateSub";
import ShowSub from "./pages/ShowSub";
import EditSub from "./pages/EditSub";
import DeleteSub from "./pages/DeleteSub";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import UserMeals from "./pages/UserMeals";



const App = () => {
  let isLogged = localStorage.getItem("user");
  return (
     <Routes>
          <Route path='/' element={isLogged? <Home/>:<Login />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/signup' element={<SignUp />} />
       <Route path="/subs/create/:id" element={<CreateSub />} />
      <Route path="/subs/details/:id" element={<ShowSub />} />
       <Route path="/subs/edit/:id" element={<EditSub />} />
       <Route path="/subs/delete/:id" element={<DeleteSub />} />
       <Route path="/meals" element={<UserMeals/>} />
    </Routes>
  );
};

export default App;
