import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout, getTestHistory } from '../utils/storage';

export default function Dashboard() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getTestHistory().then(data => {
      setHistory(data.filter(h => h.username === user.username));
    });
  }, [user.username]);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const highestScore = history.length > 0 ? Math.max(...history.map(h => h.score)) : 0;
  const lastScore = history.length > 0 ? history[history.length - 1].score : 0;

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Welcome, {user.name}</h2>
        <button onClick={handleLogout} className="btn-outline">LOGOUT</button>
      </div>
      
      <div className="card" style={{marginBottom: '32px', textAlign: 'center'}}>
        <h1 style={{marginBottom: '16px'}}>React Skills Assessment</h1>
        <p style={{fontSize: '18px', marginBottom: '24px'}}>Total Questions: 100 | Duration: 2 Hours | Total Marks: 100</p>
        <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
          <button className="btn-primary" onClick={() => navigate('/test')}>START TEST</button>
          <button className="btn-outline" onClick={() => navigate('/history')}>TEST HISTORY</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-value">{history.length}</div>
          <div>Previous Attempts</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{highestScore}</div>
          <div>Highest Score</div>
        </div>
        <div className="card stat-card">
          <div className="stat-value">{lastScore}</div>
          <div>Last Score</div>
        </div>
      </div>
    </div>
  );
}