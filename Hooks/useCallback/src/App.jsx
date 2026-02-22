import { useCallback, useState } from 'react';

import './App.css';
import Child from './Components/Child';

function App() {
  const [count, setCount] = useState(0);
  console.log("Re-created")

  // function handleClick() {
  //   setCount(count + 1);
  // }
  const expensiveFunction =useCallback( () => { 
    console.log("i am running");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) { 
      result += i;

    }
    return result;
      
  })
  const handleClick = useCallback(() => {
    setCount(count => count + 1);
  },[])

  return (
    <>
      <div>
        Count: {count}    <br />    <br />
        <p>expensive function result: {expensiveFunction()}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />
      <div>
        {/* <Child name="keval" onClick={handleClick}>Click Me!</Child> */}
      </div>
    </>
  );
}

export default App;
