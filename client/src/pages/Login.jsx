import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [LoginUser, setLoginUser] = useState("");
  const [LoginPass, setLoginPass] = useState("");

  async function handlesubmit(evt) {
    evt.preventDefault();
    const response = await axios
      .post(
        "http://localhost:4000/login",
        JSON.stringify({
          username: LoginUser,
          password: LoginPass,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .catch((e) => {
        console.log(e.response.status)
        if (e.response.status === 402) {
          alert("mo user found");
        } else {
          alert("incorrect password")
        }
      });
      alert("login")
  }

  return (
    <form
      onSubmit={handlesubmit}
      className="flex flex-col gap-3 mt-3 w-3/4 m-auto p-10 text-center"
    >
      <h1 className="text-5xl mb-4 font-bold">Login</h1>
      <input
        className="rounded px-4 py-2 w-3/4 m-auto text-black"
        type="text"
        placeholder="Username"
        value={LoginUser}
        onChange={(evt) => {
          setLoginUser(evt.target.value);
        }}
      />
      <input
        className="rounded px-4 py-2 w-3/4 m-auto text-black"
        type="password"
        placeholder="Password"
        value={LoginPass}
        onChange={(evt) => {
          setLoginPass(evt.target.value);
        }}
      />
      <button
        type="submit"
        className="border-2 m-auto border-white rounded py-2 w-1/2"
      >
        Login
      </button>
    </form>
  );
}

export default Login;
