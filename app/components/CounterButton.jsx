'use client'
import React from 'react';
import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4 text-center">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Kliko Mua: {count}
      </button>
    </div>
  );
};

export default CounterButton;