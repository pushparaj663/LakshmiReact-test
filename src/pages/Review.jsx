import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Review() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  if (!result) return <div>No data. <button onClick={() => navigate('/dashboard')}>Go Home</button></div>;

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Review Answers</h2>
        <button onClick={() => navigate('/dashboard')} className="btn-primary">Back to Dashboard</button>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '24px'}}>
        {result.testState.questions.map((q, i) => {
          const uAns = result.testState.answers[q.id];
          const isCorrect = uAns === q.correctAnswer;
          
          return (
            <div key={q.id} className="card review-item" style={{borderColor: isCorrect ? 'var(--correct)' : (uAns ? 'var(--wrong)' : 'var(--review)')}}>
              <h4>Question {i + 1} <span style={{fontSize: '12px', color: '#666', marginLeft: '10px'}}>[{q.topic}]</span></h4>
              <p className="question-text">{q.question}</p>
              
              <div style={{marginTop: '16px', display: 'flex', gap: '40px'}}>
                <div>
                  <span style={{color: 'var(--text-muted)'}}>Your Answer:</span><br/>
                  <strong>{uAns || '— Not Answered'}</strong>
                </div>
                <div>
                  <span style={{color: 'var(--text-muted)'}}>Correct Answer:</span><br/>
                  <strong style={{color: 'var(--correct)'}}>{q.correctAnswer}</strong>
                </div>
              </div>
              
              <div style={{marginTop: '16px', fontWeight: 'bold', color: isCorrect ? 'var(--correct)' : (uAns ? 'var(--wrong)' : 'var(--review)')}}>
                {isCorrect ? '✓ Correct' : (uAns ? '❌ Wrong' : '— Not Answered')}
              </div>

              {q.explanation && (
                <div className="explanation">
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}