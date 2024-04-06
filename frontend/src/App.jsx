// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateSub from "./pages/CreateSub";
import ShowSub from "./pages/ShowSub";
import EditSub from "./pages/EditSub";
import DeleteSub from "./pages/DeleteSub";

const App = () => {
  return (
    <Routes>
         <Route path='/' element={<Home />} />
      <Route path="/subs/create" element={<CreateSub />} />
      <Route path="/subs/details/:id" element={<ShowSub />} />
      <Route path="/subs/edit/:id" element={<EditSub />} />
      <Route path="/subs/delete/:id" element={<DeleteSub />} />
    </Routes>
  );
};

export default App;
