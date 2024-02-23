import React from 'react';

const CircularBar = ({ progress }) => {
  const circleSize = 250; 
  const strokeWidth = 20; 
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  // Calculate the progress offset
  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ position: 'absolute', top: '-16%', left: '-13%', transform: 'translate(-50%, -50%)' }}>
      <svg width={circleSize} height={circleSize} style={{ position: 'absolute' }}>

        <circle
          stroke="#ccc" // Color for outline
          strokeWidth={strokeWidth}
          fill="none"
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
        />
        {/* Progress circle */}
        <circle
          stroke="#007bff" 
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          fill="none"
          cx={circleSize / 2}
          cy={circleSize / 2}
          r={radius}
          transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
        />
      </svg>
    </div>
  );
};

export default CircularBar;
