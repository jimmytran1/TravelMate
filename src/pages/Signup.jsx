import React from 'react'
import './Login.css';
import Logo from '../assets/logo.jpg'

export default function Signup() {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src={Logo} alt="TravelMate Logo" className="login-logo" />
        <h1>Sign up!</h1>
      </div>
      <form className="login-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="sign-in-button">Sign In</button>
        <div className="divider">
          <hr className="line" />
          <span className="or">continue with</span>
          <hr className="line" />
        </div>
        <div className="social-login">
          <button className="social-button">G</button>
          <button className="social-button">F</button>
          <button className="social-button">T</button>
        </div>
        <div className="signup">
          Already have an account? <a href="/login" className="signup-link">Log In</a>
        </div>
      </form>
    </div>
  )
}
