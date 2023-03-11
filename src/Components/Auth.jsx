import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Auth = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "Login" });
  };

  const handleLogout = () => {
    dispatch({ type: "Logout" });
  };
  return (
    <div>
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Auth;
