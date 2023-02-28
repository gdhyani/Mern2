import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer flex flex-col md:flex-row justify-around text-center  font-bold py-3">
      <h1 className="text-4xl mb-2">TheDiv</h1>
      <div className="flex gap-4 justify-center items-center">
        <Link to="">Home</Link>
        <Link to="">About</Link>
        <Link to="">Profile</Link>
        <Link to="">Github</Link>
        <Link to="">Portfolio</Link>
      </div>
    </div>
  );
}

export default Footer;
