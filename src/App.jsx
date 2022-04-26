import React from "react";
import {Switch,Route } from "react-router-dom"
import Home from "./Home";
import Contact from "./Contact"
import About from "./About"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";


const App = () => { 
return(

  <>
  <Navbar/>
 <Switch>
   <Route exact path="/" component ={Home} />
   <Route exact path="/about" component ={About} />
   <Route exact path="/contact" component ={Contact} />
  
 </Switch>
  </>
);


};
export default App;
