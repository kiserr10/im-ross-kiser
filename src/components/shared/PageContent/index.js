import React, { Component } from 'react'
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Consumer } from '../../../context';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Tech from '../../pages/Tech';
import Music from '../../pages/Music';
import Graphics from '../../pages/Graphics';
import Contact from '../../pages/Contact';
import NotFound from '../../pages/NotFound';
import SideMenu from '../SideMenu';
//
class PageContent extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Consumer>
        {(context) => (
          <div className="content-wrapper">
            <TransitionGroup className="transition-group">
              <CSSTransition
                key={this.props.location.key}
                timeout={{ enter: 300, exit: 300 }}
                classNames={'fade'}
              >
                <section className="route-section">
                  <Switch location={this.props.location}>
                    <Route exact path='/' component={Home} />  
                    <Route path='/about' component={About} />  
                    <Route path='/tech' component={Tech} />  
                    <Route path='/music' component={Music} />  
                    <Route path='/graphics' component={Graphics} />  
                    <Route path='/contact' component={Contact} />  
                    <Route component={NotFound} />  
                  </Switch>
                </section>
              </CSSTransition>
            </TransitionGroup>
            <SideMenu
              className={context.state.isSideOpen ? "side-menu-container open" : "side-menu-container closed"}
            />
            { this.props.children }
          </div>
        )}
        </Consumer>
      )
    }
  }

export default withRouter(PageContent);