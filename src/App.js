import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import useTimer from './useTimer'; 
import MapSprites from './mapsprites';
import CircularBar from './circularbar';

function App() {
  const circleRef = useRef(null);
  const [score, setScore] = useState(1); 
  const [isStudyTime, setIsStudyTime] = useState(true); 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [progressWidth, setProgressWidth] = useState(0);

  const onTimerEnd = () => {
    setScore(prevScore => isStudyTime ? prevScore + 1 : prevScore); 
    setIsStudyTime(prevIsStudyTime => !prevIsStudyTime); 
  };

  const initialStudyTime = isStudyTime ? 5 : 2;
  const initialBreakTime = isStudyTime ? 2 : 5;

  const { timeLeft, isRunning, startTimer, stopTimer, resetTimer } = useTimer(initialStudyTime, initialBreakTime, onTimerEnd);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const circle = circleRef.current;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const newLeft = (screenWidth - circle.offsetWidth) / 2 + scrollLeft;
      circle.style.left = `${Math.max(newLeft, 0)}px`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [screenWidth]);

  useEffect(() => {
    setProgressWidth((timeLeft / initialStudyTime) * 100); // Update progress width based on remaining time
  }, [timeLeft, initialStudyTime]);

  return (
    <div className="App">
  
      <div className="center-circle" ref={circleRef}>
      <CircularBar progress={progressWidth}/>
        <h1>{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</h1>
        <p>{isStudyTime ? 'Study Time' : 'Break Time'}</p>
        <p>Pokemon Collected: {score}</p> 
        {isRunning ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
   
      </div>
      <MapSprites/>
      
    </div>
  );
}

export default App;
