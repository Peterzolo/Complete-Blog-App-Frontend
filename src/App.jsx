import React from "react";
import NavBar from "./components/navbar/NavBar";
import HomePage from './components/pages/home/HomePage'

const App = () => {
  return (
    <div className="mainContainer">
      <NavBar />
      <HomePage/>
    </div>
  );
};

export default App;
