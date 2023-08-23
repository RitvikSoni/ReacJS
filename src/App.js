import React from "react";
import './App.css';
import NavBar from './components/Nav_Bar';
import Home_Carousel from "./components/Home_Carousel";
import ImgCard from "./components/ImgCard";


function App() {
  return (
 
  <div>
    <NavBar/>
     <Home_Carousel/>
    <div className="image">
       <ImgCard/>
     <ImgCard/>
     <ImgCard/>
    </div>
  </div>
  

  );
}

export default App;
