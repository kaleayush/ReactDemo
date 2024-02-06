import React, { useContext } from "react";
import UserContext from "../Context/userContext";

function Profile() {
  const { User } = useContext(UserContext);
  if (!User) return <div>pleas Login</div>;
  return <>welcom {User.UserName}</>;
}

export default Profile;
