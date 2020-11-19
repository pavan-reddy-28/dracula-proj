import React from 'react'
import {Carousel} from 'react-bootstrap'
import  'holderjs'
function DynamicBackgroundComponent() {
    return (
        <div className="mx-auto " style={divStyling}>
           <Carousel  interval={2000}>
  <Carousel.Item  >
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
        </div>
    )
}
const divStyling={
    minWidth:"600px",
    width:"1300px" ,
    boxShadow: "22px 18px 34px -6px rgba(0,0,0,0.79)",
}
export default DynamicBackgroundComponent
