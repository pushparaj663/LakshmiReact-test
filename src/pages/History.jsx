import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTestHistory, getCurrentUser } from '../utils/storage';

export default function History() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getTestHistory().then(data => {
      setHistory(data.filter(h => h.username === user.username));
    });
  }, [user.username]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Test History</h2>
        <button onClick={() => navigate('/dashboard')} className="btn-primary">Back to Dashboard</button>
      </div>
      
      <div className="card">
        {history.length === 0 ? (
          <p>No tests taken yet.</p>
        ) : (
          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Attempt</th>
                  <th>Date</th>
                  <th>Score</th>
                  <th>Percentage</th>
                  <th>Correct</th>
                  <th>Wrong</th>
                  <th>Unanswered</th>
                  <th>Time Taken</th>
                </tr>
              </thead>
              <tbody>
                {history.map((h, i) => (
                  <tr key={i}>
                    <td>Attempt {i + 1}</td>
                    <td>{new Date(h.date).toLocaleDateString('en-GB')}</td>
                    <td>{h.score}/100</td>
                    <td>{h.percentage}%</td>
                    <td style={{color: 'var(--correct)'}}>{h.correct}</td>
                    <td style={{color: 'var(--wrong)'}}>{h.wrong}</td>
                    <td style={{color: 'var(--review)'}}>{h.unanswered}</td>
                    <td>{formatTime(h.timeTaken)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}