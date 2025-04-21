import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import ResetPassword from './components/resetpassword';
import './App.css';

function App() {
  return (
    <div className="bg-image">
      <h1 style={{ color: 'white', fontSize: '3rem' }}>
        Welcome to Student Management System
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
