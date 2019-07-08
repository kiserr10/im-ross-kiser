import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
  return(
    <div className="header-container">
      <h1>HEADER</h1>
      <NavLink to='/about'>TO ABOUT</NavLink>
    </div>
  )
}

export default Header