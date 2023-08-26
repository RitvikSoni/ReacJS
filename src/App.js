import React from "react";
import './App.css';
import NavBar from './components/Nav_Bar';
import HomeCarousel from "./components/HomeCarousel";
import ImgCard from "./components/ImgCard";
 //import data from "./components/data";
import { useState } from "react";
import { useEffect } from "react";



function App() {
    const [data,Setdata]=useState([])
  
   useEffect(()=>{
    const fetchdata=async()=>{
      try{
       const response = await fetch ("https://jsonplaceholder.typicode.com/photos")
       if(!response.ok){
        throw new  Error ("Network Response Failed")
       }
       const d = await response.json ()
       console.log(data);
       Setdata(d)
      }
      catch (error){
        console.log("error accured",error)
      }
    }
     fetchdata() 
    })
  

  return (
 
  <div>
    <NavBar/>
     <HomeCarousel/>
    <div className="image">
      {
        data.map((item)=>{
       return <ImgCard title={item.title} imgUrl={item.url} desc={item.desc}/>
        })
      }
       
    </div>
  </div>
  

  );
}

export default App;



