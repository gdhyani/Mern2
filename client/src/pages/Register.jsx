import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Alert from "../Components/Alert";


function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectLogin, setredirectLogin] = useState(false);
  const [alert, setAlert] = useState({there:false,message:""})
  
  const navigate = useNavigate();

  async function handlesubmit(evt) {
    evt.preventDefault();

    const response = await axios
      .post(
        "http://localhost:4000/register",
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .catch((e) => {
        if(e.response.status!==200){
          setAlert({there:true, message:"User already registered"})
        }else{
          setAlert({there:true, message:e.response.data})
        }
      });
      if(response.status ===200){
        setredirectLogin(true)
      }
  }
  if(redirectLogin){
    return <Navigate to="/login" />;
  }else{
  return (
  
    <form
      onSubmit={handlesubmit}
      className="flex flex-col gap-3 mt-3 text-center w-3/4 m-auto p-10 "
    >
      <h1 className="text-5xl mb-4 font-bold">Register</h1>
      <Alert alert={alert.there} alertMess={alert.message}/>
      <input
        className="rounded px-4 py-2 w-3/4 m-auto text-black"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(evt) => {
          setUsername(evt.target.value);
        }}
      />
      <input
        className="rounded px-4 py-2 w-3/4 m-auto text-black"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(evt) => {
          setPassword(evt.target.value);
        }}
      />
      <button
        type="submit"
        className="border-2 m-auto border-white rounded py-2 w-1/2"
      >
        Register
      </button>
    </form>
  );
}}

export default Register;
