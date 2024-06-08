// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    await axios.
    post("http://localhost:5555/signup", {
         email,
         password,
       }).then((res)=>{
        if(res.data===true){
        alert("User already exists");
        }else if(res.data)
        localStorage.setItem("user", JSON.stringify(res.data));{
        history("/home");
        }
    }).catch((e)=>{
        alert("erorr")
    })

  }


  return (
    <div className="login">
      <h1>Signup</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value.toLowerCase());
          }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} />
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}
