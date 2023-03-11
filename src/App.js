import React from "react";
import "./App.css";
import Auth from "./Components/Auth";
import ReduxCounter from "./Components/ReduxCounter";

function App() {
  return (
    <div className="App">
      <Auth />
      <ReduxCounter />
    </div>
  );
}

export default App;
