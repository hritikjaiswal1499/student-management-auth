import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const role = localStorage.getItem('role');

  const commonLinks = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Timetable', path: '/dashboard/timetable' },
    { label: 'Announcements', path: '/dashboard/announcements' }
  ];

  const roleLinks = {
    admin: [
      { label: 'Manage Users', path: '/dashboard/users' },
      { label: 'Settings', path: '/dashboard/settings' }
    ],
    teacher: [
      { label: 'Grades', path: '/dashboard/grades' },
      { label: 'Attendance', path: '/dashboard/attendance' }
    ],
    student: [
      { label: 'Marks', path: '/dashboard/marks' },
      { label: 'Assignments', path: '/dashboard/assignments' }
    ]
  };

  return (
    <div style={{ width: '220px', background: '#111', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <h2>Dashboard</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {commonLinks.concat(roleLinks[role] || []).map((link, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            <Link to={link.path} style={{ color: '#fff', textDecoration: 'none' }}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
