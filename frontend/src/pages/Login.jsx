// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const history = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [correct, setCorrect] = useState(true);

  let p;
  if (!correct)
    p = (
      <p className="right-0 text-red-700 text-[16px]">
        Wrong Password or Email{" "}
      </p>
    );

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5555/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "notexist") {
            setCorrect(false);
          } else if (res.data) {
            localStorage.setItem("user", JSON.stringify(res.data));
            history("/dashboard");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-full bg-gray-200 h-screen relative flex justify-center items-center ">
      <div className="flex flex-col items-center gap-2 text-2xl border border-white p-6 rounded-md bg-white shadow-2xl absolute">
        <h1 className="mb-6 text-gray-400 font-medium">Login</h1>
        <form action="POST" className="flex flex-col">
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
            }}
            placeholder="Email"
            className="rounded-md p-2  m-2 focus:outline-none border-[2px] border-gray-400 focus:border-blue-500  "
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="rounded-md p-2 m-2 focus:outline-none border-[2px] border-gray-400  focus:border-blue-500 "
          />
          {p}
          <input
            type="submit"
            onClick={submit}
            className="mt-2 bg-blue-700 text-white px-[110px] rounded-md py-2 hover:scale-105 cursor-pointer hover:bg-blue-800 border border-gray-400"
          />
        </form>

        <Link
          to="/signup"
          className="mt-2 text-gray-400 hover:underline text-bold font-medium  hover:scale-110"
        >
          Create an account
        </Link>
      </div>
    </div>
  );
}
