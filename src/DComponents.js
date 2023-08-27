import React, { useContext } from 'react'
import DataContext from './DataContext';

const DComponents = () => {
    const sharedData=useContext(DataContext);
  return (
    <div>
        DComponents
        <p>property recived from grand parant:{sharedData}</p>
      
    </div>
  )
}

export default DComponents
