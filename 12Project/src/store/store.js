  import {combineReducers, configureStore} from "@reduxjs/toolkit";
  import authSlice from "./authSlice";

  // const multired=combineReducers({
  //   auth:atuhre
  // })
  const store =configureStore({
    reducer:{
      auth:authSlice
    }
  });
  export default store;