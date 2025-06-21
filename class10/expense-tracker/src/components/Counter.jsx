import React, { useState } from 'react';

// how to remove h4 
// make number only non-negative

export default function Counter() {
  const [count, setCount] = useState(0);
  const [isFive, setIsFive] = useState(false);

  const increment = () => {
    let newCount = count + 1;
    setCount(newCount);

    if (newCount === 5) {
      setIsFive(true);
    }
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter Application</h1>
      <h3>{count}</h3>
      
      <div className='button-container'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>

      {
        isFive && <h4>Count is five</h4>
      }
    </div>
  )
};