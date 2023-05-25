import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserCredentials } from '../redux/slices/userSlice';
import { RootState } from '../redux/store';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  const credentials = useSelector((state: RootState) => state.user.credentials);

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    dispatch(setUserCredentials({ username, password }));
    setUsername('');
    setPassword('');
    setError('');
  };

  if (credentials) {
    // Store credentials in memory only
    sessionStorage.setItem('userCredentials', JSON.stringify(credentials));

    return (
      <div>
        <h1>Welcome to the Home Page!</h1>
        <p>You are logged in as <strong>{credentials.username}</strong>.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Login Page</h1>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
