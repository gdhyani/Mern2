import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { Navigate } from "react-router-dom";
import Alert from "../Components/Alert"
function Login() {
  const [LoginUser, setLoginUser] = useState("");
  const [LoginPass, setLoginPass] = useState("");
  const [redirectHome, setredirectHome] = useState(false);
  const [alert, setAlert] = useState({there:false,message:""})

  async function handlesubmit(evt) {
    evt.preventDefault();
    const response_from_server = await axios
      .post(
        "http://localhost:4000/login",
        JSON.stringify({
          username: LoginUser,
          password: LoginPass,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
        },
        { withCredentials: true }
      )//to read errors if found (no user, incorrect credentials)
      .catch((e) => {
        const code = e.response.status
        if(code===400){
          setAlert({there:true, messsage:"Incorrect password"})
          // console.log({alert})
        }else{
          setAlert({there:true, messsage:"No user found"})
          // console.log({alert})
        }
      });
      //no error found then login successful
      if (response_from_server.status === 200) {
        setredirectHome(true);
      }
  }

  if (redirectHome) {
    return <Navigate to="/" />;
  } else {
    return (
      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-3 mt-3 w-3/4 m-auto p-10 text-center"
      >
        <h1 className="text-5xl mb-4 font-bold">Login</h1>
        <Alert alert={alert.there} alertMess = {alert.messsage}/>
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
        <button type="submit" className="border-2 m-auto rounded py-2 w-1/2">
          Login
        </button>
      </form>
    );
  }
}

export default Login;
