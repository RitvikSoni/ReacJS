import React from "react";
import './App.css';
import NavBar from './components/Nav_Bar';
import Home_Carousel from "./components/Home_Carousel";
import ImgCard from "./components/ImgCard";
import data from "./components/data";


function App() {
  return (
 
  <div>
    <NavBar/>
     <Home_Carousel/>
    <div className="image">
      {
        data.map((item)=>{
       return <ImgCard title={item.title} imgUrl={item.imgUrl} desc={item.desc}/>
        })
      }
       
    </div>
  </div>
  

  );
}

export default App;
