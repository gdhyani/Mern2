import React, {useState} from 'react'
import axios from 'axios'
function Register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  async function handlesubmit(evt){
    evt.preventDefault();
    // console.log(username, password);
    await axios.post(
      "http://localhost:4000/register",
      JSON.stringify({
        username,
        password,
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } 
  return (
    <form onSubmit={handlesubmit} className='flex flex-col gap-3 mt-3 text-center w-3/4 m-auto p-10 '>
    <h1 className="text-5xl mb-4 font-bold">Register</h1>
      <input className='rounded px-4 py-2 w-3/4 m-auto text-black' type="text" placeholder='Username' value={username} onChange={(evt)=>{setUsername(evt.target.value)}} />
      <input className='rounded px-4 py-2 w-3/4 m-auto text-black' type="password" placeholder='Password' value={password} onChange={(evt)=>{setPassword(evt.target.value)}} />
      <button type='submit' className="border-2 m-auto border-white rounded py-2 w-1/2" >Register</button>
    </form>
  )
}

export default Register