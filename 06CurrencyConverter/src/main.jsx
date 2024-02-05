import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <h1 className="text-3xl bg-yellow-300">hello</h1>
  </React.StrictMode>
);
