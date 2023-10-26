import React, { Component } from 'react'
import { CompC } from './CompC';

export default class CompB extends Component {
     // properties/ variable
     course="BCA";

     // Constructor
     constructor(){
      super();
       this.address = "dev Bhoomi";
     }
     // method
  render() {
    return (
      <div>Shivam {this.props.surname} {this.course} from {this.address}<br/>
      <CompC>siddiqui</CompC></div>
    )
  }
}
