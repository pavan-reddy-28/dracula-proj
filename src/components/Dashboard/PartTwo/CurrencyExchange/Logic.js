// import React, { Component,PureComponent, Fragment } from 'react';

// import Select from 'react-select';
// import axios from 'axios';
// import { Form } from 'react-bootstrap';
// import './style.css'




// export default class SingleSelect extends PureComponent{

// componentDidMount(){
//     axios.get(`https://api.exchangeratesapi.io/latest?base=INR`).then(
//         (resp)=>{
//             console.log(resp.data.rates); 
//             return resp.data.rates;
//                 }).then(data=>{
//                     let options=[]
//                     let x=""
//                     for(x in data){
//                         options.push({label:x,value:data[x]})
//                     }
//                     this.setState({
//                         isLoaded:true,
//                         toOptions:options,
//                         fromOptions:options
//                     });
//                     console.log(options)
//                 }).catch(err=>{
//         console.log(err)
//     })

// }


//     colourOptions = [
//         { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
//         { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
//         { value: 'purple', label: 'Purple', color: '#5243AA' },
//         { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//         { value: 'orange', label: 'Orange', color: '#FF8B00' },
//         { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//         { value: 'green', label: 'Green', color: '#36B37E' },
//         { value: 'forest', label: 'Forest', color: '#00875A' },
//         { value: 'slate', label: 'Slate', color: '#253858' },
//         { value: 'silver', label: 'Silver', color: '#666666' },
//       ];
// constructor(props) {
//     super(props)

//     this.state = {
//         isClearable: false,
//         isSearchable: true,
//         isLoaded:false,
//         selectedFrom:{},
//         selectedTo:{},
//         toValue:0,
//         fromValue:0,
//         fromOptions:[],
//         toOptions:[],
//     }
// }
// handleToChange=(event)=>{
//     this.setState({
//         selectedTo:{...event},
//         toValue:event.value
//     })
// console.log({...event})
// }
// handleFromChange=(event)=>{
//     this.setState({
//         selectedFrom:{...event},
//         fromValue:1
//     })
// }
// handleFromInput =(event)=>{
//     // console.log(event.target.value)
//     this.setState({fromValue:event.target.value},()=>{console.log(this.conversion())})
    
//     }
// handleToInput =(event)=>{
// // console.log(event.target.value)
// this.setState({toValue:event.target.value},()=>console.log(this.conversion()))
// }
// conversion(){
//     let from =this.state.fromOptions.label;
//     let to = this.state.toOptions.label;
//     let fromValue =parseFloat(this.state.selectedFrom.value)
//     let toValue = parseFloat(this.state.selectedTo.value)
//     let multiplier = parseFloat(this.state.fromValue);
//     if(from==="INR")
//         {  
//             return Math.round(fromValue)*multiplier;
//         }
//     else{
//         toValue =parseFloat(toValue)/parseFloat(fromValue)
//         return (Math.round(toValue*multiplier*100)/100);
//     }    

// }
 
//   render() {
//     const {
//       isClearable,
//       isSearchable,
//     } = this.state;
//     return (
//       <Fragment>
//           <div>
//           <Form inline>{!this.state.isLoaded?<h1>is Loading ...</h1>:
          
//           <Select
//           className="basic-single"
//           classNamePrefix="select"
//           defaultValue={this.state.fromOptions[0]}
//           value={this.state.selectedFrom}
//           isClearable={isClearable}
//           isSearchable={isSearchable}
//           name="color"
//           placeholder="From"
//           options={this.state.fromOptions}
//           onChange={(e)=>this.handleFromChange(e)}

//         />
//           }
//         <Form.Control type="number"
//          style={{minWidth:'60px',width:'80px' ,maxWidth:'auto',marginLeft:'15px'}} 
//          placeholder="0.00" 
//          defaultValue={1}
//           onChange={(event)=>this.handleFromInput(event)}
//           value={this.state.fromValue}
//          />
//         </Form>
//         </div>
//         <div className="mt-2">
//           <Form inline>{!this.state.isLoaded?<h1>is Loading ...</h1>:
          
//           <Select
//           className="basic-single"
//           classNamePrefix="select"
//           defaultValue={this.state.toOptions[1]}
//           value={this.state.selectedTo}
//           isClearable={isClearable}
//           placeholder="To"
//           isSearchable={isSearchable}
//           name="color"
//           options={this.state.toOptions}
//           onChange={(e)=>this.handleToChange(e)}

//         />
//           }
//         <Form.Control type="number" style={{minWidth:'60px',width:'80px' ,maxWidth:'auto',marginLeft:'15px'}}
//         placeholder="0.00" 
//         onChange={(event)=>this.handleFromInput(event)}
//         value={this.state.toValue}
//         />
//         </Form>
//         </div>
//              </Fragment>
//     );
//   }
// }