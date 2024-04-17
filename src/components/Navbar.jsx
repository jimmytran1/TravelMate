import React from 'react'
import Logo from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <nav>
      <div className="nav__container">
        <a href="">
          <img src={Logo} className="logo" alt="" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Login
            </a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link nav__link--primary">
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
