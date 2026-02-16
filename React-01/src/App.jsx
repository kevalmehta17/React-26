// import { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting.jsx';
function Child({ data }) {
  data.age = 30;
  return <h1>{data.age}</h1>;
}
function App() {
  
  // const [user, setUser] = useState({
  // name: "Keval",
  // age: 22
  // });

  // return <Greeting name="keval" />;
   const user = { name: "Keval", age: 22 };

  return <Child data={user} />;
}

export default App;
