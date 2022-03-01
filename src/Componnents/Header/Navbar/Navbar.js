import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="/images/STB logo.png"
          alt=""
          width="150"
          height="100"
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <div className="search-container"></div>
      </div>
      <div className="nav">
        <ul>
          <li className="navb" onClick={() => navigate("/")}>
            Home
          </li>
          <li className="navb">Nous connaitre</li>
          <li className="navb"> Responsabilité Sociale</li>
          <li className="navb">Nos réalisations</li>
          <li className="navb">Actualités</li>
          <li className="navb">Nos fonds</li>
          <li className="navb">Lexique</li>
          <li className="contact">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
