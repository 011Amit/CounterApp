import React from "react";
import { useState } from "react";

import './CounterApp.css';

function CounterApp(){
const [count,setCount] = useState(0);
const countHandler = () => {
    if(count>0)
        setCount(count-1);
}

const countHandler2 = () => {
    if(count<20)
     setCount(count+1);
  }
    return (
        <div id='first'>
            <button onClick={countHandler}>-1</button>
            <div > {count} </div>
            <button onClick={countHandler2}>+1</button>
        </div>
    )
}
export default CounterApp;