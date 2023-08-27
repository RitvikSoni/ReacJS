
import React, { useState } from 'react'
import ChildComponents from './ChildComponents'

function parentComponents() {
  const [data,setdata]=useState(null);
  const HandleChild=(Childern)=>{
    setdata(Childern)
  }
  return (
    <div>
      <ChildComponents onDataFromChlid={HandleChild}/>
      <p>{data}</p>
    </div> 
  )
}

export default parentComponents
