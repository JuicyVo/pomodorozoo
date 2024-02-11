import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import backgroundImage from './images/background.png';

function App() {
  const [studyTimeLeft, setStudyTimeLeft] = useState(5); // Initial study time in seconds
  const [breakTimeLeft, setBreakTimeLeft] = useState(2); // Initial break time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(1);
  const [isStudyTime, setIsStudyTime] = useState(true);
  const circleRef = useRef(null);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (isStudyTime) {
          setStudyTimeLeft(prevTimeLeft => {
            if (prevTimeLeft === 0) {
              clearInterval(timer);
              setIsRunning(false);
              setIsStudyTime(false); // Switch to break time after study time ends
              setScore(prevScore => prevScore + 0.5); // Increase score only during study time
              return 5; // Reset study time to 5 seconds
            }
            return prevTimeLeft - 1;
          });
        } else {
          setBreakTimeLeft(prevTimeLeft => {
            if (prevTimeLeft === 0) {
              clearInterval(timer);
              setIsRunning(false);
              setIsStudyTime(true); // Switch back to study time after break time ends
              return 2; // Reset break time to 2 seconds for now
            }
            return prevTimeLeft - 1;
          });
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, isStudyTime]);

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

    handleScroll(); // Initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (isStudyTime) {
      setStudyTimeLeft(5); // Reset study time to 5 seconds
    } else {
      setBreakTimeLeft(2); // Reset break time to 2 seconds
    }
    setIsRunning(false);
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, width: '150vw', height: '100vh', overflowX: 'auto', position: 'relative' }}>
      <div className="center-circle" ref={circleRef} style={{ position: 'absolute', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>{isStudyTime ? formatTime(studyTimeLeft) : formatTime(breakTimeLeft)}</h1>
        <p>{isStudyTime ? 'Study Time' : 'Break Time'}</p>
        <p>Pokemon Collected: {score} </p> 
        {isRunning ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>

      <div className="sprites">
        <img src="/sprites/pikachu1.gif" alt="Pikachu" style={{ width: '30px', height: '30px', marginBottom: '100px', marginLeft:'145px' }} />
      </div>
    </div>
  );
}

export default App;
