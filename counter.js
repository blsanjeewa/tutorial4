// Counter.js
import React, { useState } from 'react';
const Counter = (props) => {
// State for the counter value
const [count, setCount] = useState(props.initialCount);
// Function to handle incrementing the counter
const handleIncrement = () => {
setCount(count + props.step);
};
// Function to handle decrementing the counter
const handleDecrement = () => {
setCount(count - props.step);
};
return (
<div>
<h3>Counter: {count}</h3>
<button onClick={handleIncrement}>Increment</button>
<button onClick={handleDecrement}>Decrement</button>
</div>
);
};
export default Counter;