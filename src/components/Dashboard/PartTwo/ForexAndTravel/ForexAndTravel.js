import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
export default class ForexAndTravel extends Component {
    cardStyling={width:'100%',borderWidth:'4px',borderColor:'red',padding:'1rem',}
    render() {
        return (
            <Card style={this.cardStyling}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>
          Localized Exchange Rates
              </Card.Title>
              <Card.Text>
              This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
          
          </Card>
          
        )
    }
}
