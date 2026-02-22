import { useMemo, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState();

  function expensiveTask(num) {
    console.log('inside');
    for (let i = 0; i < 10000; i++) {}
    console.log('after loop');
    return num * 2;
  }
  let doubleVal = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count: {count}</div>
      <input
        type="number"
        placeholder="enter number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>Double:- {doubleVal}</div>
    </>
  );
}

export default App;
