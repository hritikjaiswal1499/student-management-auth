import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      navigate('/');
    }
  };
  
  return (
    <div className="glass-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e) => setUser({...user, email: e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e) => setUser({...user, password: e.target.value})}/>
        <button type="/sidebar">Login</button>
        <Link to="/signup">Sign up</Link>
        <Link to="/reset-password">Forgot password?</Link>
      </form>
    </div>
  );
}

export default Login;
