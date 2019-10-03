import React from "react";

export default function Dashboard() {
  return (
    <div >
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleFoul}>Foul</button>
      <button onClick={handleHit}>Hit</button>
      <br />
    </div>
  );
}
