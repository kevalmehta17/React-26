
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './store/UserContextProvider.jsx'

function App() {

  return (
    <UserContextProvider>
      <h1>Mini Context</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
