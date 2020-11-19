import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import SingleSelect from './NewLogic'
export default class CurrencyExchange extends Component {
  
cardStyling={width:'100%',borderWidth:'4px',borderColor:'red',padding:'1rem',
marginBottom:'1rem'}
    render() {
        return (
          
  <Card style={this.cardStyling}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>
  Localized Exchange Rates
      </Card.Title>
      <SingleSelect/>
    </Card.Body>
  
  </Card>
        )
    }
}
