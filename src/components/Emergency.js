import React from "react";
import Footer from "./Footer";

function Emergency(){
 return (
     <>
      <div className="container">
        <div className="row bgg5">
          <div  className="col-md-4 col-sm-7 col mt-3 mb-3 text-left">
            <h3 > Emergency Services</h3>
            <p>Our super-specialist emergency teams are
            ready to take care of you 24*7</p>
           
          </div>

          <div className="col-md-3 offset-md-4 col mt-3 mb-3 pt-4 bgg2 r-10  text-center shadow">

              <h4>+91 11 4055 4055</h4>
          </div>
         
        </div>


        <div className=" m-5 border  pt-0 ">
            <h3 className="bgg2 p-2 ps-5">SURFACE AMBULANCE (+91 11 4055 4055)</h3>

            <div className="p-5 pt-1">
            <p>In case of a medical emergency, just call the our emergency services at 011 4055 4055 and a well-equipped ambulance with trained emergency staff will reach you within 30 minutes*.
               the ambulances are equipped with state-of-the-art medical equipment like cardiac monitors, defibrillator,
               airway equipment etc. transport ventilator is also available for transport of intubated and ventilated
               patients.
            </p>
            <h4>How it works?</h4>
            <ul>
                <li>As you call our Emergency Services, a trained  Dispatch Officer gathers basic and critical information from you to provide you with immediate help.</li>
                <li>The Max Dispatch Officer may ask you for additional information in order to prepare the ambulance crew for the situation. The ambulance is already on its way during this phase and the Dispatch Officer communicates all the facts to the Emergency Staff to avoid any delays</li>
                <li>In our quest to help our patients in the best possible way, we have immediate medical care at hand, ready, in case the need be. A team of highly specialized doctors is always on standby at the nearest Max Hospital to ensure immediate attention to the patient.</li>
                <li>The Emergency Staff is constantly in contact with the doctor to keep the doctor posted about patient's condition. This helps the doctor prepare and be ready to attend the patient as soon as the ambulance reaches the hospital.</li>

            </ul>
            <p>
            We have ambulances all around the city and  ambulance services are provided at fixed charge.
            </p>
<h4>You must know:</h4>

<ul>
    
<li>Call Max Emergency Services only in case of emergencies.</li>
<li>Do not call to gather information or enquiry.</li>
<li>Do not make prank calls as real emergencies might suffer.</li>
<li>If you accidentally call up, do not hang up unless the officer asks you to do so.</li>

</ul>



<p>Types of medical emergencies are attended to, by max emergency services:</p>
<ul>
    <li>Injuries</li>
    <li>Cardiac problems</li>
    <li>Respiratory Problems</li>
    <li>Stroke</li>
    <li>Diabetes</li>
    <li>Maternal/Neonatal</li>
     <li>Epilepsy</li>
     <li>Unconsciousness</li>
     <li>Animal Bite</li>
     <li>Fever</li>

   </ul>
           </div>
        </div>
      </div>
      <Footer />
     </>
 )
}

export default Emergency;