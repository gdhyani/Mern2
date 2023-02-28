import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {


  return (
    <div className="navbar py-8">
      <div className="navbar-brand">
        <Link to="/" className="font-bold text-4xl text-white">
          TheDiv
        </Link>
      </div>
      <div className="flex navbar-links gap-4 ">
        <Link className="text-xl" to="/login">
          Login
        </Link>
        <Link className="text-xl" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
