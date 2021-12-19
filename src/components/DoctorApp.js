import React from "react";
import Datetime from "react-datetime";
import moment from 'moment';
import pic from "../images/pic.png";
import 'react-datetime/css/react-datetime.css';

function DoctorApp(){
    const yesterday = moment().subtract(1, "day");
    const disablePastDt = (current) => {
      return current.isAfter(yesterday);
    };

   
  const next = moment().add(7, "day");
  const d = (current) => {
    return current.isBefore(next);
  };

  
    return (
        <>
          <div className="container">
              <div className="row justfy-content-center bgg7">
                  <div className="col-md-7 col-sm-10 col-11 mt-4 mb-4" >
                      <img src={pic} alt="doctor profile pic" width="20%"className="p1 img-fluid rounded"/ >

                      <h3>Dr.ABC</h3>
                      <h6>Cancer Care / Oncology, Breast Cancer, Head & Neck Oncology, Thoracic Oncology, Surgical Oncology
                      </h6>
                      <hr/>
                      <p>Consultation Fee: ₹ 1400</p>
                      <p>Available on Mon,Tues,wed</p> 
                          <p>11:00 - 14:00</p>
                      </div>
                  <div className="col-md-5 col-sm-10 col-11 mt-4 mb-4  bg">
                  <Datetime isValidDate={disablePastDt }/>
                  <button type="button" className="btn btn-primary ">Consult</button>
                  </div>
              </div>
          </div>
        </>
    )
}

export default DoctorApp;




