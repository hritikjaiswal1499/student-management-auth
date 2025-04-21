import React from 'react';
import Sidebar from './Sidebar';
import { Routes, Route } from 'react-router-dom';
import AdminView from './roles/AdminView';
import TeacherView from './roles/TeacherView';
import StudentView from './roles/StudentView';

function Dashboard() {
  const role = localStorage.getItem('role');

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ flex: 1, padding: '20px' }}>
        <Routes>
          {role === 'admin' && <Route path="/" element={<AdminView />} />}
          {role === 'teacher' && <Route path="/" element={<TeacherView />} />}
          {role === 'student' && <Route path="/" element={<StudentView />} />}
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;