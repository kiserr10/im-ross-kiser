import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.mainLinks}>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/tech'>tech</NavLink>
        <NavLink to='/music'>music</NavLink>
        <NavLink to='/graphics'>graphics</NavLink>
        <NavLink to='/contact'>contact</NavLink>
      </div>
    </div>
  )
}

export default Header