import { useState, useEffect } from 'react';

function useTimer(initialStudyTime, initialBreakTime) {
  const [timeLeft, setTimeLeft] = useState(initialStudyTime);
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
    setTimeLeft(isStudyTime ? initialStudyTime : initialBreakTime);
    setIsRunning(false);
  };

  const handleStudyTimeChange = (studyTime) => {
    setIsStudyTime(true);
    setTimeLeft(studyTime);
  };

  const handleBreakTimeChange = (breakTime) => {
    setIsStudyTime(false);
    setTimeLeft(breakTime);
  };

  const onTimerEnd = () => {
    if (isStudyTime) {
      setTimeLeft(initialBreakTime);
      setIsStudyTime(false);
    } else {
      setTimeLeft(initialStudyTime);
      setIsStudyTime(true);
    }
    setIsRunning(false);
  };

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            onTimerEnd();
            return isStudyTime ? initialBreakTime : initialStudyTime;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, isStudyTime, initialStudyTime, initialBreakTime]);

  useEffect(() => {
    setProgressWidth((timeLeft / (isStudyTime ? initialStudyTime : initialBreakTime)) * 100);
  }, [timeLeft, isStudyTime, initialStudyTime, initialBreakTime]);

  return { timeLeft, isRunning, startTimer, stopTimer, resetTimer, handleStudyTimeChange, handleBreakTimeChange, progressWidth };
}

export default useTimer;
