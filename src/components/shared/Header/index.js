import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  const { wrapper, mainLinks, activeLink } = styles
  return(
    <div className={wrapper}>
      <div className={mainLinks}>
        
          <NavLink exact={true} to='/' activeClassName={activeLink}>home</NavLink>
          <NavLink to='/about' activeClassName={activeLink}>about</NavLink>
          <NavLink to='/tech' activeClassName={activeLink}>tech</NavLink>
          <NavLink to='/music' activeClassName={activeLink}>music</NavLink>
          <NavLink to='/graphics' activeClassName={activeLink}>graphics</NavLink>
          <NavLink to='/contact' activeClassName={activeLink}>contact</NavLink>
        
      </div>
    </div>
  )
}

export default withRouter(Header) 