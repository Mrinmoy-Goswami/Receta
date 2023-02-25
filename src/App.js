
// import { useEffect, useState } from "react";
// import './App.css';
// import {Navbar} from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Bachelors from "./Pages/Bachelors";
import Aboutus from "./Pages/Aboutus";
function App() {

  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="Bachelors" element = {<Bachelors/>}/>
      <Route path="aboutus" element = {<Aboutus/>}/>

      </Routes>
      
    </BrowserRouter>
   
    


  );
}

export default App;