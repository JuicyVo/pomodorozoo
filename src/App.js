import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import backgroundImage from './images/background.png';
import useTimer from './useTimer'; 

import MapSprites from './mapsprites';




function App() {
  const circleRef = useRef(null);

  const [score, setScore] = useState(1); 
  const [isStudyTime, setIsStudyTime] = useState(true); 

 
  const onTimerEnd = () => {
    setScore(prevScore => isStudyTime ? prevScore + 1 : prevScore); 
    setIsStudyTime(prevIsStudyTime => !prevIsStudyTime); 
  };

  const initialStudyTime = isStudyTime ? 5 : 2;
const initialBreakTime = isStudyTime ? 2 : 5;

const { timeLeft, isRunning, startTimer, stopTimer, resetTimer } = useTimer(initialStudyTime, initialBreakTime, onTimerEnd);


  useEffect(() => {
    const handleScroll = () => {
      const circle = circleRef.current;
      const viewportWidth = window.innerWidth;
      const circleWidth = circle.offsetWidth;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
      const newLeft = (viewportWidth - circleWidth) / 2 + scrollLeft;
    
      circle.style.left = `${Math.max(newLeft, 0)}px`;
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, width: '150vw', height: '100vh', overflowX: 'auto', position: 'relative' }}>
      <div className="center-circle" ref={circleRef} style={{ position: 'absolute', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
