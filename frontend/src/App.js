import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Login';

import Profile from './components/Profile';
import Header from './components/Header';
import './styles.css';

// Simple Navigation Component


function App() {
  const [, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Login setIsAuthenticated={setIsAuthenticated} initialSignup={true} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
