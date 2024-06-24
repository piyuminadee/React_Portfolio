import React from "react";
import Count from "./Count";



export default function App2(){

       const [count, setCount]= React.useState(0)
       
       function increment(){
          setCount(preC => (preC+1))
       }


       function decrement(){
          setCount(preC => (preC-1))
       }

    return(
        <div>
        <button onClick={increment}>increment</button>
         <Count name = {count}/>
         <button onClick={decrement}>decrement</button>
        </div>
    )
}