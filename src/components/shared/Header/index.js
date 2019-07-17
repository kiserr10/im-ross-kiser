import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.mainLinks}>
        
          <NavLink exact={true} to='/' activeClassName={styles.activeLink}>home</NavLink>
          <NavLink to='/about' activeClassName={styles.activeLink}>about</NavLink>
          <NavLink to='/tech' activeClassName={styles.activeLink}>tech</NavLink>
          <NavLink to='/music' activeClassName={styles.activeLink}>music</NavLink>
          <NavLink to='/graphics' activeClassName={styles.activeLink}>graphics</NavLink>
          <NavLink to='/contact' activeClassName={styles.activeLink}>contact</NavLink>
        
      </div>
    </div>
  )
}

export default withRouter(Header) 