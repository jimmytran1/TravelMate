import React from 'react';
import { submitLogin } from '../actions/authActions';
import { connect } from 'react-redux';
import Logo from '../assets/logo.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'

const Login = ({ dispatch }) => {
  const navigate = useNavigate(); // Access the navigate function

  const [details, setDetails] = React.useState({
    username: '',
    password: ''
  });

  const updateDetails = event => {
    const { id, value } = event.target;
    setDetails(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const login = event => {
    event.preventDefault();
    dispatch(submitLogin(details));
    navigate('/home'); // Use navigate to redirect
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src={Logo} alt="TravelMate Logo" className="login-logo" />
        <h1 className="login__header">Welcome back!</h1>
      </div>
      <form className="login-form">
        <input id="username" type="email" placeholder="Email" required onChange={updateDetails} value={details.username}/>
        <input id="password" type="password" placeholder="Password" required  onChange={updateDetails} value={details.password}/>
        <div className="remember-me">
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe"> Remember me</label>
        </div>
        <a href="/forgot-password" className="forgot-password">Forgot password?</a>
        <button type="submit" className="sign-in-button" onClick={login}>Log In</button>
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
  );
};

export default connect()(Login);
