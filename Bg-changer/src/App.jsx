import { useState } from 'react'

import './App.css'

function App() {
 const [color,setColor]=useState("olive")

  return (
    <div className='w-full h-screen' style={{background:color}}>
      <div className='flex flex-wrap space-x-2'>
      <button onClick={()=>setColor('red')} className=' bg-white text-black rounded-lg'> red </button>
      <button onClick={()=>setColor('pink')} className=' bg-white text-black rounded-lg'> pink </button>
      <button onClick={()=>setColor('blue')}>blue</button>
      <button onClick={()=>setColor('Black')}>Black</button>
      <buttin></buttin>
      </div>
      
    </div >
    
  )
}

export default App
