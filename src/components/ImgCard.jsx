import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ImgCard = (props) => {
  const [Count,setCount ]= useState(100);
  const handleClick=()=>{
    setCount(Count+1);
  console.log("button is click",Count);
  
}
  return (
    <div>
      
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl}/>
      <Card.Body>
        <Card.Title>{props.title}{Count}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
        {Count}
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard
