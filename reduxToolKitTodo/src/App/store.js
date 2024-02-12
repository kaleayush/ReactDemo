import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Feactures/Todo/todoSlice';
// export const store=configureStore({
//   reducer:{
//     todos : todoReducer
//   }
// })

export const store = configureStore({
  reducer: todoReducer
})