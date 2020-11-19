import React, {  PureComponent, Fragment } from 'react';

import Select from 'react-select';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import './style.css'




export default class SingleSelect extends PureComponent {

    


    constructor(props) {
        super(props)

        this.state = {
            isClearable: true,
            isSearchable: true,
            isLoaded: false,
            data: {},
            fromCurrency: {},
            toCurrency: {},
            fromInput: 1,
            toInput: 1,
            options: [],

        }
        this.handleSelection = this.handleSelection.bind(this);
        this.handleFromInput = this.handleFromInput.bind(this);
    }
    componentDidMount() {
        axios.get(`https://api.exchangeratesapi.io/latest?base=INR`).then(
            (resp) => {
                console.log(resp.data.rates);
                return resp.data.rates;
            }).then(data => {
                let options = []
                let x = ""
                for (x in data) {
                    options.push({ label: x, value: data[x] })
                }

                this.setState({
                    isLoaded: true,
                    options: options,
                    fromCurrency: { label: "INR", value: data["INR"] },
                    toCurrency: { label: "USD", value: data["USD"] },
                    fromInput: data["INR"],
                    toInput: data["USD"],
                    toInputValue: data["USD"],
                    data: data,
                });
                console.log(data)
            }).catch(err => {
                console.log(err)
            })

    }

    handleFromInput = (event) => {
        let multiplier = parseFloat(event.target.value);
        console.log("toInput "+(this.state.toInput))
        console.log("multipler "+(multiplier))
        console.log("this.state.toInputValue  "+this.state.toInputValue )
        this.setState({
            fromInput: multiplier ? multiplier : 1,
            toInput: multiplier ? this.state.toInputValue * multiplier : this.state.toInput
        })
    }
    handleSelection = (event, name) => {

        if (name === "from") {
            console.log(this.state.data[event.label])
            let toInput = (this.state.toCurrency.value / this.state.data[event.label]);
            this.setState({
                fromCurrency: { ...event },
                toInputValue: toInput,
                toInput: toInput*this.state.fromInput
            },()=>console.log("from input ::: "+this.state.fromInput))
        } else {
        
            let toInput =
                (event.value / this.state.fromCurrency.value) ;
            this.setState({
                toCurrency: { ...event },
                toInputValue: toInput,
                toInput: toInput*this.state.fromInput
            },()=>console.log("from input ::: "+this.state.fromInput))
        }

    }

    render() {

        return (
            <Fragment>

                {
                    [{ currency: this.state.fromCurrency, name: "from", inputValue: this.state.fromInput }, { currency: this.state.toCurrency, name: "to", inputValue: this.state.toInput }]
                        .map((obj, index) => {
                            return (
                                <SelectComponent
                                    key={index}
                                    isLoaded={this.state.isLoaded}
                                    isSearchable={this.state.isSearchable}
                                    currency={obj.currency}
                                    name={obj.name}
                                    options={this.state.options}
                                    inputValue={obj.inputValue}
                                    handleSelection={this.handleSelection}
                                    handleInput={this.handleFromInput}
                                />)
                        })}
            </Fragment>
        );
    }
}

const SelectComponent = (props) => {
    return <React.Fragment>
        <div className="mt-2">
            <Form inline>{!props.isLoaded ? <h1>is Loading ...</h1> :
                <Select
                    className="basic-single"
                    classNamePrefix="select"
                    value={props.currency}
                    isSearchable={props.isSearchable}
                    name={props.name}
                    options={props.options}
                    onChange={(e) => props.handleSelection(e, props.name)}
                />
            }
                <Form.Control
                    type="number" 
                    style={formStyling}
                    value={props.inputValue}
                    onChange={
                        (event) => {
                            if (props.name === "from") { props.handleInput(event) }
                        }}
                />
            </Form>
        </div>
    </React.Fragment>
}
const formStyling ={ 
    minWidth: '60px', 
    width: '80px', 
    maxWidth: 'auto', 
    marginLeft: '15px' 
}