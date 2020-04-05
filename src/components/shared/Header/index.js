import React, { useContext } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import styles from './Header.module.scss'
import { Context } from '../../../context';
import BurgerMenu from '../BurgerMenu';
import SideMenu from '../SideMenu';


const Header = () => {
  const store = useContext(Context);

  return(
    <div className={styles.wrapper}>
      <div 
        className={!store.state.isSideOpen 
          ? styles.menuIconWrap 
          : `${styles.menuIconWrap} ${styles.openMenuShift}` 
        } 
        onClick={store.updateSideBarStatus}
      >
        <BurgerMenu />
      </div>
      <div className={styles.mainLinks}>
          <NavLink exact={true} to='/' activeClassName={styles.activeLink}>home</NavLink>
          <NavLink to='/about' activeClassName={styles.activeLink}>about</NavLink>
          <NavLink to='/tech' activeClassName={styles.activeLink}>tech</NavLink>
          <NavLink to='/music' activeClassName={styles.activeLink}>music</NavLink>
          <NavLink to='/graphics' activeClassName={styles.activeLink}>graphics</NavLink>
          <NavLink to='/contact' activeClassName={styles.activeLink}>contact</NavLink>
      </div>
      <h3 className={styles.mainName}>rk.</h3>
    </div>
  )
}

export default withRouter(Header) 