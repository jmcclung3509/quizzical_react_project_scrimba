import React from "react";

export default function Start(props) {
  return (
    <div className="wrap-start">
      <div className="start-main">
        <h1> Quizzical</h1>
        <p className="description"> A fun quiz game to test your comic-book knowledge </p>
        <button className="startBtn" onClick={props.start}>
          start
        </button>
      </div>
    </div>
  );
}
