import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update progress every 50 milliseconds (adjust as needed)
      setProgress(prevProgress => (prevProgress < 100 ? prevProgress + 1 : 100));
    }, 30);

    // Clear the interval after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    // Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div style={{ marginTop: '20px', position: 'relative' }}>
      <div
        style={{
          width: '100%',
          height: '20px',
          backgroundColor: '#f0f0f0',
          borderRadius: '4px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: `${progress}%`,
            height: '100%',
            backgroundColor: 'lightgreen',
            borderRadius: '4px',
            transition: 'width 0.5s ease-in-out',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
