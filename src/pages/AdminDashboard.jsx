import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsers, getQuestions, getTestHistory, logout, saveQuestions } from '../utils/storage';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const [users, setUsersLocal] = useState(getUsers());
  const [questions, setQuestionsLocal] = useState(getQuestions() || []);
  const [history, setHistory] = useState([]);
  const [searchQ, setSearchQ] = useState('');
  const [filterTopic, setFilterTopic] = useState('');
  const [filterDiff, setFilterDiff] = useState('');

  useEffect(() => {
    getTestHistory().then(data => setHistory(data));
  }, []);

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

  const deleteQuestion = (id) => {
    if(window.confirm('Delete question?')) {
      const nq = questions.filter(q => q.id !== id);
      setQuestionsLocal(nq);
      saveQuestions(nq);
    }
  };

  const filteredQuestions = questions.filter(q => {
    const mSearch = q.question.toLowerCase().includes(searchQ.toLowerCase());
    const mTopic = filterTopic ? q.topic === filterTopic : true;
    const mDiff = filterDiff ? q.difficulty === filterDiff : true;
    return mSearch && mTopic && mDiff;
  });

  const uniqueTopics = [...new Set(questions.map(q => q.topic))];

  return (
    <div className="container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="btn-outline">LOGOUT</button>
      </div>

      <div style={{display: 'flex', gap: '16px', marginBottom: '24px'}}>
        <button className={activeTab === 'overview' ? 'btn-primary' : 'btn-outline'} onClick={() => setActiveTab('overview')}>Overview</button>
        <button className={activeTab === 'questions' ? 'btn-primary' : 'btn-outline'} onClick={() => setActiveTab('questions')}>Questions</button>
        <button className={activeTab === 'users' ? 'btn-primary' : 'btn-outline'} onClick={() => setActiveTab('users')}>Users</button>
        <button className={activeTab === 'results' ? 'btn-primary' : 'btn-outline'} onClick={() => setActiveTab('results')}>Results</button>
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

      {activeTab === 'questions' && (
        <div className="card">
          <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '16px'}}>
            <h3>Manage Questions</h3>
            <button className="btn-primary" onClick={() => alert('Add Question logic here')}>Add Question</button>
          </div>
          <div style={{display: 'flex', gap: '16px', marginBottom: '16px'}}>
            <input type="text" placeholder="Search questions..." value={searchQ} onChange={e => setSearchQ(e.target.value)} style={{padding: '8px', flex: 1}} />
            <select value={filterTopic} onChange={e => setFilterTopic(e.target.value)} style={{padding: '8px'}}>
              <option value="">All Topics</option>
              {uniqueTopics.map((t, i) => <option key={i} value={t}>{t}</option>)}
            </select>
            <select value={filterDiff} onChange={e => setFilterDiff(e.target.value)} style={{padding: '8px'}}>
              <option value="">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Slightly Difficult">Slightly Difficult</option>
            </select>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Topic</th>
                <th>Difficulty</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredQuestions.map(q => (
                <tr key={q.id}>
                  <td>{q.id}</td>
                  <td>{q.question.substring(0, 50)}...</td>
                  <td>{q.topic}</td>
                  <td>{q.difficulty}</td>
                  <td>
                    <button className="btn-outline" style={{marginRight: '8px'}} onClick={() => alert('Edit Question '+q.id)}>Edit</button>
                    <button className="btn-danger" onClick={() => deleteQuestion(q.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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