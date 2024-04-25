import React, { useState } from 'react';
import { submitRegister } from '../actions/authActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Logo from '../assets/logo.jpg';

const Signup = ({ dispatch }) => {
    const [details, setDetails] = useState({
        name: '',
        username: '',
        password: ''
    });
    const navigate = useNavigate(); // Initialize the navigate function

    const updateDetails = event => {
        const { id, value } = event.target;
        setDetails(prevDetails => ({
            ...prevDetails,
            [id]: value
        }));
    };

    const register = event => {
        event.preventDefault();
        dispatch(submitRegister(details)).then(() => {
            // Redirect to signupinfo after successful registration using navigate
            navigate('/signupinfo');
        });
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <img src={Logo} alt="TravelMate Logo" className="login-logo" />
                <h1 className="orange">Sign up!</h1>
            </div>
            <form className="login-form">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    onChange={updateDetails}
                    value={details.name}
                />
                <input
                    type="email"
                    id="username"
                    placeholder="Email"
                    required
                    onChange={updateDetails}
                    value={details.username}
                />
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    onChange={updateDetails}
                    value={details.password}
                />

                <button type="submit" className="sign-in-button" onClick={register}>
                    Sign Up
                </button>
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
    );
};

export default connect()(Signup);
