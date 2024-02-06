import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [UserName, SetUserName] = useState();
  const [Password, setPassword] = useState();
  const { setUser } = useContext(UserContext);
  const HandelSubmit = (e) => {
    e.preventDefault();
    setUser({UserName,Password});
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="UserName"
        value={UserName}
        onChange={(e) => SetUserName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={HandelSubmit}>Submit</button>
    </div>
  );
}

export default Login;
