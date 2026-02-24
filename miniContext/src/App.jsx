import './App.css';
import { useContext } from 'react';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';
import ThemeToggler from './components/ThemeToggler.jsx';
import ThemeContextProvider from './store/ThemeContextProvider.jsx';
import UserContextProvider from './store/UserContextProvider.jsx';
import ThemeContext from './store/ThemeContext.js';

// This component consumes ThemeContext — it MUST be inside ThemeContextProvider
function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? 'orange ' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
        minHeight: '100vh',
        padding: '20px',
        transition: 'all 0.3s ease',
      }}
    >
      <h1>Mini Context</h1>
      <Login />
      <Profile />
      <ThemeToggler />
    </div>
  );
}

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <AppContent />
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
