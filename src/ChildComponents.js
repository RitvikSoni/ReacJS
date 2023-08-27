import React from 'react'

const ChildComponents = ({onDataFromChild}) =>{
    const SendDataToParent=()=>{
    const data ="logged in"
    onDataFromChild(data);
};
  return (
    <div>
      <div> ChildComponent </div>
      <button onClick={SendDataToParent}>Send</button>

    </div>
  )
}

export default ChildComponents
