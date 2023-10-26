import React from 'react'
import CompB from './CompB';

export default function CompA(props) {
  // data come from inside the component
  let us = "baskar";
  let surname2 ="Dheeman"
  return (
    
    // data come from outside the component
    <div>CompA {props.user} {us}
    <CompB surname={surname2}></CompB>
    </div>
  )
}
