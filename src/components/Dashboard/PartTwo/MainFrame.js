import React, { Component } from 'react'
import { Card, Row } from 'react-bootstrap'
import Offers from './Offers/Offers'
import CurrencyExchange from './CurrencyExchange/CurrencyExchange'
import ForexAndTravel from './ForexAndTravel/ForexAndTravel'


export default class MainFrame extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    mainCardStyling = {
        width: "1300px",
        margin: "0.5rem",
        padding: "1rem",
        // borderWidth:"4px",
        borderColor: "red"
    }

    render() {
        return (
            <Card className="mx-auto" style={this.mainCardStyling} >
                <Row>
                    <Card style={{ width: '35%', borderWidth: '4px', borderColor: 'red', padding: '1rem', margin: '1rem', height: 'auto' }}>
                        <CurrencyExchange />
                        <ForexAndTravel />
                    </Card>
                    
                    <Offers />
                </Row>
            </Card>
        )
    }
}
