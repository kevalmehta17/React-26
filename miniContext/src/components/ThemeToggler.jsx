import React, { useContext } from 'react';
import ThemeContext from '../store/ThemeContext.js';

function ThemeToggler() {
  const { setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return <button onClick={handleTheme}>Switch Theme</button>;
}

export default ThemeToggler;
