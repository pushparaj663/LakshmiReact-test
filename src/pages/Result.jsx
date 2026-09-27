import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  if (!result) return <div>No result found. <button onClick={() => navigate('/dashboard')}>Go Home</button></div>;

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="container">
      <div className="card result-container">
        <h2 style={{marginBottom: '24px', color: 'var(--primary)'}}>TEST COMPLETED</h2>
        
        <div style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '8px'}}>{result.score} / 100</div>
        <div style={{fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '32px'}}>Percentage: {result.percentage}%</div>
        
        <div className="stats-grid" style={{marginBottom: '32px'}}>
          <div>
            <div style={{color: 'var(--correct)', fontSize: '1.5rem', fontWeight: 'bold'}}>{result.correct}</div>
            <div>Correct</div>
          </div>
          <div>
            <div style={{color: 'var(--wrong)', fontSize: '1.5rem', fontWeight: 'bold'}}>{result.wrong}</div>
            <div>Wrong</div>
          </div>
          <div>
            <div style={{color: 'var(--review)', fontSize: '1.5rem', fontWeight: 'bold'}}>{result.unanswered}</div>
            <div>Unanswered</div>
          </div>
        </div>
        
        <div style={{marginBottom: '32px'}}>
          <strong>Time Taken:</strong> {formatTime(result.timeTaken)}
        </div>

        <div style={{display: 'flex', gap: '16px', justifyContent: 'center'}}>
          <button className="btn-primary" onClick={() => navigate('/review', { state: { result } })}>VIEW ANSWERS</button>
          <button className="btn-outline" onClick={() => navigate('/test')}>RETAKE TEST</button>
          <button className="btn-outline" onClick={() => navigate('/dashboard')}>DASHBOARD</button>
        </div>
      </div>
    </div>
  );
}