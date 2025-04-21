import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [user, setUser] = useState({ name: '', email: '', password: '', role: 'student' });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (user.email && user.password && user.name) {
      navigate('/');
    }
  };

  return (
    <div className="glass-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Name" onChange={(e) => setUser({...user, name: e.target.value})}/>
        <input type="email" placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})}/>
        <select onChange={(e) => setUser({...user, role: e.target.value})}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
        <Link to="/">Already have account?</Link>
      </form>
    </div> 
  );
}

export default Signup;
