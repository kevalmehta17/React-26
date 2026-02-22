import { memo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React.memo()</h1>
      <button onClick={handleClick}>Count is {count}</button>
      {count > 5 ? <Child name="Keval" /> : <Child name="Neo" />}
    </div>
  );
}

const Child = memo(function Child({ name }) {
  console.log(`Hello ${name}`);
  return <h2>{name}</h2>
});

// const Child = memo(function Child(prop) {
//   console.log("Child Component!!")
//   return <h2>Child Component, {prop.p}</h2>
// }, (prevProp, nextProp) =>  true);

// const MemoizeChild = memo(Child);

export default App;
