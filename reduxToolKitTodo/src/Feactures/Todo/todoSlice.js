import { createSlice,nanoid } from "@reduxjs/toolkit";
import {useEffect} from 'react'

const initialState={
  todos: [{
    id:1,
    text:"hello todos"
  }]
}
// useEffect(()=>(
// localStorage.setItem(todos,JSON.stringify(initialState))

// ),[])

export const todoSlice = createSlice({
  name: 'todo',
    initialState,
     reducers:{
    addTodo : (state,action)=>{
      const todo={
        id:nanoid(),                                            
        text:action.payload
      }
      state.todos.push(todo);
    },
    removeTodo: (state,action)=>{
      console.log(action.payload,"this is testing");
     state.todos= state.todos.filter((todo)=>(todo.id!==action.payload))
    },
    updateTodo:(state,action)=>{
      state.todos.map((todo)=>todo.id===action.payload.id ? todo.text=action.payload.text : todo)
    }
  }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions//this Export reducer function add and remove  is usefull in components
export default todoSlice.reducer;// this export is usefull in configureStore for configuration in store file.