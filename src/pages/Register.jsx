import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { saveUser, getUsers } from '../utils/storage';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', username: '', email: '', password: '', confirm: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      setError('Passwords do not match');
      return;
    }
    const users = getUsers();
    if (users.find(u => u.username === formData.username)) {
      setError('Username already exists');
      return;
    }
    
    saveUser({
      name: formData.name,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      registrationDate: new Date().toISOString()
    });
    
    setSuccess('Registration successful');
    setTimeout(() => navigate('/login'), 1500);
  };

  return (
    <div className="auth-container">
      <div className="card auth-card">
        <h2>Register</h2>
        {error && <div style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
        {success && <div style={{color: 'green', marginBottom: '10px'}}>{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" required onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" required onChange={e => setFormData({...formData, username: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" required onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" required onChange={e => setFormData({...formData, password: e.target.value})} />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" required onChange={e => setFormData({...formData, confirm: e.target.value})} />
          </div>
          <button type="submit" className="btn-primary" style={{width: '100%', marginTop: '10px'}}>Register</button>
        </form>
        <p style={{marginTop: '20px', textAlign: 'center'}}>
          Already have an account? <Link to="/login" style={{color: 'var(--primary)'}}>Login</Link>
        </p>
      </div>
    </div>
  );
}