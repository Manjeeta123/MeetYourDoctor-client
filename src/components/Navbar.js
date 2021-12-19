import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/logo.png";


function Navbar() {
  return (
  <div >
        <nav className="navbar navbar-expand-sm navbar-light bg ">
        <div className="container">
  <NavLink className="navbar-brand  " to="/">
   <img src={logo} alt="MeetYourDoctor" className="" />
  </NavLink>
  <button className="navbar-toggler m-1" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ms-auto nb">
     
      <li className="nav-item me-4">
        <NavLink className="nav-link " to="/doctor">Doctor</NavLink>
      </li>
      <li className="nav-item me-4">
        <NavLink className="nav-link" to="/appointment">Appointment</NavLink>
      </li>
      <li className="nav-item me-4">
        <NavLink className="nav-link" to="/emergency">Emergency</NavLink>
      </li>
      <li className="nav-item me-4">
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
      </li>

      <li>
     <NavLink  to="/signinReg" > <button type="button" className="btn btn-outline-primary">
     Register/Signins</button></NavLink>
     </li>
    </ul>
   
  </div>
  </div>
</nav>

  </div>
  );
}

export default Navbar;
