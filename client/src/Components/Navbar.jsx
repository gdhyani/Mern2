import React from 'react'
import {Link} from "react-router-dom"
import "../App.css"
function Navbar() {
  return (
    <div className='navbar py-8'>
        <div className='navbar-brand'>
            <Link to="/" className='font-bold text-4xl text-white'>TheDiv</Link>
        </div>
        <div className="flex navbar-links gap-4 ">
            <Link to="/login"  >Login</Link>
            <Link to="/register" >Register</Link>
        </div>
    </div>
  )
}

export default Navbar