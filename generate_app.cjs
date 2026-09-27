const fs = require('fs');
const path = require('path');

const files = {
  'src/components/ProtectedRoute.jsx': `
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/storage';

const ProtectedRoute = ({ children, adminOnly }) => {
  const user = getCurrentUser();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (adminOnly && user.role !== 'ADMIN') {
    return <Navigate to="/dashboard" replace />;
  }
  
  if (!adminOnly && user.role === 'ADMIN') {
    return <Navigate to="/admin" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
  `,
  'src/App.jsx': `
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import Test from './pages/Test';
import Result from './pages/Result';
import Review from './pages/Review';
import History from './pages/History';
import ProtectedRoute from './components/ProtectedRoute';
import { getQuestions, saveQuestions } from './utils/storage';
import { initialQuestions } from './data/questions';
import './styles.css';

function App() {
  useEffect(() => {
    if (!getQuestions()) {
      saveQuestions(initialQuestions);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* User Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/test" element={<ProtectedRoute><Test /></ProtectedRoute>} />
        <Route path="/result" element={<ProtectedRoute><Result /></ProtectedRoute>} />
        <Route path="/review" element={<ProtectedRoute><Review /></ProtectedRoute>} />
        <Route path="/history" element={<ProtectedRoute><History /></ProtectedRoute>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  `,
  'src/pages/Login.jsx': `
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
  `,
  'src/pages/Register.jsx': `
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
  `,
  'src/pages/Dashboard.jsx': `
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout, getTestHistory } from '../utils/storage';

export default function Dashboard() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const history = getTestHistory().filter(h => h.username === user.username);
  
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
  `,
  'src/pages/Test.jsx': `
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
    return \`\${h}:\${m}:\${s}\`;
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
                className={\`option-btn \${testState.answers[currentQ.id] === opt ? 'selected' : ''}\`}
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
                  className={\`nav-btn \${cls}\`}
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
  `,
  'src/pages/Result.jsx': `
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
    return \`\${h}:\${m}:\${s}\`;
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
  `,
  'src/pages/Review.jsx': `
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
            <div key={q.id} className="card" style={{borderLeft: \`4px solid \${isCorrect ? 'var(--correct)' : (uAns ? 'var(--wrong)' : 'var(--review)')}\`}}>
              <h4>Question {i + 1}</h4>
              <p style={{marginTop: '12px', fontSize: '16px'}}>{q.question}</p>
              
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
  `,
  'src/pages/History.jsx': `
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getTestHistory, getCurrentUser } from '../utils/storage';

export default function History() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const history = getTestHistory().filter(h => h.username === user.username);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return \`\${h}:\${m}:\${s}\`;
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
          <div style={{overflowX: 'auto'}}>
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
  `,
  'src/pages/AdminDashboard.jsx': `
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, getQuestions, getTestHistory, logout, saveQuestions, saveUser } from '../utils/storage';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const [users, setUsersLocal] = useState(getUsers());
  const [questions, setQuestionsLocal] = useState(getQuestions() || []);
  const history = getTestHistory();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const avgScore = history.length > 0 ? (history.reduce((acc, h) => acc + h.score, 0) / history.length).toFixed(2) : 0;

  const deleteUser = (username) => {
    if(window.confirm('Delete user?')) {
      const nu = users.filter(u => u.username !== username);
      setUsersLocal(nu);
      localStorage.setItem('users', JSON.stringify(nu));
    }
  };

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="btn-outline">LOGOUT</button>
      </div>

      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        <button className={activeTab === 'overview' ? 'btn-primary' : 'btn-outline'} onClick={() => setActiveTab('overview')}>Overview</button>
        <button className={activeTab === 'users' ? 'btn-primary' : 'btn-outline'} onClick={() => setActiveTab('users')}>Manage Users</button>
        <button className={activeTab === 'results' ? 'btn-primary' : 'btn-outline'} onClick={() => setActiveTab('results')}>View Results</button>
      </div>

      {activeTab === 'overview' && (
        <div className="stats-grid">
          <div className="card stat-card">
            <div className="stat-value">{users.length}</div>
            <div>Total Users</div>
          </div>
          <div className="card stat-card">
            <div className="stat-value">{history.length}</div>
            <div>Total Attempts</div>
          </div>
          <div className="card stat-card">
            <div className="stat-value">{questions.length}</div>
            <div>Total Questions</div>
          </div>
          <div className="card stat-card">
            <div className="stat-value">{avgScore}</div>
            <div>Average Score</div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="card">
          <h3>Registered Users</h3>
          <table className="table" style={{marginTop: '16px'}}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Registration Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={i}>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{new Date(u.registrationDate).toLocaleDateString()}</td>
                  <td>
                    <button className="btn-danger" onClick={() => deleteUser(u.username)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'results' && (
        <div className="card">
          <h3>Test Results</h3>
          <table className="table" style={{marginTop: '16px'}}>
            <thead>
              <tr>
                <th>User</th>
                <th>Date</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Correct</th>
                <th>Wrong</th>
              </tr>
            </thead>
            <tbody>
              {history.map((h, i) => (
                <tr key={i}>
                  <td>{h.username}</td>
                  <td>{new Date(h.date).toLocaleDateString()}</td>
                  <td>{h.score}/100</td>
                  <td>{h.percentage}%</td>
                  <td style={{color: 'var(--correct)'}}>{h.correct}</td>
                  <td style={{color: 'var(--wrong)'}}>{h.wrong}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
  `,
  'src/main.jsx': `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
  `
};

for (const [filePath, content] of Object.entries(files)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content.trim());
}
console.log('App files generated successfully.');
