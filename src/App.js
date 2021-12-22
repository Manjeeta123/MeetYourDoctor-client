
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Doctor from "./components/Doctor";
import SigninReg from "./components/SigninReg";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import DoctorApp from "./components/DoctorApp";
import Emergency from "./components/Emergency";
import Admin from "./components/Admin";
import {Route,Switch} from "react-router-dom";
import './App.css';

function App() {
  return (
 <div>

 <Navbar />

 <Switch>

 
 <Route exact path="/">
  <Home />
 </Route>
 <Route exact path="/Admin">
  <Admin/>
 </Route>
 <Route exact path="/contact">
  <Contact />
 </Route>
 <Route exact path="/emergency">
  <Emergency />
 </Route>
 
 <Route exact path="/doctor">
  <Doctor />
 </Route><Route exact path="/appointment">
  <Appointment />
 </Route>
 <Route exact path="/services">
  <Home />
 </Route>
 <Route exact path="/signinReg">
  <SigninReg/>
 </Route>
 <Route exact path="/abc-appointment">
  <DoctorApp />
 </Route>
 
 
 </Switch>



 </div>
  );
}

export default App;
