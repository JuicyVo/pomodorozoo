import React, { useState, useEffect } from 'react';
import './App.css';
import backgroundImage from './images/background.png';

function App() {
  const [timeLeft, setTimeLeft] = useState(1500); // 1500 seconds = 25 minutes
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            setIsRunning(false);
            
            return 0; 
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer); // Clear the interval when the component unmounts
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(1500); // Reset timer to 25 minutes
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <div className='center-circle'>
      <h1>{formatTime(timeLeft)}</h1>
      {isRunning ? (
        <button onClick={stopTimer}>Stop</button>
      ) : (
        <button onClick={startTimer}>Start</button>
      )}
      <button onClick={resetTimer}>Reset</button>
    </div>
  </div>
);
}

export default App;
