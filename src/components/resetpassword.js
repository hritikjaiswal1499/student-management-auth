import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (email) {
      navigate('/');
    }
  };

  return (
    <div className="glass-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">Send Reset Link</button>
        <Link to="/">Back to login</Link>
      </form>
    </div>
  );
}
export default ResetPassword;