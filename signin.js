import React, { useState } from 'react';
import '../styles/style.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add sign-in logic here
  };

  return (
    <div className="sign-in-container">
      <div className="form-section">
        <h2>Sign In</h2>
        <p>Welcome back! Please enter your details.</p>
        <form onSubmit={handleSignIn}>
          <div className="input-field">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
        <div className="social-signin">
          <p>Or continue with</p>
          <div className="social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
        <p className="sign-up-link">Don’t have an account? <a href="/signup">Sign up</a></p>
      </div>
      <div className="visual-section">
        {/* Add visual content similar to the sign-up page */}
        <div className="visual-content">
          <h3>Your data, your rules</h3>
          <p>With us, your data remains private and secure.</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
