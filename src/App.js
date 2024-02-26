import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import useTimer from './useTimer'; 
import MapSprites from './mapsprites';
import CircularBar from './circularbar';
import { initialStudyTime, initialBreakTime } from './useTimer';



function App() {

    const initialStudyTime = 3; 
    const initialBreakTime = 2; 
  
    const [newStudyTime, setNewStudyTime] = useState(initialStudyTime);
    const [newBreakTime, setNewBreakTime] = useState(initialBreakTime);
  
    const { timeLeft, isRunning, startTimer, stopTimer, resetTimer, isStudyTime, progressWidth } = useTimer(newStudyTime, newBreakTime);

  

  const circleRef = useRef(null);




  const [score, setScore] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [optionsClicked, setOptionsClicked] = useState(false); 


  const handleOptionsClick = () => { 
    setOptionsClicked(prevState => !prevState); // Toggle the optionsClicked state
    console.log(score);
  }

  const handleStudyTimeChange = (e) => {
    const studyTime = parseInt(e.target.value);
    setNewStudyTime(studyTime);
  }
  
  const handleBreakTimeChange = (e) => {
    const breakTime = parseInt(e.target.value);
    setNewBreakTime(breakTime);
  }

  const handleUpdateTimer = () => {
    resetTimer(newStudyTime, newBreakTime);
  }

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
              value={newStudyTime} 
              onChange={handleStudyTimeChange} 
              placeholder="Study Time (seconds)" 
              className="time-input" 
            /> 
            <input 
              type="text" 
              value={newBreakTime} 
              onChange={handleBreakTimeChange} 
              placeholder="Break Time (seconds)" 
              className="time-input" 
            />
            <button onClick={handleUpdateTimer} className="update-timer-btn">Update Timer</button>
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
