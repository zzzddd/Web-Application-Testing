import React from "react";
export default function Display() {
  return (
    <div>
        <h2>
          Strikes: <span >{strikes}</span>
        </h2>
        <h2 >
          Balls: <span>{balls}</span>
        </h2>
        <br />
      </div>
  );
}
