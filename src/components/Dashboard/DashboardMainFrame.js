import React, { useEffect } from 'react'
import { Row, } from 'react-bootstrap'
import DynamicBackgroundComponent from './PartOne/DynamicBackgroundComponent'

import MainFrame from './PartTwo/MainFrame'
import codegrid from 'react-codegrid' 

function DashboardMainFrame() {
    useEffect(() => {
        
            navigator.geolocation.getCurrentPosition(function(position) {
              console.log("Latitude is :", position.coords.latitude);
              console.log("Longitude is :", position.coords.longitude);
              console.log(`More or less ${position.coords.accuracy} meters.`);
              
            //   CodeGrid part
            //   codegrid.getCode( position.coords.latitude,  position.coords.longitude,(err,code)=>{
            //       if(!err)
            //       console.log(code)
            //       else{
            //           console.log(err)
            //       }
            //   });

            },(err)=>{console.log(err)},{enableHighAccuracy:true});
    }, [])




    return (
        <Row style={rowStyling}>
       
      <DynamicBackgroundComponent/>
  <MainFrame/>
        </Row>
    )
}
const rowStyling={
    margin: '0.5rem',
    padding:'0.5rem',
    position: "relative",
    minWidth:"50%",
    maxWidth:"100%",
    width:"99%"
}
export default DashboardMainFrame
