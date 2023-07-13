import React, { useState, useEffect } from 'react';
import './App.css';

const Pomodoro =() => {
  const [seconds, setSeconds] = useState(0);
  const [timeWork, setTimeWork] = useState(25);
  const [timeRelax, setTimeRelax] = useState(5);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);
  const [status, setStatus] = useState('work');

  useEffect(() => {
    const date = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(date);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning) {
        if (seconds === 0) {
          if (status === 'work') {
            if (timeWork === 0) {
              setStatus('relax');
              setSeconds(0);
              setTimeWork(25);
            } else {
              setTimeWork((prevTimeWork) => prevTimeWork - 1);
              setSeconds(59);
            }
          } else if (status === 'relax') {
            if (timeRelax === 0) {
              setStatus('work');
              setSeconds(0);
              setTimeRelax(5);
            } else {
              setTimeRelax((prevTimeRelax) => prevTimeRelax - 1);
              setSeconds(59);
            }
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 10);

    return () => {
      clearInterval(timer);
    };
  }, [seconds, isRunning, status, timeWork, timeRelax]);

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const increaseTimeWork = () => {
    setTimeWork((prevTimeWork) => prevTimeWork + 1);
  };

  const decreaseTimeWork = () => {
    if (timeWork > 1) {
      setTimeWork((prevTimeWork) => prevTimeWork - 1);
    }
  };

  const increaseTimeRelax = () => {
    setTimeRelax((prevTimeRelax) => prevTimeRelax + 1);
  };

  const decreaseTimeRelax = () => {
    if ( timeRelax > 1) {
      setTimeRelax((prevTimeRelax) => prevTimeRelax - 1);
    }
  };

  return (
    <>
    <div className={`Pomodoro ${status === 'work' ? 'Working' : 'Relaxing'}`}>
      <h1>{currentDateTime.toLocaleString()}</h1>
      <h1>{status === 'work' ? 'Working' : 'Relaxing'}</h1>
      <h1>
        {status === 'work'
          ? `${timeWork.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
          : `${timeRelax.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </h1>
      <button onClick={toggleTimer}>{isRunning ? 'Pause' : 'Resume'}</button>
      <div className='Setting'>
        <div>
          <h2>Time Work</h2>
          <button onClick={decreaseTimeWork}>-</button>
          <span>{timeWork}</span>
          <button onClick={increaseTimeWork}>+</button>
        </div>
        <div>
          <h2>Time Relax</h2>
          <button onClick={decreaseTimeRelax}>-</button>
          <span>{timeRelax}</span>
          <button onClick={increaseTimeRelax}>+</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Pomodoro;
