import React from "react";
import Footer from "./Footer";
import Homemid from "./Homemid";
import Homeslider from "./Homeslider";


function Home(){
    return (
     <>
          <div className="homeheader bgg container ">
          <center>
          

          <div className="container">
    <div className="row height d-flex justify-content-center align-items-center">
    
        <div className="col-md-8 bg">
            <div className="search">
             <i className="fa fa-search"></i>
              <input type="text" className="form-control" placeholder="Search for doctor or speciality "/> 
             
        </div>
        <button class="btn btn-primary mt-2 mb-3">Book an Appointment</button>
         </div>
        
    </div>
  </div>

     </center>
          </div>

        <Homemid />
        <Homeslider />
        <Footer />
     
 </>
    
    );
}

export default Home;