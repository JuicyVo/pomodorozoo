import { useState, useEffect } from 'react';

function useTimer(initialStudyTime, initialBreakTime, onTimerEnd) {
  const [timeLeft, setTimeLeft] = useState(initialStudyTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isStudyTime, setIsStudyTime] = useState(true);

  useEffect(() => {
    let timer;
    const duration = isStudyTime ? initialStudyTime : initialBreakTime;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            setIsRunning(false);
            setIsStudyTime(prevIsStudyTime => !prevIsStudyTime); // Switch between study and break time
            onTimerEnd();
            return duration; 
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, isStudyTime, initialStudyTime, initialBreakTime, onTimerEnd]);

  useEffect(() => {
    // Reset the timer whenever isStudyTime changes
    setTimeLeft(isStudyTime ? initialStudyTime : initialBreakTime);
  }, [isStudyTime, initialStudyTime, initialBreakTime]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(isStudyTime ? initialStudyTime : initialBreakTime); // Reset timer to study or break time
    setIsRunning(false);
  };

  return { timeLeft, isRunning, startTimer, stopTimer, resetTimer };
}

export default useTimer;
