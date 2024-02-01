import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [count, setCount] = useState(0);
let user={name:'Ayush',email:"ayushKale@gmail.com"}
let arr=["ayush","himanshu","rajesh"]
const myObject = {
  key1: 'value1',
  key2: 'value2',
  // ... other key-value pairs
};
  return (
    <>
    
      <h1 className="bg-green-400 text-black p-4 mb-4 rounded-lg">Tailwind Test</h1>
      <Card card="Card1" obj={myObject}/>
      <Card/>
    </>
  );
}

export default App;
