import React ,{useState} from "react";

function SigninReg(){

const [issend,setsend]= useState(false);

function next(){ 
  setsend(true);

}
function back(){
  setsend(false);
}


    return(
        <>
           
           <div className="row justify-content-center sbg ">
              <div className="col-md-7 col-sm-10 col-11 mt-4 ">
              <ul className="nav nav-tabs container" id="myTab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active tab-s" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="true">Register</a>
  </li>
  <li className="nav-item">
    <a className="nav-link tab-s" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="false">Signin</a>
  </li>
 
</ul>
<div className="tab-content" id="myTabContent">


{/* <<<................////////////register form ////////////.............>>> */}


  <div className="tab-pane fade show active bg mb-5 pd-4 " id="register" role="tabpanel" aria-labelledby="register-tab">
      
      <div className="row justify-content-center ">
         <div className="col-md-10 col-sm-10 col-11 mt-3">
                      
          <form>
          <fieldset>
    <legend>Registration Form</legend> 
            <div className="form-group mt-3">
              <label for="fname">First Name *</label>
              <input type="text" className="form-control" id="fname" placeholder="First Name" required />
            </div>
            <div className="form-group mt-3">
              <label for="lname">Last Name *</label>
              <input type="text" className="form-control" id="lname" placeholder="Last Name" required/>
            </div>
            <div className="form-group mt-3">
              <label for="number">Number *</label>
              <input type="number" className="form-control" id="number" placeholder="Number" required/>
            </div>
            <div className="form-group mt-3">
              <label for="age">Age *</label>
              <input type="number" className="form-control" id="age" placeholder="Age" required/>
            </div>
            <div className="form-group mt-3">
            <select className="form-select  " aria-label="Default select example" required>
                            <option selected>Gender *</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="other">other</option>
                          
                     </select> 
            </div>
            <div class="form-group mt-3">
              <label for="Disease">Disease</label>
              <input type="text" class="form-control" id="Disease" placeholder="Disease" />
            </div>
              
            <button className="btn btn-primary mt-3" type="submit">Register</button>

            </fieldset>
          </form>

         </div>

      </div>
      
  </div>


  {/* <<<<............/////////////signin//////////////.................>>>>> */}

  <div className="tab-pane fade" id="signin" role="tabpanel" aria-labelledby="signin-tab">
  { (!issend) ?  <div className="row justify-content-center">
    <div className="col-md-10 col-sm-10 col-11 mt-3  bg mb-5 pd-4">
    <form>
  <legend>Signin</legend>
  <div class="form-group">
    <label for="number">Enter your registered mobile number</label>
    <input type="number" class="form-control" id="number" required placeholder="mobile number" />
  </div>
  <button type="button" onClick={next} className="btn btn-primary mt-3" >Send otp</button>
 

</form>
 
    </div>
  </div> :
    <div className="row justify-content-center">
    <div className="col-md-10 col-sm-10 col-11 mt-3  bg mb-5 pd-4">
    <form>
  <legend>Signin</legend>
  <div class="form-group">
    <label for="otp">Enter your otp</label>
    <input type="number" class="form-control" id="otp" required placeholder="6-digit otp" />
  </div>
  <button type="button"  className="btn btn-primary mt-3" > submit</button>
  <button type="button" onClick={back} className="btn btn-primary mt-3 ms-2" >cancel</button>
</form>
 
    </div>
  </div>
  }
   
  


  </div>
              </div>

           </div>
           
  </div>

        </>
    );
}

export default SigninReg;