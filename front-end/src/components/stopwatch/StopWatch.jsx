import React from "react";
import { Link } from 'react-router-dom';
import './StopWatch.css';

const StopWatch = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    if (!timerOn && time === 0) {
        setTimerOn(true);
    }

    return () => clearInterval(interval);
  }, [time, timerOn]);

  return (
    <div className="Timers">
      <h2>이용시간</h2>
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {timerOn && <Link to="./" className="button1">이용종료</Link>}
      </div>
    </div>
  );
};

export default StopWatch;