import React, { Component } from 'react';
import { TimelineMax, TweenMax } from 'gsap';
import styles from './BurgerMenu.module.scss';


class BurgerMenu extends Component {
  constructor(props){
    super(props);
    this.burger = null
    this.menuToggle = new TimelineMax({paused:true, reversed:true, delay: '1s'}, 2);
    this.topbar = null;
    this.midbar = null;
    this.botbar = null;

  }
  //
  componentDidMount(){
    this.menuToggle  
    .set(this, {className:"-=closemenu"})
    .set(this, {className:"+=openmenu"})
    .to(this.topbar, .2, { y:'-9px', transformOrigin: '50% 50%' }, 'burg')
    .to(this.botbar, .2, { y:'9px', transformOrigin: '50% 50%' }, 'burg')
    .to(this.midbar, .2, { scale:0.1, transformOrigin: '50% 50%' }, 'burg')
    .add('rotate')
    .to(this.topbar, .2, { y:'5' }, 'rotate')
    .to(this.botbar, .2, { y:'-5' }, 'rotate')
    .to(this.topbar, .2, { rotationZ:45, transformOrigin: '50% 50%' }, 'rotate')
    .to(this.botbar, .2, { rotationZ:-45, transformOrigin: '50% 50%' }, 'rotate')
  }

  onClick = () => {
    TweenMax.delayedCall(.3, () => {
      this.menuToggle.reversed() ? this.menuToggle.restart() : this.menuToggle.reverse();
    })
  }
  //
  render() {
    return ( 
      <div className={styles[`burger-menu`]} onClick={this.onClick}>
        <svg id="burger" className="openmenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path ref={topbar => this.topbar = topbar} className="top" d="M0 9h30v2H0z"/>
          <line ref={midbar => this.midbar = midbar} className="mid" x1="0" y1="15" x2="30" y2="15" stroke="#F74753" strokeWidth="3" vectorEffect="non-scaling-stroke"/>
          <path ref={botbar => this.botbar = botbar} className="bot" d="M0 19h30v2H0z"/>
        </svg>
      </div>
    )
  }
}
export default BurgerMenu;