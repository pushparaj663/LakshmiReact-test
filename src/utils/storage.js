export const getUsers = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : [];
};

export const saveUser = (user) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const loginUser = (user) => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const getQuestions = () => {
  const qs = localStorage.getItem('questions');
  if (qs) return JSON.parse(qs);
  
  // Load default if empty
  return null;
};

export const saveQuestions = (questions) => {
  localStorage.setItem('questions', JSON.stringify(questions));
};

export const getActiveTest = () => {
  const test = localStorage.getItem('activeTest');
  return test ? JSON.parse(test) : null;
};

export const saveActiveTest = (testState) => {
  localStorage.setItem('activeTest', JSON.stringify(testState));
};

export const clearActiveTest = () => {
  localStorage.removeItem('activeTest');
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const getTestHistory = async () => {
  try {
    const res = await fetch(`${API_URL}/api/results`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const saveTestResult = async (result) => {
  try {
    await fetch(`${API_URL}/api/results`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result)
    });
  } catch (err) {
    console.error(err);
  }
};
