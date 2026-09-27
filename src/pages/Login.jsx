import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUsers, loginUser, getCurrentUser } from '../utils/storage';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Raju' && password === '014009009@Aa') {
      loginUser({ username, role: 'ADMIN', name: 'Admin Raju' });
      navigate('/admin');
      return;
    }

    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      loginUser({ ...user, role: 'USER' });
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <h2>Login</h2>
        {error && <div style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '10px'}}>Login</button>
        </form>
        <p style={{marginTop: '20px', textAlign: 'center'}}>
          Don't have an account? <Link to="/register" style={{color: 'var(--primary)'}}>Register</Link>
        </p>
      </div>
    </div>
  );
}