  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function CustomRender(){
  return (
    <h1>Hello this is customRender function</h1>
  )
}
// const ReactElement={
//   type:'a',
//   props:{
//     href:"www.google.com",
//     target:'_blank'
//   },
//   childern:"click me"
// }
const username="ayush kale"
const ReactElement=React.createElement("a",{
  href:'www.google.com',target:'_blank'
},'asdfghjkl',username
)
const anotherElement=(
  <a href='www.google.com' target='_blank'> click me</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  ReactElement
)
