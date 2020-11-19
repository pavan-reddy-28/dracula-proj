import React from 'react'
import { Navbar,Button, Nav,Form} from 'react-bootstrap'
import TravelModeButton from '../TravelMode/TravelModeButton'
import logo from './logo.svg'


function NavigationBar() {
  return (
    
     <Navbar bg="dark" variant="dark" sticky="top" expand="lg" style={navbarStyling}>
       <Nav className="mx-auto" >
 <Navbar.Brand className="mx-auto" href="#home">
      <img
        alt=""
        className="d-inline-block align-content-center"
        src={logo}
        style={imageStyling}
      />{' '}
      <Title/>
    </Navbar.Brand>
    </Nav>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mx-auto">
    <TravelModeButton/>
    </Nav>
    
    <Nav>
      <Nav.Link href="#deets">
      <i className="fas fa-sign-out-alt" style={{fontSize:'25px'}}> Logout</i>
      </Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
   
  )
}
const Title=()=>{
  return <>Travel Safe With Travel Mode</>
}

const navbarStyling = {
  minWidth:"auto",
  width:'100%',
  
}
const imageStyling ={
  width:"40px",
  height:"40px",
}

export default NavigationBar
