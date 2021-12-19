function Homeslider(){
    return (
    <div>
      <h2 className="slider-heading" >Our COVID Safety Measures</h2>
    
    <div id="carouselExampleIndicators" className="carousel slide container" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner  mt-5 mb-3 service">
      <div className="carousel-item active">
      <div className="row slider">
          <div className="col-md-4 col-12 carou bgg3"> <h2>Doctor</h2></div>
          <div className="col-md-8  col-12 carou2 ">
         
          <p>In the fight against COVID-19, our doctors are our first and last line of defense. They walk the 
          extra mile and take all the measures ensuring the safety of doctors and patients.

            <br/>Be it inside the surgery or the OPD wards where doctors treat hundreds of patients every day.
             Our commitment to your safety is unwavering and steadfast.

              <br/>From donning, doffing & disposing the Personal Protective Equipment (PPE) to proper sanitizing
               of medical equipment, our doctors make sure that every patient is provided with a safe healing environment. To ensure continuity of patient care during this pandemic, our doctors have started conducting Virtual OPDs to reach patients who find it difficult to visit the hospital physically.     </p>
          </div>
      </div>
       
      </div>
      <div className="carousel-item">
      <div className="row slider">
          <div className="col-md-4 col-12 carou bgg3">
          <h2>Hospital</h2>
          </div>
          <div className="col-md-8 col-12 carou2">
         
          <p>We have put measures in place at our Hospitals and flu clinics stationed outside the hospital
           to maintain patient safety during the Coronavirus pandemic. In the face of extraordinary challenges, 
           healthcare has been transformed.
           <br/>
                From increased infection prevention measures to COVID-19 testing for staff and patients; ensuring
                 social distancing norms are followed by attendants in OPD areas. Temperature checks, hand 
                 sanitization, and mandatory masks for all are few other measures taken at our hospital as part 
                 of COVID safety measures.
            <br/>
               Max Healthcare is also providing community outreach during these tough times, informing and 
               educating people about how to stay safe. Simple rules such as the Power of Ws. Wear masks. Wash 
               your hands. Watch your distance.  
               <br/>  </p>
          </div>
      </div>
      </div>
      <div className="carousel-item">
      <div className="row slider">
          <div className="col-md-4 col-12 carou bgg3">
          <h2>Home Services</h2>
          </div>
          <div className="col-md-8 col-12 carou2">
         
          <p>Our safety measures do not extend to just the gates of our hospital but the patient's home as well. 
          Our medical and nursing services such as wound care, injection, catheter insertion, catheter removal, 
          chemo-port removal are all available in the comfort of the patients' home.

              <br/>These services are provided under the guidance of expert nurses and attendants, who make sure 
              that all the safety protocols and hygiene practices issued by WHO are followed consistently.

               <br/>Your safety is our utmost priority. And we are transforming and staying a step ahead of the 
               challenges by reinforcing our health and safety protocols every day.</p>
          </div>
      </div>
      </div>
    </div>
    <a className="carousel-control-prev cl" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon " aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next cr" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon " aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </div>)
}
export default Homeslider;