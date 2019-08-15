import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { TweenLite } from 'gsap';
import styles from './SideMenu.module.scss';


class SideMenu extends Component{
  constructor(props){
    super(props);
    this.state = {}
    this.links = null
  }

  render(){
    return(
      <div className={this.props.className}>
        <div className={styles[`side-menu-container`]}>
            <li><NavLink 
                to='/about'
                activeClassName="active-link">me</NavLink></li>
            <li><NavLink 
                to='/tech'
                activeClassName="active-link">tech</NavLink></li>
            <li><NavLink 
                to='/music'
                activeClassName="active-link">music</NavLink></li>
            <li><NavLink 
                to='/graphics'
                activeClassName="active-link">graphics</NavLink></li>
            <li><NavLink 
                to='/contact'
                activeClassName="active-link">contact</NavLink></li>
        </div>
      </div>
    )
  }
}
export default SideMenu;