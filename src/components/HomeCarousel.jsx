import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel() {
  return (
    <div>
       <Carousel>
      <Carousel.Item>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt='' width={"100%"} height={"100%"} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" alt='' width={"100%"} height={"100%"} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" alt='' width={"100%"} height={"100%"}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default HomeCarousel;
