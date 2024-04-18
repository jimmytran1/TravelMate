import React from 'react'
import './Login.css';
import Logo from '../assets/logo.jpg'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-header">
        <img src={Logo} alt="TravelMate Logo" className="login-logo" />
        <h1>Welcome back!</h1>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe"> Remember me</label>
        </div>
        <a href="/forgot-password" className="forgot-password">Forgot password?</a>
        <button type="submit" className="sign-in-button">Log In</button>
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
          Don't have an account? <a href="/signup" className="signup-link">Sign Up</a>
        </div>
      </form>
    </div>
  )
}
