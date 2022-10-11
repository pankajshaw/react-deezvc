import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [state, setState] = useState(0);
  const [timer, setTimer] = useState();
  const startTimer = () => {
    let interval = null;
    setTimer(
      setInterval(() => {
        setState((state) => state + 1);
      }, 1000)
    );
  };
  const stopTimer = () => {
    clearInterval(timer);
  };
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>{state}</div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
