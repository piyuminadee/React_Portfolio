
import React from 'react'
import style from './App.module.css'
import { useState } from 'react'
import Count from './Count'

function AppC() {
  const [thingArray, setThingArray] = React.useState(["step 1", "step 2", "step 3"])
  const [count, setCount] = React.useState(0);

  function addItem(){
    setThingArray(preThing => {
      return [...preThing, `step ${preThing.length+1}`]
    })
  }
  const thingElement = thingArray.map((thing)=>{
    return <p key={thing}>{thing}</p>
  })

  return (
    <div className={style.App}>
       <h1>Step List</h1>
       <button onClick={addItem}>Click</button>
        {thingElement}
        <Count name = {count}/>
    </div>
  )
}

export default AppC
