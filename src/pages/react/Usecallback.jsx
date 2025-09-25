import React, { useCallback } from 'react'
import Child from './Child';
import { useState } from 'react';

const Usecallback = () => {
    const [count, setCount] = useState(0);
    
 const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
         <button onClick={() => setCount(count + 1)}>Increase {count}</button>
      <Child onClick={handleClick} />
    </div>
  )
}

export default Usecallback