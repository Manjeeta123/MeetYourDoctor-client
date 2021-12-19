import React from "react";
import {NavLink} from "react-router-dom";

function Footer(){
    return(
        <div className="hfooter bgg2">
        <div className="container ">
    
             <div className="row  justify-content-centers  ">
       
      
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/home">Home </NavLink>  </div> 
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/doctor">Find a Doctor </NavLink>  </div>
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/emergency">Emergency 24x7 </NavLink>  </div>
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/appointment">Book an Appointment</NavLink>  </div>
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/registerSignin">Register </NavLink>  </div>
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/registerSignin">Signin </NavLink>  </div>
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/about">About Us </NavLink>  </div>
             <div className="col-6 col-sm-3 ">   <NavLink className="nav-link footer-navlink" to="/contact">Contact Us </NavLink>  </div>



       </div>
        </div>
        </div>
       
    )
}

export default Footer;