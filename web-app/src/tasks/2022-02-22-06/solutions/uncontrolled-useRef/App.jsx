// Uncontrolled useRef solution for 2022-02-22-06 task
import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    alert(`Submitted value: ${value}`);
  };

  return (
    <div>
      <h1>Uncontrolled useRef Solution</h1>
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Enter text..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
