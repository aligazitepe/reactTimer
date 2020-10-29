import React, { useState, useEffect } from "react";

export default function Timer() {
  const [current, setCurrent] = useState("Pause");
  const [timer, setTimer] = useState(0);
  const [play, setPlay] = useState(true);
  useEffect(() => {
    if (play) {
      setTimeout(() => {
        setTimer(timer + 1);
      }, 200);
    } else if (play === false) setTimer(0);
  }, [timer, play]);
  const handleClick = (option) => () => {
    if (option === "Play") {
      setPlay(true);
      setCurrent("Pause");
    } else if (option === "Pause") {
      setCurrent("Play");
      setPlay(null);
    } else if (option === "Stop") {
      setCurrent("Play")
      setPlay(false);
    }
  };
  return (
    <div className="card">
      {timer}
      <button onClick={handleClick(current)}>{current}</button>
      <button onClick={handleClick("Stop")}>Stop</button>
    </div>
  );
}
