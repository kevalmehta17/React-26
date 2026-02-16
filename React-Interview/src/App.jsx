import { useState } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((counter) => counter + 1);
    console.log('1st', counter);
    setCounter((counter) => counter + 1);
    console.log('2nd', counter);

    setCounter(counter + 1);
    console.log('3rd', counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Interview</h1>
      <h2>Counter Value:- {counter}</h2>
      <button onClick={addValue}>Add Value {counter} </button> <br />
      <button onClick={removeValue}>remove Value {counter} </button>
    </>
  );
}

export default App;
