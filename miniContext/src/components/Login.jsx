import React, { useContext, useState } from 'react';
import UserContext from '../store/UserContext';

function Login() {
  const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    function handleSubmit(e) {
        e.preventDefault();
        setUser({ userName, password });
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
