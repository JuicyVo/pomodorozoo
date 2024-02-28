import { useState, useEffect } from 'react';

function useTimer(newStudyTime, newBreakTime) {
  const [timeLeft, setTimeLeft] = useState(newStudyTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isStudyTime, setIsStudyTime] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsStudyTime(true); 
    setTimeLeft(newStudyTime);
    setIsRunning(false);
  };

  const handleStudyTimeChange = () => {
    setTimeLeft(newStudyTime);
    setIsStudyTime(true);
  };

  const handleBreakTimeChange = () => {
    setTimeLeft(newBreakTime);
    setIsStudyTime(false);
  };

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft === 0) {
            const nextTime = isStudyTime ? newBreakTime : newStudyTime;
            setIsStudyTime(!isStudyTime); // Toggle between study time and break time
            return nextTime;
          } else {
            return prevTimeLeft - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, newStudyTime, newBreakTime, isStudyTime]);

  useEffect(() => {
    setProgressWidth((timeLeft / (isStudyTime ? newStudyTime : newBreakTime)) * 100);
  }, [timeLeft, isStudyTime, newStudyTime, newBreakTime]);

  useEffect(() => {
    if (isRunning) {
      setTimeLeft(isStudyTime ? newStudyTime : newBreakTime);
    }
  }, [isStudyTime, newStudyTime, newBreakTime, isRunning]);

  return { timeLeft, isRunning, startTimer, stopTimer, resetTimer, handleStudyTimeChange, handleBreakTimeChange, progressWidth, isStudyTime };
}

export default useTimer;
