import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(5)
  const addValue=()=>{
    if(counter<20 ){
      setCounter((counter)=> counter+1)
      setCounter((counter)=> counter+1)
      setCounter((counter)=> counter+1)
      setCounter((counter)=> counter+1)
      console.log("counter value",counter)
    }
  }
  const subValue=()=>{
    if(counter>-1){
      setCounter(counter-1)
      console.log("counter value",counter)
    }
    
  }
  // let counter=5
  return (
    <>
     <div className='App'></div>
     <h1> Counter Poject</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add value</button> 
      <br/>
      <button onClick={subValue}>remove value</button>
    </>
  )
}

export default App
