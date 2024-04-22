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
        console.log(res.data.key)
        if(res.data===true){
        alert("User already exists");
        }else if(res.data){
        history("/home", { state: { id: res.data} });
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

// try {
//     await axios
//       .post("http://localhost:5555/signup", {
//         email,
//         password,
//       })
//       .then((res) => {
//           console.log(email)
//           console.log(password)
//         if (res.data == "exist") {
//           alert("User already exists");
//         } else if (res) {
//           history("/home", { state: { id: res.data.key } });
//         }
//       })
//       .catch((e) => {
//         alert("wrong details 11");
//         console.log(e);
//       });
//   } catch (e) {
//     console.log(e);
//   }