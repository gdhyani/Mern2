import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
