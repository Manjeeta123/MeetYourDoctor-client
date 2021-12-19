import React from "react";
import Footer  from "./Footer";

function Contact(){
    return (
        <div>
        <div className="container">
          <div className="row justify-content-center page-top bgg">
         
          <div className="col-12">
          <h3>
                  Contact Us
              </h3>
              <p>
              We would love to hear from you! Let us know of your experience with Max Healthcare, and keep in touch. Please fill in the required details and our team will get in touch with you.
            </p>
          
          </div>
          
            
          </div>

          <div className="row  justify-content-center ">
              <div className="col-sm-4 bgg2 col-11 ">
              <h4>
              Contact Form
              </h4>
                  <p>If you have any medical, or hospital process related query, reach out to us and don't hesitate to ask. We are here to provide you transparent, seamless, and informative care

                    <br/>Please fill in the required details and our team will get in touch with you.
                  
                    <br/><b>Step 1 -</b> Enter your contact details - Name, Email ID & Phone no
                    <br/><b>Step 2 -</b> Add your comments or remarks if any
                    <br/><b>Step 3 -</b> Press the submit button and the request will go to the concerned team
                    <br/>
                  </p>
              </div>

             <div className="col-sm-8 col-11 ">

             <form className="row cform ">
                        <div className="col-md-6">
                            <label for="inputname" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="inputname" />
                        </div>
                        <div className="col-md-6">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        
                        <div className="col-md-6">
                            <label for="number" className="form-label">Mobile Number</label>
                            <input type="text" className="form-control" id="number" />
                        </div>

                        <div className="col-md-12">
                            <label for="remark" className="form-label">Remark</label>
                            <textarea type="text" className="form-control"   rows="4" cols="50" id="remark" ></textarea>
                        </div>
                        
                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary  mt-4">Submit</button>
                        </div>
            </form>
             </div>

          </div>
         </div>
          <Footer />
        </div>
    )
}

export default Contact;
