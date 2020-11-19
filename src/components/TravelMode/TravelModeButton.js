import React from 'react'
import { Button, Form } from 'react-bootstrap'
import './styler.css'
function TravelModeButton() {
    const onChangeHandler = (event)=>{
    //   Edit code
        return ""
    }
    return (
        <Button className=" btn bg-transparent border-0  travelModeButton "
            >
            <Form >
                <Form.Label className="travel-mode-name">TravelMode</Form.Label>
                <Form.Check
                    className="custom-switch-lg mr-auto "
                    type="switch"
                    id="custom-switch"
                    // onChange={(event)=>onChangeHandler(event)}
                />
            </Form>
        </Button>
    )
}

export default TravelModeButton
