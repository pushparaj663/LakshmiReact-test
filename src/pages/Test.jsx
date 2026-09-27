import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions, getActiveTest, saveActiveTest, clearActiveTest, saveTestResult, getCurrentUser } from '../utils/storage';
import { shuffleArray } from '../utils/testUtils';

export default function Test() {
  const navigate = useNavigate();
  const [testState, setTestState] = useState(null);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    const active = getActiveTest();
    if (active) {
      setTestState(active);
      setLoading(false);
    } else {
      const allQuestions = getQuestions();
      const shuffledQuestions = shuffleArray(allQuestions).map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }));
      
      const newState = {
        questions: shuffledQuestions,
        currentIdx: 0,
        answers: {},
        marked: {},
        remainingTime: 7200, // 2 hours
        startTime: Date.now()
      };
      setTestState(newState);
      saveActiveTest(newState);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (testState && testState.remainingTime > 0) {
      timerRef.current = setInterval(() => {
        setTestState(prev => {
          const nextState = { ...prev, remainingTime: prev.remainingTime - 1 };
          saveActiveTest(nextState);
          if (nextState.remainingTime <= 0) {
            clearInterval(timerRef.current);
            handleSubmitTest(nextState);
          }
          return nextState;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [testState?.remainingTime]);

  const handleSelectOption = (opt) => {
    const newState = {
      ...testState,
      answers: { ...testState.answers, [testState.questions[testState.currentIdx].id]: opt }
    };
    setTestState(newState);
    saveActiveTest(newState);
  };

  const handleMarkReview = () => {
    const qid = testState.questions[testState.currentIdx].id;
    const newState = {
      ...testState,
      marked: { ...testState.marked, [qid]: !testState.marked[qid] }
    };
    setTestState(newState);
    saveActiveTest(newState);
  };

  const handleSubmitTest = (finalState = testState) => {
    clearInterval(timerRef.current);
    
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    
    finalState.questions.forEach(q => {
      const ans = finalState.answers[q.id];
      if (!ans) unanswered++;
      else if (ans === q.correctAnswer) correct++;
      else wrong++;
    });

    const timeTaken = 7200 - finalState.remainingTime;
    const result = {
      username: getCurrentUser().username,
      date: new Date().toISOString(),
      score: correct,
      percentage: correct,
      correct,
      wrong,
      unanswered,
      timeTaken,
      testState: finalState
    };
    
    saveTestResult(result);
    clearActiveTest();
    navigate('/result', { state: { result } });
  };

  if (loading || !testState) return <div>Loading...</div>;

  const currentQ = testState.questions[testState.currentIdx];
  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <div style={{background: 'var(--bg-color)', minHeight: '100vh'}}>
      <div className="test-header">
        <h3>React Skills Assessment</h3>
        <div style={{fontWeight: 'bold', fontSize: '1.2rem', color: testState.remainingTime < 300 ? 'red' : 'inherit'}}>
          Timer: {formatTime(testState.remainingTime)}
        </div>
        <button className="btn-primary" onClick={() => {
          if (window.confirm('Are you sure you want to submit?')) handleSubmitTest();
        }}>Submit Test</button>
      </div>

      <div className="test-layout">
        <div className="question-area card">
          <h4>Question {testState.currentIdx + 1} of 100</h4>
          <p style={{fontSize: '18px', marginTop: '16px'}}>{currentQ.question}</p>
          
          <div className="options-grid">
            {currentQ.options.map((opt, i) => (
              <button 
                key={i} 
                className={`option-btn ${testState.answers[currentQ.id] === opt ? 'selected' : ''}`}
                onClick={() => handleSelectOption(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="test-controls">
            <button 
              className="btn-outline" 
              disabled={testState.currentIdx === 0}
              onClick={() => setTestState({...testState, currentIdx: testState.currentIdx - 1})}
            >Previous</button>
            
            <button 
              className="btn-review"
              onClick={handleMarkReview}
            >{testState.marked[currentQ.id] ? 'Unmark Review' : 'Mark for Review'}</button>
            
            <button 
              className="btn-primary"
              disabled={testState.currentIdx === 99}
              onClick={() => setTestState({...testState, currentIdx: testState.currentIdx + 1})}
            >Next</button>
          </div>
        </div>

        <div className="card">
          <h4 style={{marginBottom: '16px'}}>Question Navigator</h4>
          <div className="navigator-grid">
            {testState.questions.map((q, i) => {
              let cls = '';
              if (i === testState.currentIdx) cls = 'current';
              else if (testState.marked[q.id]) cls = 'review';
              else if (testState.answers[q.id]) cls = 'answered';
              return (
                <button 
                  key={q.id} 
                  className={`nav-btn ${cls}`}
                  onClick={() => setTestState({...testState, currentIdx: i})}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}