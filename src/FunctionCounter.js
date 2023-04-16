import React, { useState } from 'react';

function FunctionCounter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h2>Function Counter</h2>
      <h2 className="counter">Count: {count}</h2>
      <button className="button" onClick={handleIncrease}>
        Increase Count
      </button>
      <button className="button" onClick={handleDecrease}>
        Decrease Count
      </button>
      <button className="button" onClick={handleReset}>
        Reset Count
      </button>
    </div>
  );
}

export default FunctionCounter;
