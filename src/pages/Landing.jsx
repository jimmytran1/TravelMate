import React from 'react'
import './Landing.css';
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <>
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={Logo} className="logo" alt="" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/login" className="nav__link">
              Login
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/signup" className="nav__link nav__link--primary">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <section id="landing">
        <div className="gradient__overlay"></div>
        <header>
            <div className="header__container white">
                <div className="header__description">
                    <h1>Explore with <span className='orange'>TravelMate</span></h1>
                    <h2>Connect on your ultimate <span className='orange'>travel network</span></h2>
                </div>
            </div>
        </header>
    </section>
    </>
  )
}
