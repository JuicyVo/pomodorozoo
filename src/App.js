import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import useTimer from './useTimer'; 
import MapSprites from './mapsprites';
import CircularBar from './circularbar';
import { initialStudyTime, initialBreakTime } from './useTimer';

function App() {
    const initialStudyTime = 5; 
    const initialBreakTime = 2; 
    const [pokemonScoreTimer, setPokemonScoreTimer] = useState(0);
    const [newStudyTime, setNewStudyTime] = useState(initialStudyTime);
    const [newBreakTime, setNewBreakTime] = useState(initialBreakTime);
  
    const { timeLeft, isRunning, startTimer, stopTimer, resetTimer, progressWidth, isStudyTime } = useTimer(newStudyTime, newBreakTime);

    const circleRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [optionsClicked, setOptionsClicked] = useState(false); 

    const handleOptionsClick = () => { 
        setOptionsClicked(prevState => !prevState); 
    }

    const handleStudyTimeChange = (e) => {
        const studyTime = parseInt(e.target.value);
        setNewStudyTime(studyTime);
        resetTimer(studyTime, newBreakTime); 
    }
  
    const handleBreakTimeChange = (e) => {
        const breakTime = parseInt(e.target.value);
        setNewBreakTime(breakTime);
        resetTimer(newStudyTime, breakTime); 
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setPokemonScoreTimer(prevTimer => prevTimer + 1); // Increment score only when the timer is running
            }
        }, 1200); // Score increments every 2 seconds, change later

        return () => clearInterval(interval);
    }, [isRunning]);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

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
                <h1>{formatTime(timeLeft)}</h1>
                <p>{isStudyTime ? 'Study Time' : 'Break Time'}</p> 
                <p>Pokemon Score: {pokemonScoreTimer}</p>
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
                    </div>
                )}
                {isRunning ? (
                    <button onClick={stopTimer}>Stop</button>
                ) : (
                    <button onClick={startTimer}>Start</button>
                )}
                <button onClick={resetTimer}>Reset</button>
            </div>
            <MapSprites score={pokemonScoreTimer}/>
        </div>
    );
}

export default App;
