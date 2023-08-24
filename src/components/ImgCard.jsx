import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImgCard = (props) => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgUrl}/>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ImgCard
