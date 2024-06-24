
import React from 'react'
import style from './App.module.css'
import { useState } from 'react'

function App() {

  const [tinngArray, setTinngArray] = React.useState(["Thing1", "Thing2", "Thing3"])


  function addItem(){
    setTinngArray(prev => [...prev, `Thing${prev.length+1}`])
  }

  //const [isGoingOut, setIsGoingOut] = React.useState(true)
    
  // function handleClick(){
    
  //   return setIsGoingOut? "Yes" : "No"
  // }

    // const isGoingOut = true
    // const [initial, setInitial] = React.useState(0)

    // function decrement(){
    //   setInitial(oldValue => oldValue-1)
    // }

    // function increment(){
    //   setInitial(oldValue => oldValue+1)
    // }
    // let answer = (isGoingOut == true)
    //          ? "Yes"
    //          : "No"
    

    // function increment(){
    //   setInitial(initial+1)
    // }
    // const[isImportant , setIsImportant ]= React.useState("yes")
    

    // function handleClick(){
    //   setIsImportant("No")
    // }
  
  

  return (
    <div className={style.App}>
        {/* <button onClick={decrement}>decrement</button>
        <h1>{initial}</h1>
        <button onClick={increment}>increment</button> */}
            {/* Hello
            <div id='btn' onClick={handleClick}>
            {isImportant}
            </div> 
            */}
            <button onClick={addItem}>AddItem</button>
            <h1>{tinngArray}</h1>
            {/* <h1>Do I feel like going out tonight?</h1>
            <div onClick={handleClick}>
              <h1 >
              {isGoingOut}
              </h1>
            </div> */}
        
    </div>
  )
}

export default App
