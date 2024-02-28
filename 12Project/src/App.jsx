import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Login, Logout } from "./store/authSlice/";
import { Header, Footer } from "./Components/index";

import { Outlet } from "react-router-dom";

function App() {
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   authService
  //     .getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(Login({ userData }));
  //       } else {
  //         dispatch(Logout());
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("sdfghjkl", error);
  //     })
  //     .finally(() => setLoding(false));
  // }, []);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(Login({ userData }));
        } else {
          dispatch(Logout());
        }
      })
      .catch((error) => {
        console.log("sdfghjkl", error);
      })
      .finally(() => setLoding(false));
  }, []);
  return !loding ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <div className="p-5">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
