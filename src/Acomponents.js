import React from 'react'
import BComponets from './BComponents'
import DataContext from './DataContext'

const Acomponents= () =>{
  const Vashihatnama="mera grnad childern ko kuch bni ni melega"
  return (
    <DataContext.Provider value={Vashihatnama}>
    <div>AComponents
    <BComponets/>
    </div>
    
    
    </DataContext.Provider>
  )
}

export default Acomponents
