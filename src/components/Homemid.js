import React from "react";
import doctor from "../images/doctor.png";
import emerg from "../images/hospital.png";
import timetable from "../images/schedule.png";
import slot from "../images/business-idea.png";
import department from "../images/department.png";
import {NavLink} from "react-router-dom";


function Homemid(){
    return(
 <>       
<div className="textcontainer">
<h2 className="homeheading">Services</h2>
<hr className="hr"/>

<p className="hometext">
    Hospital services are the collective activities of all departments and all personnel of a 
    hospital, which end-up in satisfactory patients care.
</p>

</div>


<div className="container">
<div className="row  justify-content-center ">
    <div className="col-md-3 col-sm-5  col-10 mt-3 offset-sm-1 bgg4 hbg service">
        <img src={emerg} alt="emergency" className="img-fluid img-color p-3" />
        <NavLink className="nav-link homenav" to="/emergency">Emergency </NavLink>
    </div>
    <div className="col-md-3 col-sm-5  col-10 mt-3 offset-sm-1  service">
    <img src={doctor} alt="doctor" className="img-fluid p-4 " />
    <NavLink className="nav-link homenav" to="/doctor">Doctor</NavLink>
</div>
 <div className="col-md-3 col-sm-5  col-10 mt-3 offset-sm-1 bgg4 service">
 <img src={timetable} alt="timetable" className="img-fluid img-color p-5" />
 <NavLink className="nav-link homenav" to="/appointment">Appointment</NavLink>
</div>
</div>
<div className="row  justify-content-center ">
    <div className="col-md-3 col-sm-5  col-10 mt-3 offset-sm-1  hbg service">
        <img src={slot} alt="emergency" className="img-fluid p-4" />
        <NavLink className="nav-link homenav" to="/home">Slots</NavLink>
    </div>
    <div className="col-md-3 col-sm-5  col-10 mt-3 offset-sm-1  service">
    <img src={department} alt="doctor" className="img-fluid p-5" />
    <NavLink className="nav-link homenav" to="/department">Department</NavLink>
</div>
 
</div>

</div>

</>
);
}
   
export default Homemid;