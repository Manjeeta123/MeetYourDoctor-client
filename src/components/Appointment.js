import React from "react";
import Footer from "./Footer";

function Appointment(){
    return(
        <>
        <div className="bgg6 container ">
        <h3 className="pt-2 text-center ">Experience the new appointment booking system </h3>
            <div className="row justify-content-center mb-5 ">
                <div className="col-md-10 col-sm-10 col-12 m-5">
                     <div className="row justify-content-center bg">
                     <div className="col-md-8 col-sm-11 col-12">
                         <input type="text" name="doctorName" className="form-control" placeholder="Doctor Name"/>
                    </div>
                    <div className="col-md-3 offset-md-1 col-sm-10 col-12">
                    <button type="button" className=" btn btn-success"> Book an Appointment</button></div>
                     </div>
                    
                  
                   
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Appointment;