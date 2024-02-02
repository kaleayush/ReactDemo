import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);

const secondObj=[
  {
    name:"aman",
    email:"amanverma85.33@gmail.com"
  },
  {
    name:"ayush",
    email:"ayushkale85.33@gmail.com"
  }
]
const card= secondObj.map((object)=>{
  return  <>
   <Card obj={object} /> <br/>
 </>
}
 
)
  return (
    <>
    
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-lg">Tailwind Test</h1>
      {/* <Card obj={myObject}/> */}
      <div className="flex flex-wrap " > 
        {card}
      </div>
     
      {/* <Card card="Card1" obj={myObject}/>
      <Card card="ayush" obj={secondObj}/> */}
    </>
  );
}

export default App;
