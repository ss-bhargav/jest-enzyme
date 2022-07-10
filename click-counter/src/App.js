import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(true);

  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The counter is currently&nbsp;
        <span data-test="count">{count >= 0 ? count : 0}</span>
      </h1>
      {
        error && <h2>The counter cannot be less than 0</h2> 
      }
      <button
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => count > 0 ? setCount(count - 1) : setError(true)}
      >
        Decrement counter
      </button>
    </div>
  );
}

export default App;
