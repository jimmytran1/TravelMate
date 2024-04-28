import React from 'react'
import Logo from '../assets/logo.jpg'

export default function Landing() {
  return (
    <>
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={Logo} className="logo" alt="" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/login" className="nav__link">
              Login
            </a>
          </li>
          <li className="nav__list">
            <a href="/signup" className="nav__link nav__link--primary">
              Sign up
            </a>
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
