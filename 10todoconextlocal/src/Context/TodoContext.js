import { useContext,createContext } from "react";


export const TodoContext=createContext({
  todos:[
    {
      id:1,
      todo:"todo msg",
      compeleted: false,
    },
  ],
  addTodo : ()=>{},
  updateTodo : ()=>{},
  deleteTodo : ()=>{},
  toggleTodo : ()=>{}

   
})

export const TodoProvider=TodoContext.Provider
export const useTodo=()=>{
  return useContext(TodoContext)
}