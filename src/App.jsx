import React, { useState } from "react";
import "./App.css";

function ClickCounter() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    checkThreshold(newCount);
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      checkThreshold(newCount);
    }
  };

  const checkThreshold = (value) => {
    if (value >= 10) {
      setMessage("You've reached the limit!");
    } else {
      setMessage("");
    }
  };

  return (
    <div className="counter-app">
      <h1>Click Counter</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={increment} className="btn increment">
          Increase +
        </button>
        <button
          onClick={decrement}
          className="btn decrement"
          disabled={count === 0}
        >
          Decrease -
        </button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default ClickCounter;
