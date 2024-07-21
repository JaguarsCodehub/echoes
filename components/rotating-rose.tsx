import React from 'react';

const Rose = () => {
  const petals = Array.from({ length: 15 }).map((_, i) => (
    <div
      key={i}
      className='petal'
      style={{ transform: `rotate(${i * 24}deg)` }}
    >
      <div className='inner-petal'></div>
    </div>
  ));

  return (
    <div className='rose-container'>
      <div className='rose'>{petals}</div>
      <div className='stem'></div>
    </div>
  );
};

const RoseComponent = () => (
  <div className='h-screen bg-pink-50 flex items-center justify-center'>
    <Rose />
  </div>
);

export default RoseComponent;
