import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import useTimer from './useTimer'; 
import MapSprites from './mapsprites';
import CircularBar from './circularbar';
import OptionSettings from './images/optionbutton.png';

function App() {
  const circleRef = useRef(null);
  const [score, setScore] = useState(1); 
  const [isStudyTime, setIsStudyTime] = useState(true); 
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [progressWidth, setProgressWidth] = useState(0);
  const [optionsClicked, setOptionsClicked] = useState(false); 

  const handleOptionsClick = () => { 
    setOptionsClicked(prevState => !prevState); // Toggle the optionsClicked state
    console.log(score);
  }

  const handleStudyTimeChange = (e) => {
    const studyTime = parseInt(e.target.value);
    const breakTime = isStudyTime ? initialBreakTime : studyTime;
    const updatedStudyTime = isNaN(studyTime) ? initialStudyTime : studyTime;
    setInitialStudyTime(updatedStudyTime);
    setInitialBreakTime(breakTime);
  }

  const handleBreakTimeChange = (e) => {
    const breakTime = parseInt(e.target.value);
    const studyTime = !isStudyTime ? initialStudyTime : breakTime;
    const updatedBreakTime = isNaN(breakTime) ? initialBreakTime : breakTime;
    setInitialBreakTime(updatedBreakTime);
    setInitialStudyTime(studyTime);
  }

  const handleTimeUpdate = () => {
    setOptionsClicked(false);
  }

  const onTimerEnd = () => {
    setScore(prevScore => isStudyTime ? prevScore + 1 : prevScore); 
    setIsStudyTime(prevIsStudyTime => !prevIsStudyTime); 
  };

  const [initialStudyTime, setInitialStudyTime] = useState(6); // Default study time is 6 seconds
  const [initialBreakTime, setInitialBreakTime] = useState(4); // Default break time is 4 seconds

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
        <button className="options" onClick={handleOptionsClick}></button>
        <CircularBar progress={progressWidth}/>
        <h1>{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</h1>
        <p>{isStudyTime ? 'Study Time' : 'Break Time'}</p>
        <p>Pokemon Collected: {score}</p> 
        {optionsClicked && (
          <div className="time-inputs"> 
            <input 
              type="text" 
              value={initialStudyTime} 
              onChange={handleStudyTimeChange} 
              placeholder="Study Time (seconds)" 
              className="time-input" 
            /> 
            <input 
              type="text" 
              value={initialBreakTime} 
              onChange={handleBreakTimeChange} 
              placeholder="Break Time (seconds)" 
              className="time-input" 
            />
            <button onClick={handleTimeUpdate} className="update-timer-btn">Update Timer</button>
          </div>
        )}
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
