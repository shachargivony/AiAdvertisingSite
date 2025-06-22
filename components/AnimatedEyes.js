import React, { useEffect, useState } from 'react';

function getRandomPupilPosition() {
  // left: 4px עד 16px, top: 4px עד 12px (רק חצי עליון)
  const left = 4 + Math.random() * 12;
  const top = 4 + Math.random() * 8;
  return { left, top };
}

export function AnimatedEyes() {
  const [pos, setPos] = useState(getRandomPupilPosition());

  useEffect(() => {
    const interval = setInterval(() => {
      setPos(getRandomPupilPosition());
    }, 4000); // כל 4 שניות
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block align-middle ml-2 eyes-animation">
      <span className="eye">
        <span
          className="pupil"
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            transition: 'left 1.5s cubic-bezier(.7,0,.3,1), top 1.5s cubic-bezier(.7,0,.3,1)'
          }}
        ></span>
      </span>
      <span className="eye">
        <span
          className="pupil"
          style={{
            left: `${pos.left}px`,
            top: `${pos.top}px`,
            transition: 'left 1.5s cubic-bezier(.7,0,.3,1), top 1.5s cubic-bezier(.7,0,.3,1)'
          }}
        ></span>
      </span>
    </span>
  );
} 