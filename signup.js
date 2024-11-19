// SignUp.js
import React from 'react';
import '../styles/style.css';
function SignUp() {
  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <p>Secure Your Communications with Easymail</p>
        <form>
          <div className="input-group">
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
            <p className="password-requirements">
              <span>✓</span> Least 8 characters
              <br />
              <span>✓</span> Least one number or symbol
              <br />
              <span>✓</span> Uppercase and lowercase letters
            </p>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Re-Type Password" />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p>Already a member? <a href="/signin">Sign in</a></p>
      </div>
      <div className="illustration">
        {/* Add icons, graphics, or SVG images here */}
      </div>
    </div>
  );
}

export default SignUp;
