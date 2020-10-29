import React, { useState, useEffect } from "react";
const initState = {
  current: "Pause",
  timer: 0,
  play: true,
};
export default function Timer() {
  const [state, setState] = useState(initState);
  useEffect(() => {
    if (state.play) {
      setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          timer: state.timer + 1,
        }));
      }, 200);
    } else if (state.play === false)
      setState((prevState) => ({
        ...prevState,
        timer: 0,
      }));
  }, [state]);
  const handleClick = (option) => () => {
    if (option === "Play") {
      setState((prevState) => ({ ...prevState, play: true, current: "Pause" }));
    } else if (option === "Pause") {
      setState((prevState) => ({ ...prevState, current: "Play", play: null }));
    } else if (option === "Stop") {
      setState((prevState) => ({...prevState,
      current:"Play",play:false}))
    }
  };
  return (
    <div className="card">
      {state.timer}
      <button onClick={handleClick(state.current)}>{state.current}</button>
      <button onClick={handleClick("Stop")}>Stop</button>
    </div>
  );
}
