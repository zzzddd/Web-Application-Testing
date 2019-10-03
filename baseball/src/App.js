import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

import Display from "./Component/Display";
import Dashboard from "./Component/Dashbord";


function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);
  

  const handleStrike = () => {
    setStrikes(0);
  };

  const handleBall = () => {
    setBalls(0);
  };

  const handleFoul = () => {
    setStrikes (0);
  };

  const handleHit = () => {
    setStrikes(0);
    setBalls(0);
  };
  return (
    <div className="App">
      <h1>*******Baseball Dashboard******</h1>
     
      <Display
        strikes={strikes}
        balls={balls}
      />
      <Dashboard
        handleStrike={handleStrike}
        handleBall={handleBall}
        handleFoul={handleFoul}
        handleHit={handleHit}
        
      />
    </div>
  );
}

export default App;
