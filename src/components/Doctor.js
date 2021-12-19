import React from "react";
import Footer from "./Footer";
import pic from "../images/pic.png";
import { NavLink } from "react-router-dom";

function Doctor(){
  return(
      <> 
        <div className="container doctor">
            <div className=" row  justify-content-center bgg4 ">
            <div className="col-md-2 col-12 mt-4 p-4">
                <h3 className="Text">Search your doctors by</h3>
            </div> 
            <div className="col-md-10 col-12 mt-4 p-4">
                <div className="row bg justify-content-centers border">
                    <div className="col-md-4 col-10">
                         <input type="text" name="doctorName" className="form-control" placeholder="Doctor Name"/>
                    </div>
                    <div className="col-md-1 col-12 mt-1"> 
                    <h5 className="text-center">OR</h5>
                    </div>
                  
                    <div className="col-md-4 col-12 mt-1">
                    <select className="form-select  " aria-label="Default select example">
                            <option selected>Speciality</option>
                            <option value="Anesthesiologists">Anesthesiologists</option>
                            <option value="Cardiologists">Cardiologists</option>
                            <option value="Endocrinologists">Endocrinologists</option>
                            <option value="Gastroenterologists">Gastroenterologists</option>
                            <option value="Neurologists">Neurologists</option>
                            <option value="Obstetricians and Gynecologists">Obstetricians and Gynecologists</option>
                            <option value="Nephrologists">Nephrologists</option>
                            <option value="Ophthalmologists">Ophthalmologists</option>

                     </select>
                    </div>

                    <div className="col-md-3 col-12 mt-1">
                           <button type="submit" className="btn btn-primary">Search</button>
                    </div>

                </div>
            </div>           
        </div>
         


        {/* ............///////list of searched doctors/////////................. */}


        <div className="row justify-content-center bg ">
            <div className="col-md-3 mt-2 col-sm-5 col-10 border ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. ABC</h5>
                    <p className="d-p">Orthopaedics & Joint Replacement Surgery</p>
                     <p className="d-p2">  Orthopaedics & Joint Replacement</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-3 mt-2 col-sm-5 col-10 border ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. xyz</h5>
                    <p className="d-p">Orthopaedics & Joint Replacement Surgery</p>
                     <p className="d-p2">  Orthopaedics & Joint Replacement</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
              
                </div>
                </div>
            </div>
            
            <div className="col-md-3 mt-2 col-sm-5 col-10 border ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. ABC</h5>
                    <p className="d-p">Associate Director</p>
                     <p className="d-p2"> Laparoscopic / Minimal Access Surgery, General Surgery</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
              
                </div>
                </div>
            </div>
            <div className="col-md-3 mt-2 col-sm-5 col-10 border ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. xyz</h5>
                    <p className="d-p">Orthopaedics & Joint Replacement Surgery</p>
                     <p className="d-p2">  Orthopaedics & Joint Replacement</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
              
                </div>
                </div>
            </div>
            
            <div className="col-md-3 mt-2 col-sm-5 col-10 border ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. ABC</h5>
                    <p className="d-p">Associate Director</p>
                     <p className="d-p2"> Laparoscopic / Minimal Access Surgery, General Surgery</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
              
                </div>
                </div>
            </div>

            <div className="col-md-3 mt-2 col-sm-5 col-10 border ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. xyz</h5>
                    <p className="d-p">Orthopaedics & Joint Replacement Surgery</p>
                     <p className="d-p2">  Orthopaedics & Joint Replacement</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
              
                </div>
                </div>
            </div>
            
            <div className="col-md-3 mt-2 col-sm-5 col-10 border ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. ABC</h5>
                    <p className="d-p">Associate Director</p>
                     <p className="d-p2"> Laparoscopic / Minimal Access Surgery, General Surgery</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
              
                </div>
                </div>
            </div>

            <div className="col-md-3 mt-2 col-sm-5 col-10 border  ">
                <div className="row justify-content-center p-2"> 
                <div className="col-12">
                    <img  src={pic} alt="profile pic" width="90%" className="img-fluid"/>
                </div>
                <div className="col-12 ">
                    <h5>Dr. ABC</h5> 
                    <p className="d-p">Associate Director</p>
                     <p className="d-p2">  General Surgery, Laparoscopic / Minimal Access Surgery</p>
                     <NavLink to="abc-appointment"><button className="btn btn-primary" type="button">Book an Appointment</button></NavLink>
              
                </div>
                </div>
            </div>


        </div>
        



        </div>
        <Footer/>
        
      </>
  );
}
export default Doctor;