import { useState, useEffect } from 'react';

function useTimer(defaultStudyTime, defaultBreakTime) {
  const [timeLeft, setTimeLeft] = useState(defaultStudyTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isStudyTime, setIsStudyTime] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);

  const startTimer = (studyTime, breakTime) => {
    setTimeLeft(isStudyTime ? studyTime : breakTime);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(isStudyTime ? defaultStudyTime : defaultBreakTime);
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
      setTimeLeft(defaultBreakTime);
      setIsStudyTime(false);
    } else {
      setTimeLeft(defaultStudyTime);
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
            return isStudyTime ? defaultBreakTime : defaultStudyTime;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, isStudyTime, defaultStudyTime, defaultBreakTime]);

  useEffect(() => {
    setProgressWidth((timeLeft / (isStudyTime ? defaultStudyTime : defaultBreakTime)) * 100);
  }, [timeLeft, isStudyTime, defaultStudyTime, defaultBreakTime]);

  return { timeLeft, isRunning, startTimer, stopTimer, resetTimer, handleStudyTimeChange, handleBreakTimeChange, progressWidth };
}

export default useTimer;
