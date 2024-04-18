import React from 'react'
import Logo from '../assets/logo.jpg'

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={Logo} className="logo" alt="" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="/messages" className="nav__link">
              Messages
            </a>
          </li>
          <li className="nav__list">
            <a href="/friends" className="nav__link">
              Friends
            </a>
          </li>
          <li className="nav__list">
            <a href="/discover" className="nav__link">
              Discover
            </a>
          </li>
          <li className="nav__list">
            <a href="/profile" className="nav__link nav__link--primary">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
