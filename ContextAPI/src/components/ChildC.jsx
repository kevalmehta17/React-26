import { useContext } from 'react';
// import userContext from '../store/userContext.js'
import ThemeContext from '../store/userContext.js';

function ChildC() {
  // const userConsumer = useContext(userContext)
  const { theme, setTheme } = useContext(ThemeContext);

  function handleChange() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <div>
      <div style={{color: theme === 'light' ? "black" : "white"}}>Hello {theme}</div>
      <button onClick={handleChange}>Change Theme</button>
    </div>
  );
}

export default ChildC;
