import React from 'react'
import Logo from '../assets/logo.jpg'
import NavButtons from './NavButtons'

export default function Nav({ btn }) {
  return (
    <nav>
      <div className="nav__container">
        <a href="/Home">
          <img src={Logo} className="logo" alt="" />
        </a>
        <ul className="nav__links">
          <NavButtons text={["Home", "Discover", "Profile", "Sign Out"]} defaultButton={btn}/>
        </ul>
      </div>
    </nav>
  )
}
