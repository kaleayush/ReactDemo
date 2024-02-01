import { useState } from 'react'

import './App.css'

function App() {
 const [color,setColor]=useState("olive")

  return (
    <div className='w-full h-screen' style={{background:color}}>
      <button onClick={()=>setColor('red')}>red</button>
      <button onClick={()=>setColor('pink')}>red</button>
      <button onClick={()=>setColor('blue')}>red</button>
      <button onClick={()=>setColor('Black')}>red</button>
    </div >
    
  )
}

export default App
