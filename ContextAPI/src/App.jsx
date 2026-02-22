import { useState } from 'react';
// import UserContext from './store/userContext.js'
import ThemeContext from './store/userContext.js';
import './App.css';
import ChildA from './components/ChildA';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className='container' style={{backgroundColor:theme === 'light' ? "beige" : "black"}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
